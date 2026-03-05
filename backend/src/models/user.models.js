const mongoose = require("mongoose");

const user = new mongoose.Schema({
  user_password: { type: String, required: true },
  user_email: { type: String, required: true },
  user_name: { type: String, required: true },
  user_role: { type: String, required: true },
});

module.exports = mongoose.model("User", user);
