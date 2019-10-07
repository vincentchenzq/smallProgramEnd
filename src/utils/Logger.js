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
if (process.env.NODE_ENV === "development") {
    Logger.level = "trace";
} else {
    Logger.level = "debug";
}
module.exports = Logger;
