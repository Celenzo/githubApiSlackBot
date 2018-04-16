'use strict';

module.exports = () => {
    return require('common-env')().getOrElseAll({
	api: {
	    host: '0.0.0.0',
	    port: 7654
	},
	amqp: {
	    exchange: {
		name: 'exchange',
		type: 'direct'
	    },
	    deadexchange: {
		name: 'deadexchange',
		type: 'fanout'
	    }
	}
    });
}
