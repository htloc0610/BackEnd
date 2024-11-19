const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const database = require("./config/database");
const Task = require("./models/task.model");

database.connect();

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find({ deleted: false }).select(
    "title status timeStart timeFinish"
  );
  console.log(tasks);

  res.json(tasks);
});

app.get("/tasks/detail/:id", async (req, res) => {
  const id = req.params.id;
  const tasks = await Task.find({ deleted: false, _id: id }).select(
    "title status timeStart timeFinish"
  );
  console.log(tasks);

  res.json(tasks);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
