'use strict';

module.exports = messageGenerator => {
  return {
    event(req, res) {
      const message = messageGenerator.generate(req.headers, req.payload.payload);
      console.log(message);
      return '';
    }
  };
};
