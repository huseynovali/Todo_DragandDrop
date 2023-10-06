const express = require("express");
const connectDb = require("./dbconnect");
const userRouter = require("./router/userRouter");
require("dotenv").config();
const cors = require("cors");
const todoRouter = require("./router/todoRouter");
const app = express();
connectDb();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/todo", todoRouter);

app.listen(5000, () => console.log("listen 5000 !"));
