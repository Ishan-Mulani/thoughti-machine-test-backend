const express = require("express");
const users = require("../routes/users");
const taks = require("../routes/tasks");

const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/user", users);
  app.use("/api/tasks", taks);

  // app.use("/api/")
  app.use(error);
};
