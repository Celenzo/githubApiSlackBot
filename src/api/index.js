'use strict';

module.exports = (server, config) => {
  const handlers = require('./handlers')();
  return require('./routes')(server, handlers);
};
