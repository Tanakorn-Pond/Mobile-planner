const mongoose = require("mongoose");

const task = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  task_EndTime: { type: Date, required: true },
  task_SyncStatus: { type: String, required: true },
  task_status: { type: String, required: true },
  task_ExternalEventId: { type: String, required: true },
  task_title: { type: String, required: true },
  task_description: { type: String, required: true },
  task_IsAllDay: { type: Boolean, required: true },
  task_priority: { type: Number, required: true },
  task_LastSyncedAt: { type: Date, default: Date.now },
  task_CreateAt: { type: Date, default: Date.now },
  task_StartTime: { type: Date, default: Date.now },
  task_UpDateAt: { type: Date, default: Date.now },
  task_DueTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", task);
