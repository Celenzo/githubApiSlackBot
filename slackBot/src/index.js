'use strict';

module.exports = config => {
  return require('./services')(config).then(services => {
    require('./api')(config, services);
  });
};
