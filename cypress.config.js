const { defineConfig } = require("cypress");


module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 50000,
  pageLoadTimeout:60000,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  experimentalWebKitSupport: true,
  reporter: 'mochawesome',
  reporterOptions: {
    // disable overwrite to generate many JSON reports
    "overwrite": true,
    // do not generate intermediate HTML reports
    "html": true,
    // generate intermediate JSON reports
    "json": false,
    reportDir: "cypress/reports",
    reportFilename: "mochawesomeReport_[datetime]-[name]",
    timestamp: "longDate"
  },

  env: {
    video: false,
    videoUploadOnPasses: false,
  },
  
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    includeShadowDom: true,
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config; 
    },
    // Set Path Tests.
    specPattern: [
      "cypress/e2e/specs/*.spec.js",
   ],
  },
});