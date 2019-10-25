import * as express from 'express';

const items = require('./items');
const users = require('./users');
const lists = require('./lists');

const routes = express.Router();
routes.use('/items', items);
routes.use('/users', users);
routes.use('/lists', lists);

module.exports = routes;