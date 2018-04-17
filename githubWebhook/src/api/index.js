'use strict';

module.exports = (server, config, services) => {
  const handlers = require('./handlers')(services, config);
  return require('./routes')(server, handlers);
};
