# DemoBlaze Cypress E2E Tests

This repository contains end-to-end (E2E) tests for the DemoBlaze project using Cypress. These tests automate the process of selecting a product and completing the purchase on the DemoBlaze website.

## Test Context

### Test Description

The E2E test case in `spec.cy.js`:

1. Sets the default command timeout to 20 seconds.
2. Visits the Demo Blaze website.
3. Selects a product ("Samsung galaxy s6") by clicking on its title.
4. Adds the selected product to the cart.
5. Navigates to the cart.
6. Extracts and logs the total price from the cart.
7. Proceeds to place the order.
8. Fills out the order form with sample data.
9. Confirms the purchase.
10. Verifies the purchase confirmation, including the purchase ID, purchase date, and other details.

### Customization

Feel free to customize the Cypress tests (`spec.cy.js`) according to your needs. You can find the test scripts in the `cypress/e2e` directory.

## Getting Started

### Prerequisites

You'll need the following software installed on your computer:

- [Node.js](https://nodejs.org/) (with npm, which comes with Node.js)

### Installation

  **1. Clone this repository to your local machine using Git:**

     git clone https://github.com/shamasjohnson/demoblaze.git

  **2.  Navigate to the project directory:**

     cd demoblaze

  **3.  Install the project's dependencies (including Cypress):**

     npm install

**Running Tests (Graphical User Interface)**

You can run the Cypress E2E tests using the following command:

     npx cypress open

This will open the Cypress Test Runner, allowing you to select and run the spec.cy.js test file interactively.

**Running Tests (Command Line)**

To run the Cypress tests from the command line, you can use the following command:

     npx cypress run --spec "cypress/e2e/spec.cy.js"

This command will execute the tests in the spec.cy.js file and provide a command-line summary of the results.

**License**

This project is licensed under the MIT License - see the LICENSE.md file for details.


**Acknowledgments**

Cypress - The E2E testing framework used.
DemoBlaze - The DemoBlaze project.
