const Todo = require("../module/todoSchema");
const User = require("../module/userSchema");
const moment = require("moment");
const TodoController = {
  addTodo: async (req, res) => {
    try {
      const userId = req.params.userid;
      const { title, description } = req.body;

      const newTodo = new Todo({
        title,
        description,
        user: userId,
        uploadDate: moment().format(),
      });

      await newTodo.save();

      res.status(201).json({ message: "create todo !" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getTodos: async (req, res) => {
    try {
      const userId = req.params.userid;
      const todos = await Todo.find({ user: userId });
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  complatedAndUnComplated: async (req, res) => {
    try {
      const todoId = req.params.todoId;
      const { newCompletedValue } = req.body;

      const updatedTodo = await Todo.findById(todoId);

      if (!updatedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      updatedTodo.complated = newCompletedValue;
      await updatedTodo.save();
      res.status(200).json(updatedTodo);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
};

module.exports = TodoController;
