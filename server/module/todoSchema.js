const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    require
  },
  description: {
    type: String,
    require,
  },
  complated: {
    type: Boolean
  },
});


const Todo = mongoose.Model("Todo",TodoSchema)

module.exports = Todo