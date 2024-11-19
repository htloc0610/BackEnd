const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  status: String,
  content: String,
  timeStart: Date,
  timeFinish: Date,
  createdAt: Date,
  updatedAt: Date,
  deleted: Boolean,
});

const Task = mongoose.model("Task", taskSchema, "tasks");

module.exports = Task;
