const express = require("express");
const router = express.Router();
const Task = require("../models/taskSchema");

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

module.exports = router;
