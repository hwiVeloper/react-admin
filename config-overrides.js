const { override, addDecoratorsLegacy } = require("customize-cra");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config;
};

// Adds legacy decorator support to the Webpack configuration.
module.exports = override(addDecoratorsLegacy());
