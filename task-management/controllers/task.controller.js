const Task = require("../models/task.model");

// [GET] /tasks
module.exports.index = async (req, res) => {
  const find = {
    deleted: false,
  };

  const sort = {
    target: "title",
    type: "asc",
  };

  const page = {
    limit: 2,
    pageNum: 0,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  if (req.query.sortKey) {
    sort.target = req.query.sortKey;
  }

  if (req.query.sortValue) {
    sort.type = req.query.sortValue;
  }

  if (req.query.page) {
    page.pageNum = req.query.page;
  }

  if (req.query.limit) {
    page.limit = req.query.limit;
  }

  if (req.query.keyword) {
    find.title = req.query.keyword;
  }

  const tasks = await Task.find(find)
    .select("title status timeStart timeFinish")
    .sort({
      [sort.target]: sort.type,
    })
    .skip(page.pageNum * page.limit)
    .limit(page.limit);
  console.log(tasks);

  res.json(tasks);
};

// [GET] /tasks/detail/:id
module.exports.find = async (req, res) => {
  const id = req.params.id;
  const tasks = await Task.find({ deleted: false, _id: id }).select(
    "title status timeStart timeFinish"
  );
  console.log(tasks);

  res.json(tasks);
};

// [PATCH] /tasks/change-status/:id
module.exports.change = async (req, res) => {
  const find = {
    deleted: false,
  };
  const id = req.params.id;
  if (req.body.status) {
    await Task.updateOne(
      { deleted: false, _id: id },
      { status: req.body.status }
    );
  }
  res.send("OK");
};
