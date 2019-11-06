import { Router } from 'express';
import { UserController } from './user-controller'

const users = Router();
const controller = new UserController();

// users.get('/:userID', controller.getUserByID);
users.post('/', controller.createUser);
users.get('/', controller.getUsers);
users.get('/:userId', controller.getUser);
users.get('/:userId/lists', controller.getUserLists);
users.put('/:userId', controller.updateUser);
users.delete('/:userId', controller.deleteUser);

module.exports = users;
