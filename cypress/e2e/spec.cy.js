// Set the default command timeout
Cypress.config('defaultCommandTimeout', 20000);
// Describe the test

// Define selector constants for better readability
const productTitle = 'h4.card-title a';
const addToCartButton = 'a.btn.btn-success';
const cartLink = '#navbarExample > ul > li:nth-child(4) > a';
const cartTotal = '#totalp';
const placeOrderButton = '#page-wrapper > div > div.col-lg-1 > button';
const confirmPurchaseButton = '#orderModal > div > div > div.modal-footer > button.btn.btn-primary'

describe('Demo Blaze Purchase Test', () => {
  // Specify the test case
  it('Selects a Product and Completes the Purchase', () => {
    
    // Visit the Demo Blaze website
    cy.visit('https://www.demoblaze.com')

    // Select a product by clicking on its title
    cy.contains(productTitle, 'Samsung galaxy s6').click()

    // Add the selected product to the cart
    cy.contains(addToCartButton, 'Add to cart').click()

    // Navigate to the cart
    cy.get(cartLink).contains('Cart').click()

    // Extract and log the total price from the cart
    cy.get(cartTotal).should('exist').should('be.visible').invoke('text').then((extractedCartTotal) => {
      // Log the cart total
      cy.log("Cart Total: " + extractedCartTotal);

      // Proceed to place the order
      cy.get(placeOrderButton).contains('Place Order').click()

      // Fill out the order form
      cy.get('input#name').type('John Doe');
      cy.get('input#country').type('United States');
      cy.get('input#city').type('New York');
      cy.get('input#card').type('1234567890123456'); // A random valid credit card number
      cy.get('input#month').type('12');
      cy.get('input#year').type('2025');

      // Confirm the purchase
      cy.contains(confirmPurchaseButton, 'Purchase').click();

      // Verify the purchase confirmation
      cy.get('.sweet-alert h2').should('contain', 'Thank you for your purchase!');

      // Extract and validate the purchase ID
      cy.get('.sweet-alert p.lead').invoke('text').then((text) => {
        const idMatch = text.match(/Id:\s*(\d{7,})/);
        expect(idMatch).to.not.be.null;
        const id = idMatch[1];
        expect(id).to.match(/^\d{7,}$/);
      });

      // Validate other purchase details
      cy.get('.sweet-alert p.lead').should('contain', `Amount: ${extractedCartTotal} USD`);
      cy.get('.sweet-alert p.lead').should('contain', 'Card Number: 1234567890123456');
      cy.get('.sweet-alert p.lead').should('contain', 'Name: John Doe');

      // Calculate and log the purchase date (one month ago)
      const currentDate = new Date();
      currentDate.setMonth(currentDate.getMonth() - 1);
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      cy.log("Purchase Date: " + formattedDate);

      // Validate the purchase date
      cy.get('.sweet-alert p.lead').should('contain', `Date: ${formattedDate}`);
    });
  });
});