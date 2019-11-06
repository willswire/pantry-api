import { Router } from 'express';
import { AuthController } from './auth-controller'

const auth = Router();
const controller = new AuthController();

// users.get('/:userID', controller.getUserByID);

module.exports = auth;
