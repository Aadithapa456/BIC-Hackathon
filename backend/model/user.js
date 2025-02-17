const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, default: "" },
    country: { type: String, default: "Nepal" },
    region: { type: String, default: "" },
    city: { type: String, default: "" },
    address: { type: String, default: "" },
    upVote: { type: Number, default: 0 },
    downVote: { type: Number, default: 0 },
    totalPost: { type: Number, default: 0 },
    refreshToken: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
