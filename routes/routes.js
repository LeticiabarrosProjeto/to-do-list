const routes = require("express").Router();
const TaskController = require("../controller/TaskCrontroller")

routes.get("/", TaskController.getAll)

module.exports = routes