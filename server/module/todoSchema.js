const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    require,
  },
  description: {
    type: String,
    require,
  },
  complated: {
    type: Boolean,
    default: false,
  },
  uploadDate: {
    type: String,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
