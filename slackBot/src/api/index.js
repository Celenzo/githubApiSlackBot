'use strict';

module.exports = (config, services) => {
  const handlers = require('./handlers')(config);
  require('./worker')(services, handlers);
};
