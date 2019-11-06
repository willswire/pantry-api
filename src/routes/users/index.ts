import { Router } from 'express';
import { UserController } from './user-controller'

const users = Router();
const controller = new UserController();

users.post('/', controller.createUser);
users.get('/', controller.getUsers);
users.get('/:userID', controller.getUser);
users.get('/:userID/lists', controller.getUserLists);
users.put('/:userID', controller.updateUser);
users.delete('/:userID', controller.deleteUser);

module.exports = users;
