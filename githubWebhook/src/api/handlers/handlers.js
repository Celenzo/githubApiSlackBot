'use strict';

module.exports = (messageGenerator, services) => {
  return {
    event(req, res) {
      const message = messageGenerator.generate(req.headers, req.payload.payload);
      services.AMQPService.send(message);
      return '';
    }
  };
};
