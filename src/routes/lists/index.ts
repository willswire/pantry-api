const lists = require("express").Router();
import { ListController } from "./ListController";

const listController = new ListController();

lists.post("/", listController.createList);
lists.get("/:listID", listController.getListByID);
lists.put("/:listID", listController.updateListByID);
lists.put("/:listID/add/:itemID", listController.addItemToList);
lists.delete("/:listID/:userID", listController.deleteListByID);
lists.delete("/:listID/:itemID", listController.deleteItemFromList);

module.exports = lists;
