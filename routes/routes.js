const routes = require("express").Router();
const TaskController = require("../controller/TaskCrontroller");

routes.get("/", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);

module.exports = routes;
