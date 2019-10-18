"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    /**
     *
     * @swagger
     * /hello:
     *  get:
     *    description: Returns the word hello
     *    tags:
     *      - hello
     *    responses:
     *      200:
     *        description: returns the word hello
     *        schema:
     *          type: string
     *      400:
     *        description: failure connecting to the api
     */
    getHello(req, res) {
        res.send("Hello World");
    }
    /**
     * @swagger
     * /hello:
     *  post:
     *    description: Returns the body of the request
     *    tags:
     *      - hello
     *    parameters:
     *      - in: body
     *        name: request body
     *        description: Body of the request, takes in any fields
     *        required: true
     *        schema:
     *          type: object
     *    responses:
     *      200:
     *        description: returns the request body
     *        schema:
     *          type: object
     *      400:
     *        description: failure connecting to the api
     */
    postHello(req, res) {
        res.send(req.body);
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map