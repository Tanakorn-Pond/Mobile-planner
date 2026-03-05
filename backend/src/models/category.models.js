const mongoose = require("mongoose");

const category = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category_name: { type: String, required: true },
  category_color: { type: String, required: true },
  category_icon: { type: String, required: true },
  category_create: { type: Date, default: Date.now },
  category_update: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Category", category);
