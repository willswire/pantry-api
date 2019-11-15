const items = require("express").Router();
import { ItemController } from "./ItemController";

const itemController = new ItemController();

/**
 * @swagger
 * /items:
 *  get:
 *    description: Gets all stored items in the database
 *    tags:
 *      - items
 *    responses:
 *      200:
 *        description: returns all items from the db
 *        schema:
 *          $ref: '#/components/schemas/Item'
 *      400:
 *        description: failure fetching items
 */
items.get("/", itemController.getAllItems);

/**
 * @swagger
 * /items:
 *  post:
 *    description: Creates a new item in the database
 *    parameters:
 *      - in: body
 *        name: item
 *        description: Body of the request, takes info on the item being created
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/Item'
 *    tags:
 *      - items
 *    responses:
 *      200:
 *        description: successfully created item
 *      400:
 *        description: failure fetching items
 */
items.post("/", itemController.createItem);

/**
 * @swagger
 * /items/{itemID}:
 *  get:
 *    description: Gets one item with id ${itemID} from the database
 *    tags:
 *      - items
 *    parameters:
 *      - in: path
 *        name: itemID
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the item
 *    responses:
 *      200:
 *        description: returns item with the given id from the db
 *        schema:
 *          $ref: '#/components/schemas/Item'
 *      400:
 *        description: failure fetching item with given id
 */
items.get("/:itemID", itemController.getItemByID);

/**
 * @swagger
 * /items/{itemID}:
 *  delete:
 *    description: Deletes the item with id ${itemID} from the database
 *    tags:
 *      - items
 *    parameters:
 *      - in: path
 *        name: itemID
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the item
 *    responses:
 *      200:
 *        description: deletes item with the given id from the db
 *      400:
 *        description: failure deleting item with given id
 */
items.delete("/:itemID", itemController.deleteItemByID);
// items.put('/:itemID, PUTFUNCTION);

module.exports = items;
