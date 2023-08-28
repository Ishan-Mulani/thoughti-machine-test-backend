const { timeStamp } = require("console");
const mongoose = require("mongoose");
const User = require("./userSchema");
const { boolean } = require("joi");

const taskSchema = new mongoose.Schema({
  Task: { type: String, max: 200 },
  Expiry_date: { type: Date },
  User: { type: mongoose.SchemaTypes.ObjectId, ref: User },
  Important: Boolean,
  Created_on: { type: Date, default: Date.now() },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
