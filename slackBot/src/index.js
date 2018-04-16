'use strict';

module.exports = (server, config) => {
  return require('./services')(config).then(services => {
    require('./api')(config, services);
  });
};
