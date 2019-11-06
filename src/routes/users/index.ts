import { Router } from 'express';
import { UserController } from './user-controller'

const users = Router();
const controller = new UserController();

// users.get('/:userID', controller.getUserByID);
users.get('/', controller.getUsers);
users.get('/:username', controller.getUser);
users.get('/:username/lists', controller.getUserLists);
users.put('/:username', controller.updateUser);
users.delete('/:username', controller.deleteUser);

module.exports = users;
