const lists = require("express").Router();
import { ListController } from "./ListController";

const listController = new ListController();

lists.post("/", listController.createList);
lists.get("/:listID", listController.getListByID);
lists.put("/:listID", listController.updateListByID);
lists.delete("/:listID", listController.deleteListByID);

module.exports = lists;
