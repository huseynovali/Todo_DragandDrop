const { Router } = require("express");
const TodoController = require("../controller/todoController");

const todoRouter = Router()



todoRouter.post('/create/:userid',TodoController.addTodo)
 todoRouter.get('/get/:userid',TodoController.getTodos)
 todoRouter.put('/update/:todoId',TodoController.complatedAndUnComplated)
 todoRouter.delete('/delete/:todoId',TodoController.deleteTodo)



module.exports =todoRouter