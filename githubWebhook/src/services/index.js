'use strict';

module.exports = config => {
  return require('./AMQPService')(config).then(AMQPService => {
    return {
      AMQPService,
      PlatformService: require('./platform')()
    };
  });
};
