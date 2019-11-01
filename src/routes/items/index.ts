const items = require('express').Router();
import {ItemController} from './ItemController';

var itemController = new ItemController();

items.get('/', itemController.getAllItems);
items.post('/', itemController.createItem);
items.get('/:itemID', itemController.getItemByID);
items.get('/item/:name', itemController.getItemByName);
items.delete('/item/:name', itemController.deleteItemByName);
items.delete('/:itemID', itemController.deleteItemByID);
items.put('/item/:name', itemController.updateItemByName);
items.put('/:itemID', itemController.updateItemByID);


module.exports = items;