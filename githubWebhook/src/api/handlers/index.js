'use strict';

module.exports = services => {
  const generators = require('./eventMessageGenerator')();
  return {
    github: require('./handlers')(generators, services)
  };
};
