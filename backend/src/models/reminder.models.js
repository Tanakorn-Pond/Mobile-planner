const mongoose = require("mongoose");

const reminder = new mongoose.Schema({
  task_id: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
  reminder_IsEnabled: { type: Boolean, required: true },
  reminder_MinutesBefore: { type: Number, required: true },
  reminder_repeat: { type: String, required: true },
  reminder_channel: { type: String, required: true },
  reminder_CreateAt: { type: Date, default: Date.now },
  reminder_SentAt: { type: Date, default: Date.now },
  reminder_ScheduledAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Reminder", reminder);
