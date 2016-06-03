/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bunsen-demo',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {}
    },

    APP: {}
  };

  switch (environment) {
    case 'demo':
      ENV.baseURL = '/bunsen-tutorial';
      break;

    case 'test':
      // Testem prefers this...
      ENV.baseURL = '/';
      ENV.locationType = 'none';

      // keep test console output quieter
      ENV.APP.LOG_ACTIVE_GENERATION = false;
      ENV.APP.LOG_VIEW_LOOKUPS = false;

      ENV.APP.rootElement = '#ember-testing';
      break;
  }

  return ENV;
};
