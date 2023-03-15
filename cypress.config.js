const { defineConfig } = require('cypress')
const { setupDb } = require('./workshop-scripts/testSetupTask.js')

module.exports = defineConfig({
  viewportHeight: 700,
  viewportWidth: 1250,
  experimentalStudio: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
    //  return require('./cypress/plugins/index.js')(on, config)
      on('task', { setupDb })
    },
    baseUrl: 'http://localhost:3000',
    experimentalWebKitSupport: true
  },
})
