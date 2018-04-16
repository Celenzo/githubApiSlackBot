'use strict';

const amqp = require('amqplib');

module.exports = async config => {
  const connection = await amqp.connect();
  const AMQPChannel = await connection.createChannel();
  const AMQPAssertExchange = async (name, type) => {
    await AMQPChannel.assertExchange(name, type, { durable: false });
  };
  AMQPAssertExchange(config.amqp.exchange.name, config.amqp.exchange.type);
  AMQPAssertExchange(config.amqp.deadexchange.name, config.amqp.deadexchange.type);
  const queue = await AMQPChannel.assertQueue('', { exclusive: true }).then(res => res.queue);
  AMQPChannel.bindQueue(queue, config.amqp.exchange.name, '');
  return {
    async consume(onMessage) {
      AMQPChannel.consume(
        queue,
        message => {
          onMessage(JSON.parse(message.content.toString()))
            .then(response => {
              AMQPChannel.ack(message, true);
            })
            .catch(err => {
              AMQPChannel.publish(
                config.amqp.deadexchange.name,
                '',
                new Buffer(message.content.toString())
              );
              AMQPChannel.ack(message, true);
            });
        },
        { noAck: false }
      );
    }
  };
};
