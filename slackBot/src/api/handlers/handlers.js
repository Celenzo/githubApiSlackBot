'use strict';

module.exports = (config, { SlackService }) => {
  return {
    async onMessage(message) {
      console.log(message);
      SlackService.postMessage(message);
      return message;
    }
  };
};
