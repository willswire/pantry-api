import * as express from "express";
const passport = require('../passport')

const items = require("./items");
const users = require("./users");
const lists = require("./lists");
const auth = require("./auth");

// require('../passport');
const routes = express.Router();

routes.use("/auth", auth);
routes.use("/items", passport.authenticate('jwt', {session: false}), items);
routes.use("/users", passport.authenticate('jwt', {session: false}), users);
routes.use("/lists", passport.authenticate('jwt', {session: false}), lists);

module.exports = routes;
