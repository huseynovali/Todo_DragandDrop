const { Router } = require("express");
const userController = require("../controller/userController");

const userRouter = Router()



userRouter.post('/login',userController.login)
userRouter.post('/register',userController.register)



module.exports =userRouter