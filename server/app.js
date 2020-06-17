const Koa = require("koa");
const koaBody = require("koa-body");
const koaStatic = require("koa-static");
const logger = require("koa-logger");
const cors = require("koa2-cors");
const error = require("koa-json-error");
const parameter = require("koa-parameter");
const dotenv = require("dotenv");
//dotenv.config({path: './config.env'})
const path = require("path");
const { connect } = require("./DB/connect");

const app = new Koa();
const route = require("./router");
const PORT = process.env.PORT || 3030;

connect();
app.use(koaStatic(path.join(__dirname, "public")));
app.use(cors());
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, "/public/uploads"),
      keepExtensions: true,
    },
  })
);
app.use(logger());
app.use(
  error({
    postFormat: (e, { stack, ...rest }) =>
      process.env.NODE_ENV === "production" ? rest : { stack, ...rest },
  })
);
app.use(parameter(app));
route(app);

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
