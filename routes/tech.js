const myController = require("../controllers/tech");
const routes = require("express").Router();

routes.get("/",myController.awesomeSchool);

module.exports = routes;