const items = require('express').Router();
import {ItemController} from './ItemController';

var itemController = new ItemController();

items.get('/', itemController.getAllItems);
items.post('/', itemController.createItem);
items.get('/:itemID', itemController.getItemByID);
items.get('/name/:name', itemController.getItemByName);
items.delete('/name/:name', itemController.deleteItemByName);
items.delete('/:itemID', itemController.deleteItemByID);

module.exports = items;