'use strict';

module.exports = (config) => {
    return {
	async onMessage(message) {
	    console.log(message);
	    return message;
	}
    }
};
