import * as express from "express";
import items from "./items";
import lists from "./lists";
import users from "./users";

const routes = express.Router();
routes.use("/items", items);
routes.use("/users", users);
routes.use("/lists", lists);

export default routes;
