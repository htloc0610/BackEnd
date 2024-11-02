module.exports.index = (req, res) => {
  res.render("../views/pages/home.pug", {
    pageTitle: "Trang chủ",
  });
};
