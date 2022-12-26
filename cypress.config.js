const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:
      "https://configurador.seat.es/seat-cc/configurator/LIVE/003/DEFAULT/es/car-selector",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
