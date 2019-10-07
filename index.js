const Koa = require("koa");
const app = new Koa();
const UUID = require("uuid");
const path = require("path");
const Logger = require("./src/utils/Logger");
const KoaBody = require("koa-body");
const session = require("koa-session");
const router = require("./src/router");
const ErrorRoutes = require("./src/error-routers");
require("./src/utils/Sql");
// Logger.level = "debug";

// Logger.trace("Entering cheese testing");
// Logger.debug("Got cheese.");
// Logger.info("Cheese is Comté.");
// Logger.warn("Cheese is quite smelly.");
// Logger.error("Cheese is too ripe!");
// Logger.fatal("Cheese was breeding ground for listeria.");
app.keys = ["session key", "csrf example"];
app.use(session(app));
app.use(
    KoaBody({
        multipart: true,
        formidable: {
            uploadDir: path.join(__dirname, "upload/"), // 设置文件上传目录
            keepExtensions: true, // 保持文件的后缀
            maxFieldsSize: 2 * 1024 * 1024 // 文件上传大小
        }
    })
);

app.use(async (ctx, next) => {
    ctx.requestId = UUID.v4();
    await next();
});

if (process.env.NODE_ENV === "development") {
    // logger
    app.use(async (ctx, next) => {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        Logger.info(`${ctx.method} ${ctx.url} ${ctx.requestId} - ${ms}ms`);
    });
}

app.use(router.routes());
app.use(router.allowedMethods());
app.use(ErrorRoutes());

app.listen(3000, () => {
    console.log(`启动成功～`);
});
