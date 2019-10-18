import express from "express";

export class Controller {
    /**
     *
     * @swagger
     * /hello:
     *  get:
     *    description: Returns Hello World
     *    tags:
     *      - hello
     *    responses:
     *      200:
     *        description: returns Hello World
     *        schema:
     *          type: string
     *      400:
     *        description: failure connecting to the api
     */
    public getHello(req: express.Request, res: express.Response): void {
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
    public postHello(req: express.Request, res: express.Response): void {
        res.send(req.body);
    }
}
