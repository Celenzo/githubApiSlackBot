'use strict';

module.exports = () => {
  return require('common-env')().getOrElseAll({
    api: {
      host: '0.0.0.0',
      port: 7654
    },
    amqp: {
      exchange: {
        name: 'exchange',
        type: 'direct'
      },
      deadexchange: {
        name: 'deadexchange',
        type: 'fanout'
      }
    },
    slack: {
      token: 'token',
      conversationId: '-1',
      webhook: 'https://hooks.slack.com/services/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'
    }
  });
};
