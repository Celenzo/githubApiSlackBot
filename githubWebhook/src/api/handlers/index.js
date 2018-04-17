'use strict';

module.exports = (services, config) => {
  const commentsBlockBuilder = require('./slackCommentsBlockBuilder')(services, config);
  const generators = require('./eventMessageGenerator')(commentsBlockBuilder);
  return {
    github: require('./handlers')(generators, services)
  };
};
