const mongoose = require("mongoose");

const { model, Schema } = mongoose;
const userSchem = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true, select: false },
    email: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("User", userSchem);
