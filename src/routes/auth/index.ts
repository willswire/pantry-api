import { Router } from 'express';
import { AuthController } from './auth-controller'

const auth = Router();
const controller = new AuthController();

auth.post('/login', controller.login);
module.exports = auth;
