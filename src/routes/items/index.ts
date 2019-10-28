const items = require('express').Router();
import {ItemController} from './ItemController';

var itemController = new ItemController();

items.get('/all-items', itemController.getAllItems);
items.get('/:itemID', itemController.getItemByID);
items.delete('/:itemID', itemController.deleteItemByID);
// items.put('/:itemID, PUTFUNCTION);

module.exports = items;