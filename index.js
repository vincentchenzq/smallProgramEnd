const Koa = require("koa");
const app = new Koa();
const UUID = require("uuid");
const path = require("path");
const fs = require("fs");
const Logger = require("./src/utils/Logger");
const KoaBody = require("koa-body");
require("./src/utils/Sql");
Logger.level = "debug";

Logger.trace("Entering cheese testing");
Logger.debug("Got cheese.");
Logger.info("Cheese is Comté.");
Logger.warn("Cheese is quite smelly.");
Logger.error("Cheese is too ripe!");
Logger.fatal("Cheese was breeding ground for listeria.");
console.log(process.env.NODE_ENV);
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

// app.use(async function(ctx, next) {
//   // ignore non-POSTs
//   if ("POST" != ctx.method) return await next();
//   const file = ctx.request.files.file;
//   console.log(ctx.request.files);
//   const fileName = file.name;
//   console.log(fileName);
//   const ext = fileName.slice(fileName.lastIndexOf("."));
//   const reader = fs.createReadStream(file.path);
//   const stream = fs.createWriteStream(
//     path.join(__dirname, Math.random().toString() + ext)
//   );
//   reader.pipe(stream);
//   console.log("uploading %s -> %s", file.name, stream.path);

//   ctx.redirect("/");
// });

app.listen(3000, () => {
  console.log(`启动成功～`);
});
