'use strict';

module.exports = (services, config) => {
  const generators = require('./eventMessageGenerator')(services, config);
  return {
    github: require('./handlers')(generators, services)
  };
};
