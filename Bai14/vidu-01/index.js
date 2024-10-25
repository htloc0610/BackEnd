const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/products_test");

const Product = mongoose.model("Product", {
  title: String,
  price: Number,
  thumbnail: String,
});

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (req, res) => {
  // // const listUser = [
  // //   {
  // //     fullName: "Le Van A",
  // //     email: "levana@gmail.com",
  // //     cccd: {
  // //       fullName: "Le Van A",
  // //       number: "0123456789",
  // //     },
  // //   },
  // //   {
  // //     fullName: "Le Van B",
  // //     email: "levanb@gmail.com",
  // //   },
  // // ];
  // // console.log(listUser);
  // // console.log("OK");
  // // res.send("Hello World 123!");
  // res.send(`
  //   <h1>Trang chủ</h1>
  //   <p>Tôi là Lộc</p>
  //   `);
  res.render("index.pug", { title: "Hey", message: "Hello there!" });
});

app.get("/products", async (req, res) => {
  // const listUser = [
  //   {
  //     fullName: "Le Van A",
  //     email: "levana@gmail.com",
  //     cccd: {
  //       fullName: "Le Van A",
  //       number: "0123456789",
  //     },
  //   },
  //   {
  //     fullName: "Le Van B",
  //     email: "levanb@gmail.com",
  //   },
  // ];
  // console.log(listUser);
  // console.log("OK");
  // res.send("Hello World 123!");
  const products = await Product.find({});
  console.log(products);
  res.render("product.pug", {
    titlePage: "Danh sách sản phẩm",
    message: "Hello there!",
  });
  res.send("<h1>Sản phẩm</h1>");
});

app.get("/contact", (req, res) => {
  // // const listUser = [
  // //   {
  // //     fullName: "Le Van A",
  // //     email: "levana@gmail.com",
  // //     cccd: {
  // //       fullName: "Le Van A",
  // //       number: "0123456789",
  // //     },
  // //   },
  // //   {
  // //     fullName: "Le Van B",
  // //     email: "levanb@gmail.com",
  // //   },
  // // ];
  // // console.log(listUser);
  // // console.log("OK");
  // // res.send("Hello World 123!");
  // res.send(`
  //   <h1>Trang chủ</h1>
  //   <p>Tôi là Lộc</p>
  //   `);
  res.render("contact.pug", {
    title: "Trang liên hệ",
    message: "Hello there!",
  });
  res.send("<h1>Trang liên hệ</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
