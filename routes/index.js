const myController = require("../controllers/index");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);

module.exports = routes;