const mongoose = require("mongoose");
const winston = require("winston");
const config = require("../utils/config");
module.exports = function () {
  mongoose
    .connect(config["mongodbURI"])
    .then(() => {
      winston.info("Connected to MongoDB");
    })
    .catch((e) => {
      winston.warn(e); // "oh, no!"
      console.log(e);
    });
};
