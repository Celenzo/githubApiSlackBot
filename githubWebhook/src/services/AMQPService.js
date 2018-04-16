'use strict';

const amqp = require('amqplib');

module.exports = async config => {
  const connection = await amqp.connect();
  const AMQPChannel = await connection.createChannel();
  await AMQPChannel.assertExchange(config.amqp.exchange.name, config.amqp.exchange.type, {
    durable: false
  });
  return {
    async send(message) {
      return await AMQPChannel.publish(
        config.amqp.exchange.name,
        '',
        new Buffer(JSON.stringify(message))
      );
    }
  };
};
