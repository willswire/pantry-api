import { Router } from "express";
import { UserController } from "./UserController";

const users = Router();
const controller = new UserController();

// users.get('/:userID', controller.getUserByID);
users.post("/", controller.createUser);
users.get("/", controller.getUsers);
users.get("/:userID", controller.getUser);
users.get("/:userID/lists", controller.getUserLists);
users.put("/:userID", controller.updateUser);
users.delete("/:userID", controller.deleteUser);
users.post("/:userID/join", controller.joinList);

module.exports = users;
