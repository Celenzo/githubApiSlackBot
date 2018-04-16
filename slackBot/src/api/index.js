'use strict';

module.exports = (config, services) => {
  const handlers = require('./handlers')(config, services);
  require('./worker')(services, handlers);
};
