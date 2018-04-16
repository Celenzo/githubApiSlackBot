'use strict';

module.exports = (config, services) => {
  return {
    github: require('./handlers')(config, services)
  };
};
