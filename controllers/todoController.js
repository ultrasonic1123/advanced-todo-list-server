const { TodoModel } = require("../models/TodoModel");

let newTodo = {
  name: "Todo 1",
  content: "This is Todo 1",
  isDone: false,
};

const addTodoController = async (req, res) => {
  console.log({ payload: req.body });
  let post = new TodoModel(req.body);
  console.log({ post });
  await post.save();
  res.json(post);
};

const showTodoController = async (req, res) => {
  let todoList = await TodoModel.find({}).limit(5);
  res.json(todoList);
};

const deleteTodoController = async (req, res) => {
  if (req.query._id) {
    let deletedTodo = await TodoModel.findOneAndDelete({ _id: req.query._id });
    console.log({ deletedTodo });
    res.sendStatus(200);
  }
};

const updateTodoController = async (req, res) => {
  if (req.body._id) {
    let addName = {};
    let addIsDone = {};
    let addContent = {};
    let addDealine = {};

    if (req.body.name) {
      addName.name = req.body.name;
    }
    if (req.body.isDone) {
      addIsDone.isDone = req.body.isDone;
    }
    if (req.body.content) {
      addContent.content = req.body.content;
    }
    if (req.body.dealine) {
      addDealine = req.body.dealine;
    }

    let update = { ...addName, ...addContent, ...addIsDone, ...addDealine };

    if (Object.keys(update).length) {
      let updatedItem = await TodoModel.findOneAndUpdate(
        { _id: req.body._id },
        update
      );
      console.log({ updatedItem });
    }
  }
  return;
};

module.exports.addTodoController = addTodoController;
module.exports.showTodoController = showTodoController;
module.exports.deleteTodoController = deleteTodoController;
module.exports.updateTodoController = updateTodoController;
