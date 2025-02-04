Test Automation with Cypress & Allure

📌 Overview

This project is an automated test suite using Cypress for end-to-end testing, integrated with Allure for test reporting.

🛠️ Setup & Installation

1. Prerequisites

Node.js (LTS version recommended)

npm or yarn

2. Clone the Repository

git clone <repo-url>
cd <project-folder>

3. Install Dependencies

npm install

🚀 Running the Tests

Run Cypress in Different Browsers

Google Chrome:

npm run tests-chrome

Microsoft Edge:

npm run tests-edge

Mozilla Firefox:

npm run tests-firefox

WebKit (via Playwright):

npm run tests-webkit

Open Cypress Test Runner

npm run open

📊 Test Reports

This project uses Allure Reports for test reporting.

Generate and View Report

npm run report

This command will:

Generate a clean Allure report from test results.

Open the Allure report in the browser.

📂 Project Structure

├── cypress/
│   ├── e2e/               # Test cases
│   ├── fixtures/          # Test data
│   ├── support/           # Custom commands & configuration
├── allure-results/        # Allure report raw data
├── allure-report/         # Generated Allure reports
├── cypress.config.js      # Cypress configuration
├── package.json           # Project dependencies & scripts
├── README.md              # Project documentation

🛠️ Dependencies

Cypress: v13.17.0

Allure Cypress Plugin: v2.40.2

Allure Command Line: v2.32.0

Playwright WebKit: v1.50.1

@faker-js/faker: v9.4.0

jQuery: v3.7.1

📌 Notes

Ensure all dependencies are installed before running tests.

Allure reports should be regenerated before viewing to get updated results.

The test execution may vary depending on the selected browser.

Happy Testing! 🚀
