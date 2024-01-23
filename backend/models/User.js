const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ["user", "admin"] },
    avatar: { type: String, default: "default.png" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
