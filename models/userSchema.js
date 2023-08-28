const mongoose = require("mongoose");
const config = require("../utils/config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 1,
    max: 20,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
