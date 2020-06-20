const mongoose = require("mongoose");

const todoListSchema = mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  todos: {
    type: Array,
  },
});

module.exports = mongoose.model("TodoList", todoListSchema);
