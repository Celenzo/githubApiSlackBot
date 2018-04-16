'use strict';

module.exports = (server, config) => {
  return require('./api')(server, config);
};
