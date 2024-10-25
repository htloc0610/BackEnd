const express = require("express");
// const mongoose = require("mongoose");
require("dotenv").config();

const router = require("./routers/client/index.router");

// mongoose.connect(process.env.MONGO_URL);
const database = require("./config/database");

database.connect();

const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

// Nhúng file tĩnh do backend không show -> phải có lệnh này
app.use(express.static("public"));

// Router
router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
