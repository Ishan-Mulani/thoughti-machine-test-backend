const express = require("express");
const app = express();
const winston = require("winston");
const cors = require("cors");

app.use(cors());
// Loging errors
require("./startup/logging");
// middlewares
require("./startup/routes")(app);
// db connections
require("./startup/dbIntialize")();
// config logic
require("./startup/config")();

const { format } = require("winston");

app.listen(8080, () => {
  winston.info("App listening at port 8080");
});
