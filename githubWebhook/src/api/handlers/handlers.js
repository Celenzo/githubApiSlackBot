'use strict';

module.exports = (messageGenerator, services) => {
  return {
    event(req, res) {
      const message = messageGenerator
        .generate(req.headers, req.payload.payload)
        .then(message => {
          services.AMQPService.send(message);
        })
        .catch(err => err);
      return '';
    }
  };
};
