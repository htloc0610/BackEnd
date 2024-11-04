const Product = require("../../models/product.model");

const filterStatusHelper = require("../../helpers/filterStatus");
const filterPaginationHelper = require("../../helpers/filterPagination");
const searchHelper = require("../../helpers/search");

// [GET] /admin/products
module.exports.index = async (req, res) => {
  const filterStatus = filterStatusHelper(req.query);
  const filterPagination = filterPaginationHelper(req.query);

  let find = {
    deleted: false,
    // title: "Essence Mascara Lash Princess",
  };

  if (req.query.status) {
    find.status = req.query.status;
  }
  // Find
  const objectSearch = searchHelper(req.query);
  if (objectSearch.regex) {
    find.title = objectSearch.regex;
  }

  // Pagination
  let objectPagination = {
    limitItems: 4,
  };

  if (req.query.page) {
    objectPagination.page = req.query.page;
  }

  const products = await Product.find(find)
    .limit(objectPagination.limitItems)
    .skip(objectPagination.page * objectPagination.limitItems);
  // console.log(products);

  res.render("admin/pages/products/index.pug", {
    pageTitle: "Danh sách sản phẩm",
    products: products,
    filterStatus: filterStatus,
    filterPagination: filterPagination,
    keyword: objectSearch.keyword,
  });
};
