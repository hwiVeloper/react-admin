module.exports = function override(config, env) {
  return config;
};

const { override, addDecoratorsLegacy } = require("customize-cra");

module.exports = override(addDecoratorsLegacy());
