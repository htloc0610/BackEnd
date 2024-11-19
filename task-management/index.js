const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const database = require("./config/database");
const router = require("./routers/index.router");
const cors = require("cors");

database.connect();

app.use(bodyParser.json());
// Backend không cho Front End truy cập để lấy data
app.use(cors());

router(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
