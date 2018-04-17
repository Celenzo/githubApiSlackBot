'use strict';

module.exports = () => {
  return require('common-env')().getOrElseAll({
    api: {
      host: '0.0.0.0',
      port: 4567
    },
    amqp: {
      exchange: {
        name: 'exchange',
        type: 'direct'
      }
    },
    github: {
      userAgent: ''
    }
  });
};
