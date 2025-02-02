const { defineConfig } = require("cypress");
const { allureCypress } = require('allure-cypress/reporter')
const os = require('os')

const env = process.env.NODE_ENV || 'dev'

function removeUrlSuffix(text='') {
  return text.replace(/URL=.*/, '')
}

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 30000,
  pageLoadTimeout:60000,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  experimentalWebKitSupport: true,

  env: {
    allure: true,
    video: false,
    allureReuseAfterSpec: true
  },
  
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    includeShadowDom: true,
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      let browserName = ''

      on('before:browser:launch', (browser = {}, launchOptions) => {
        browserName = browser.name || 'electron'
        return launchOptions
      })

      allureCypress(on, config, {
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
          environment: env,
          browser: removeUrlSuffix(browserName),
        },
      })
      return config;
    },
    // Para setar o caminho dos testes.
    specPattern: [
      "cypress/e2e/specs/*.spec.js",
   ],
  },
});
