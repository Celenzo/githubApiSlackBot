'use strict';

module.exports = () => {
  const generators = require('./eventMessageGenerator')();
  return {
    github: require('./handlers')(generators)
  };
};
