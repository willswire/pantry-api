import express from "express";

const routes = require("./routes");
export class ApiRouter {
    private router: express.Router = routes;

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        return this.router;
    }
}
