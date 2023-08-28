const express = require("express");
const router = express.Router();
const validateUserSchema = require("../validation/validateNewUser");
const User = require("../models/userSchema");

router.get("/", async (req, res) => {
  const user = await User.find();
  res.send(user);
});

module.exports = router;
