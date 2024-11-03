const express = require("express");
const app = new express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Nice to meet you");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
