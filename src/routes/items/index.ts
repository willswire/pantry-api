const items = require('express').Router();
import {ItemController} from './ItemController';


items.get('/all-items', ItemController.getAllItems);
items.get('/:itemID', ItemController.getItemByID);
items.delete('/:itemID', ItemController.deleteItemByID);
// items.put('/:itemID, PUTFUNCTION);

module.exports = items;