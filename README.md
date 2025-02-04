# 🧪 Test Automation with Cypress & Mocha Reporter

![Cypress](https://img.shields.io/badge/Cypress-13.17.0-brightgreen) 
![Mocha](https://img.shields.io/badge/Mocha-9.2.2-blue)
![Node.js](https://img.shields.io/badge/Node.js-LTS-yellowgreen)

## 📌 Overview
This project is an automated test suite using **Cypress** for end-to-end testing, integrated with **Mocha Reporter** for test reporting.

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

This project uses **Mocha Reports** for test reporting.

### **Generate and View Report**
```bash
npx cypress run
```

🔹 This command will:
1. Generate a clean **Mocha report** from test results.
2. Open the Mocha report in the browser.

---

## 📂 Project Structure

```
📁 project-folder/
├── 📁 cypress/
│   ├── 📁 reports/           # Generated Mocha reports
│   ├── 📁 e2e/               # Test cases
│   ├── 📁 fixtures/          # Test data
│   ├── 📁 screenshots/       # Folder where Cypress screenshots are stored for failed tests.
│   ├── 📁 support/           # Custom commands & configuration
├── 📁 mochawesome-report/    # Mocha report raw data      
├── 📄 cypress.config.js      # Cypress configuration
├── 📄 package.json           # Project dependencies & scripts
├── 📄 README.md              # Project documentation

```

---

## 🛠️ Dependencies

| Package                     | Version  |
|-----------------------------|----------|
| **Cypress**                 | 13.17.0  |
| **Mocha**                   | 9.2.2    |
| **mochawesome**             | 7.1.3    |
| **mochawesome-merge**       | 4.3.0    |
| **mochawesome-report-generator** | 6.2.0 |
| **nanoid**                  | 3.1.31+  |
| **@faker-js/faker**         | 9.4.0    |

---

## 📌 Notes

- ⚡ Ensure all dependencies are installed before running tests.
- 🔄 Mocha reports should be regenerated before viewing to get updated results.
- 🖥️ The test execution may vary depending on the selected browser.

🚀 **Happy Testing!** 🎯

