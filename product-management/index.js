const express = require("express");
const app = express();
const port = 3000;

const router = require("./routers/client/index.router");

app.set("views", "./views");
app.set("view engine", "pug");

// Router
router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
