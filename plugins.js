const path = require('path');
const fastifyView = require('@fastify/view');
const fastifyStatic = require('@fastify/static');
const pug = require('pug');

function registerPlugins(app) {
    // Register the view engine
    // This allows us to render Pug templates
    app.register(fastifyView, {
        engine: {
            pug: pug,
        },
    });

    // Register the static file server
    // This allows us to serve static files like CSS, images, and scripts
    app.register(fastifyStatic, {
        root: path.join(__dirname, '/public'),
        prefix: '/public/',
        list: true
    });
}

module.exports = registerPlugins;