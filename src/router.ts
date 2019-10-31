import express from "express";
import routes from "./routes";

export class ApiRouter {
    private router: express.Router = routes;

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        return this.router;
    }
}
