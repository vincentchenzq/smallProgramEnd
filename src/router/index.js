const Logger = require("../utils/Logger");
var Router = require("koa-router");

var router = new Router();

const { getSQLResult } = require("../utils/Sql");
const UserInfoDTO = require("../class/UserInfoDTO");

router
    .get("/register", async (ctx, next) => {
        var sql = "SELECT * FROM UserInfo";
        const result = (await getSQLResult(sql)) || [];
        ctx.status = 200;
        ctx.body = {
            id: ctx.requestId,
            data: result.map(item => {
                return new UserInfoDTO(item);
            })
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
