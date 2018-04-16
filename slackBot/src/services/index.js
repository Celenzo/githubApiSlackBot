'use sctrict';

module.exports = (config, handlers) => {
  return require('./AMQPService')(config, handlers).then(AMQPService => {
    return {
      AMQPService
    };
  });
};
