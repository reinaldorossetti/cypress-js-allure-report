# 🧪 Test Automation with Cypress & Allure

![Cypress](https://img.shields.io/badge/Cypress-13.17.0-brightgreen) 
![Allure](https://img.shields.io/badge/Allure-2.32.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-LTS-yellowgreen)

## 📌 Overview
This project is an automated test suite using **Cypress** for end-to-end testing, integrated with **Allure** for test reporting.

---

## 🛠️ Setup & Installation

### **1. Prerequisites**
- ✅ Node.js (LTS version recommended)
- ✅ npm or yarn

### **2. Clone the Repository**
```bash
git clone <repo-url>
cd <project-folder>
```

### **3. Install Dependencies**
```bash
npm install
```

---

## 🚀 Running the Tests

### **Run Cypress in Different Browsers**
- 🟢 **Google Chrome:**
  ```bash
  npm run tests-chrome
  ```
- 🔵 **Microsoft Edge:**
  ```bash
  npm run tests-edge
  ```
- 🟠 **Mozilla Firefox:**
  ```bash
  npm run tests-firefox
  ```
- 🍏 **WebKit (via Playwright):**
  ```bash
  npm run tests-webkit
  ```

### **Open Cypress Test Runner**
```bash
npm run open
```

---

## 📊 Test Reports

This project uses **Allure Reports** for test reporting.

### **Generate and View Report**
```bash
npm run report
```

🔹 This command will:
1. Generate a clean **Allure report** from test results.
2. Open the Allure report in the browser.

---

## 📂 Project Structure

```
📁 project-folder/
├── 📁 cypress/
│   ├── 📁 e2e/               # Test cases
│   ├── 📁 fixtures/          # Test data
│   ├── 📁 support/           # Custom commands & configuration
├── 📁 allure-results/        # Allure report raw data
├── 📁 allure-report/         # Generated Allure reports
├── 📄 cypress.config.js      # Cypress configuration
├── 📄 package.json           # Project dependencies & scripts
├── 📄 README.md              # Project documentation
```

---

## 🛠️ Dependencies
| Package                     | Version  |
|-----------------------------|----------|
| **Cypress**                 | 13.17.0  |
| **Allure Cypress Plugin**   | 2.40.2   |
| **Allure Command Line**     | 2.32.0   |
| **Playwright WebKit**       | 1.50.1   |
| **@faker-js/faker**         | 9.4.0    |
| **jQuery**                  | 3.7.1    |

---

## 📌 Notes
- ⚡ Ensure all dependencies are installed before running tests.
- 🔄 Allure reports should be regenerated before viewing to get updated results.
- 🖥️ The test execution may vary depending on the selected browser.

🚀 **Happy Testing!** 🎯

