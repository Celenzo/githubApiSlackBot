'use strict';

module.exports = (server, config) => {
  return require('./services')(config).then(resolvedServices => {
    require('./api')(server, config, resolvedServices);
  });
};
