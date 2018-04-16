'use strict';

module.exports = (services, handlers) => {
    services.AMQPService.consume(handlers.github.onMessage);
}
