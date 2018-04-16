'use strict';

module.exports = (config) => {
    return {
	github: require('./handlers')(config)
    };
}
