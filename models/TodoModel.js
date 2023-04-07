const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isDone: {
      required: true,
      type: Boolean,
    },
    content: {
      type: String,
      required: true,
    },
    deadline: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const TodoModel = mongoose.model("Todo", TodoSchema);
module.exports.TodoModel = TodoModel;
