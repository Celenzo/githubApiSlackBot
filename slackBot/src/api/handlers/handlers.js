'use strict';

module.exports = (config, { SlackService }) => {
  return {
    async onMessage(message) {
      SlackService.postMessage(message);
      return message;
    }
  };
};
