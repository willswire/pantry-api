const lists = require("express").Router();
import { ListController } from "./ListController";

const listController = new ListController();

/**
 * @swagger
 * /lists:
 *  post:
 *    description: Creates a new list in the database
 *    parameters:
 *      - in: body
 *        name: list
 *        description: Body of the request, takes info on the list being created
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/newList'
 *    tags:
 *      - lists
 *    responses:
 *      200:
 *        description: successfully created list
 *      400:
 *        description: failure fetching lists
 */
lists.post("/", listController.createList);

/**
 * @swagger
 * /lists/{listID}:
 *  get:
 *    description: Gets the list with id ${listID} from the database
 *    tags:
 *      - lists
 *    parameters:
 *      - in: path
 *        name: listID
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the list
 *    responses:
 *      200:
 *        description: gets the list with the given id from the db
 *        schema:
 *          $ref: '#/components/schemas/existingList'
 *      400:
 *        description: failure getting list with given id
 */
lists.get("/:listID", listController.getListByID);

/**
 * @swagger
 * /lists/{listID}:
 *  delete:
 *    description: Deletes the list with id ${listID} from the database
 *    tags:
 *      - lists
 *    parameters:
 *      - in: path
 *        name: listID
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the list
 *    responses:
 *      200:
 *        description: gets the list with the given id from the db
 *      400:
 *        description: failure deleting item with given id
 */
lists.delete("/:listID", listController.deleteListByID);

module.exports = lists;
