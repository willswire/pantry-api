import express from "express";
import { Controller } from "./controller";

const routes = require('./routes');
export class ApiRouter {
    private router: express.Router = routes;
    private controller: Controller = new Controller();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        return this.router;
    }
}
