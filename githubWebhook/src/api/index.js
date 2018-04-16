'use strict';

module.exports = (server, config, services) => {
  const handlers = require('./handlers')(services);
  return require('./routes')(server, handlers);
};
