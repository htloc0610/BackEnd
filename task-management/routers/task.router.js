const express = require("express");
const router = express.Router();

const controller = require("../controllers/task.controller");

router.get("/", controller.index);

router.get("/detail/:id", controller.find);

router.patch("/change-status/:id", controller.change);

module.exports = router;
