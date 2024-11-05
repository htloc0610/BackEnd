const Product = require("../../models/product.model");

// [GET] /admin/dashboard
module.exports.index = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false,
  }).sort({ position: "desc" });

  products.forEach((item) => {
    item.priceNew = parseFloat(
      ((item.price * (100 - item.discountPercentage)) / 100).toFixed(2)
    );
  });

  res.render("client/pages/products/index.pug", {
    pageTitle: "Trang sản phẩm",
    products: products,
  });
};
