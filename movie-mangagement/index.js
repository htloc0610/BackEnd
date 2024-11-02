const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const router = require("./routers/index.router");

const database = require("./config/database");
database.connect();

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
