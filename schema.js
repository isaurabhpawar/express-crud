const { Schema, model } = require("mongoose");

const users = new Schema(
  {
    name: String,
    phone: String,
    age: Number,
    email: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = model("users", users);
