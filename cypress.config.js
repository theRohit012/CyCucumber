const
  { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  reporter: 'cypress-mochawesome-reporter',

  retries: {
    runMode: 1,

  },

  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/features/*.feature',
    baseUrl: "https://rahulshettyacademy.com/seleniumPractise/#/",
    step_definitions: "cypress/e2e/features/step_definitions",
  },
});

