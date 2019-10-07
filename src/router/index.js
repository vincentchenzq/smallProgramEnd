const Logger = require("../utils/Logger");
var Router = require("koa-router");

var router = new Router();

const { getSQLResult } = require("../utils/Sql");

router
    .get("/register", async (ctx, next) => {
        var sql = "SELECT * FROM UserInfo";
        // ctx.body = {
        //     id: ctx.requestId,
        //     data: []
        // };
        const result = await getSQLResult(sql);
        ctx.status = 200;
        console.log(result);
        ctx.body = {
            id: ctx.requestId,
            data: result
        };
    })
    .get("/login", async (ctx, next) => {
        Logger.info("login");
        console.log(ctx.requestId);
        ctx.body = {
            id: ctx.requestId
        };
    });

module.exports = router;
