'use strict';

const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const hapiSwagger = require('hapi-swagger');

const config = require('./config')();
const pack = require('./package.json');

const init = async () => {
    try {
	const server = new hapi.server({
	    host: config.api.host,
	    port: config.api.port
	});
	const hapiSwaggerPlugin = {
	    plugin: hapiSwagger,
	    options: {
		info: {
		    title: pack.name,
		    version: pack.version
		}
	    },
	    routes: {
		prefix: '/github'
	    }
	};
	await server.register([inert, vision, hapiSwaggerPlugin]);
	require('./src')(server, config);
	await server.start();
	return server;
    } catch (err) {
	throw err;
    }
};

init().then(server => {
    console.log(`Server running at ${server.info.uri}`);
}).catch(err => {
    console.log(err);
    process.exit(1);
});
