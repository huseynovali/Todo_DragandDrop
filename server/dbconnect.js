const mongoose = require("mongoose");
const express = require("express");
const connectDb = () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => console.log("Connection Db !"))
    .catch((err) => console.log("error:", err));
};

module.exports = connectDb;
