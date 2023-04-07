const express = require("express");
const {
  addTodoController,
  showTodoController,
  deleteTodoController,
  updateTodoController,
} = require("../controllers/todoController");

const todoRouter = express.Router();

todoRouter.post("/add-todo", addTodoController);
todoRouter.get("/all", showTodoController);
todoRouter.get("/delete", deleteTodoController);
todoRouter.post("/update", updateTodoController);
module.exports.todoRouter = todoRouter;
