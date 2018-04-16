'use strict';

module.exports = config => {
  const Slack = require('node-slackr');
  const slack = new Slack(config.slack.webhook, {
    channel: config.slack.channel,
    username: 'github'
  });

  return {
    async postMessage(message) {
      slack.notify(message)
    }
  };
};
