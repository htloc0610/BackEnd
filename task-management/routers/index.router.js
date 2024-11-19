const taskRouters = require("./task.router");

module.exports = (app) => {
  app.use("/tasks", taskRouters);
};
