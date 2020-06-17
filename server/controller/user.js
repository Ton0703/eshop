const User = require("../model/user");
const jsonwebtoken = require("jsonwebtoken");
const { secret } = require("../config");

class UserCtl {
  async login(ctx) {
    ctx.verifyParams({
      name: { type: "string", required: true },
      password: { type: "string", require: true },
    });
    const user = await User.findOne(ctx.request.body);
    if (!user) {
      //ctx.throw(404, "用户名或者密码错误");
      ctx.body = {
         error_msg: '用户名或者密码错误'
      }
      return
    }
    const { name, _id } = user;
    const token = jsonwebtoken.sign({ name, _id }, secret, {
      expiresIn: "1d",
    });
    ctx.body = { token, name };
  }

  async register(ctx) {
    ctx.verifyParams({
      name: { type: "string", required: true },
      password: { type: "string", require: true },
      email: { type: "string", required: true },
    });
    const { name } = ctx.request.body;
    const userExist = await User.findOne({ name });
    if (userExist) {
      ctx.body = {
        error_msg: '用户名已存在'
      };
      return;
    }
    const user = await new User(ctx.request.body).save();
    const { _id } = user;
    const token = jsonwebtoken.sign({ name, _id }, secret, {
      expiresIn: "1d",
    });
    ctx.body = { token, name };
  }
}

module.exports = new UserCtl();
