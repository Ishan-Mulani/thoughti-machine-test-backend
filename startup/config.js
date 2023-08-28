const config = require("../utils/config");
module.exports = function () {
  if (!config["mongodbURI"]) {
    throw new Error("Fatal Error MongoDB URI is not defined");
  }
};
