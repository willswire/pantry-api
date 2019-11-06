import { Router } from 'express';
import { UserController } from './user-controller'

const users = Router();
const controller = new UserController();

// users.get('/:userID', controller.getUserByID);

/**
 * @swagger
 * /users:
 *  post:
 *    description: Creates a new user
 *    parameters:
 *      - in: body
 *        name: user
 *        description: Body of the request, takes info on the user being created
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/user'
 *    tags:
 *      - users
 *    responses:
 *      200:
 *        description: successfully created user
 *      400:
 *        description: failure creating user
 */
users.post('/', controller.createUser);

/**
 * @swagger
 * /users:
 *  get:
 *    description: Gets all users from the database
 *    tags:
 *      - users
 *    responses:
 *      200:
 *        description: returns all users
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/user'
 *      400:
 *        description: failure fetching users
 */
users.get('/', controller.getUsers);

/**
 * @swagger
 * /users/{userID}:
 *  get:
 *    description: Gets a user with the given id
 *    parameters:
 *      - in: path
 *        name: userID
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the user
 *    tags:
 *      - users
 *    responses:
 *      200:
 *        description: returns user with given id
 *        schema:
 *          $ref: '#/components/schemas/user'
 *      400:
 *        description: failure fetching user
 */
users.get('/:userID', controller.getUser);

/**
 * @swagger
 * /users/{userID}/lists:
 *  get:
 *    description: Gets a users lists
 *    parameters:
 *      - in: path
 *        name: userID
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the user
 *    tags:
 *      - users
 *    responses:
 *      200:
 *        description: returns user with given id's lists
 *        schema:
 *          type: array
 *          items:
 *            type: string
 *            description: ID for the user's lists
 *      400:
 *        description: failure fetching user's lists
 */
users.get('/:userID/lists', controller.getUserLists);

/**
 * @swagger
 * /users/userID:
 *  put:
 *    description: updates a user
 *    parameters:
 *      - in: path
 *        name: userID
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the user
 *      - in: body
 *        name: user
 *        description: Body of the request, takes info on the user being updated
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/user'
 *    tags:
 *      - users
 *    responses:
 *      200:
 *        description: successfully updated user
 *      400:
 *        description: failure updating user
 */
users.put('/:userID', controller.updateUser);

/**
 * @swagger
 * /users/{userID}:
 *  delete:
 *    description: Deletes a user with the given id
 *    parameters:
 *      - in: path
 *        name: userID
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the user
 *    tags:
 *      - users
 *    responses:
 *      200:
 *        description: deletes user with given id
 *      400:
 *        description: failure deleting user
 */
users.delete('/:userID', controller.deleteUser);

module.exports = users;
