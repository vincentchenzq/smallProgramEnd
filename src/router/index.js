const Logger = require("../utils/Logger");
var Router = require("koa-router");
const UUID = require("uuid");
var router = new Router();

const { getSQLResult } = require("../utils/Sql");
const UserInfoDTO = require("../class/UserInfoDTO");
const ResponseData = require("../class/ResponseData");

router
    // 注册
    .post("/register", async (ctx, next) => {
        const { name, password } = ctx.request.body;
        if (!name || !password) {
            ctx.body = ResponseData.fail("用户名和密码不能为空！");
            return;
        }
        var sql = `SELECT * FROM UserInfo WHERE name='${name}'`;
        const result = (await getSQLResult(sql)) || [];
        if (result.length > 0) {
            ctx.body = ResponseData.fail("用户已被注册");
            return;
        }
        sql = `INSERT INTO UserInfo 
                (createBy, updateBy,id,sId,name,headUrl) 
            VALUES
                ('${name}','${name}','${UUID.v4()}','${UUID.v4()}','${name}','${UUID.v4()}');`;
        await getSQLResult(sql);
        ctx.body = ResponseData.success("注册成功！");
    })
    // 登陆
    .get("/login", async (ctx, next) => {
        Logger.info("login");
        console.log(ctx.requestId);
        ctx.body = {
            id: ctx.requestId
        };
    });

module.exports = router;
