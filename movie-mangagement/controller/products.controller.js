const Movie = require("../models/movie.model");

module.exports.index = async (req, res) => {
  const products = await Movie.find({});
  console.log(products);

  res.render("../views/pages/product.pug", {
    pageTitle: "Trang sản phẩm",
    products: products,
  });
};
