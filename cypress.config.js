import { defineConfig } from "cypress";
const { allureCypress } = require('allure-cypress/reporter')


function removeUrlSuffix(text) {
  return text.replace(/URL=.*/, '')
}

export default defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 30000,
  pageLoadTimeout:60000,
  screenshotOnRunFailure: true,

  env: {
    allure: true,
    video: false,
    allureReuseAfterSpec: true
  },
  
  e2e: {
    baseUrl: "https://www.vr.com.br/",
    chromeWebSecurity: false,
    includeShadowDom: true,
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      let browserName = null

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
      "cypress/e2e/features/**/*.cy.*",
   ],
  },
});
