const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

module.exports = function () {
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({
      filename: "uncaughtExceptions.log",
    })
  );
  process.on("unhandledRejection", (ex) => {
    throw ex;
  });

  winston.rejections.handle(
    new winston.transports.File({
      filename: "unhandledPromise.log",
    })
  );

  winston.add(
    new winston.transports.File({
      filename: "logfile.log",
      format: format.combine(format.timestamp(), format.json()),
      // handleRejections: true,
      // handleExceptions: true,
    })
  );

  winston.add(
    new winston.transports.MongoDB({
      db: "mongodb://127.0.0.1:27017/mongo-user",
      options: {
        useUnifiedTopology: true,
      },
      collection: "log",
    })
  );
};
