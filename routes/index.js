const routes = require('express').Router();

routes.use('/characters', require('./characters'));
//routes.use('/players', require('./players'));
routes.use('/api-docs', require('./swagger-route'));
routes.use('/users', require('./users'));

module.exports = routes; 