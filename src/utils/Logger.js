const log4js = require("log4js");
log4js.configure({
  appenders: {
    cheese: {
      type: "file",
      filename: "logs/access.log",
      pattern: "-yyyy-MM-dd",
      category: "normal",
      level: "LOG"
    }
  },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});

const Logger = log4js.getLogger("cheese");
const env = "delelopment";
if (env === "delevopment") {
  Logger.level = "trace";
}
module.exports = Logger;
