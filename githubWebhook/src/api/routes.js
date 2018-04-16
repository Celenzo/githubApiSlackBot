'use strict';

module.exports = (server, handlers) => {
  server.route({
    method: 'POST',
    path: '/bot',
    handler: handlers.github.event
  });
};
