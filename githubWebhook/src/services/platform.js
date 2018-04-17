'use strict';

module.exports = () => {
    const request = require('request-promise');
    return {
	promiseOnGetUrl(url, headers) {
	    return request({
		method: 'GET',
		url,
		headers
	    });
	}
    }
}
