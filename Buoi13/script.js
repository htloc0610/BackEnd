// // // // import { kiemTraSoDuong } from "./helpers/kiemTraSoDuong.js";
// // // // import { kiemTraChanLe } from "./helpers/kiemTraChanLe.js";
// // // // import { tinhTong } from "./helpers/tinhTong.js";

// // // // // const congViec1 = () => {
// // // // //   console.log("Công việc 1");
// // // // // };

// // // // // const congViec2 = (callback) => {
// // // // //   console.log(callback);
// // // // //   callback();
// // // // //   console.log("Công việc 2");
// // // // // };

// // // // // // congViec1();
// // // // // congViec2(congViec1);

// // // // // tinhTong(10, 20, kiemTraSoDuong);
// // // // // tinhTong(10, 20, kiemTraChanLe);

// // // // tinhTong(10, 20, (number) => {
// // // //   kiemTraChanLe(number);
// // // //   kiemTraSoDuong(number);
// // // // });

// // // const loginSucces = () => {
// // //   console.log("Đăng nhập thành công");
// // // };

// // // const checkLogin = (data, callback) => {
// // //   const email = "nametest@gmail.com";
// // //   const password = "2222";

// // //   if (data.email === email && data.password === password) {
// // //     callback();
// // //   } else {
// // //     console.log("Đăng nhập thất bại");
// // //   }
// // // };

// // // let data = {
// // //   email: "nametest@gmail.com",
// // //   password: "2222",
// // // };

// // // checkLogin(data, loginSucces);

// // var a = 10;

// // var promise = new Promise((resolve, reject) => {
// //   if (a === undefined) {
// //     reject();
// //   } else {
// //     resolve(a);
// //   }
// // });

// // promise
// //   .then((resultA) => {
// //     console.log(resultA);
// //     return resultA;
// //   })
// //   .then((resultA) => {
// //     const b = resultA + 10;
// //     console.log(b);
// //   })
// //   .catch(() => {
// //     console.log("Thất bại");
// //   })
// //   .finally(() => {
// //     console.log("Luôn chạy vào đây");
// //   });

// // Trạng tháng

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(10);
//     reject();
//   }, 3000);
// });

// setTimeout(() => {
//   console.log("Sau 1 giây", promise);
// }, 1000);

// setTimeout(() => {
//   console.log("Sau 2 giây", promise);
// }, 2000);

// setTimeout(() => {
//   console.log("Sau 3 giây", promise);
// }, 3000);

fetch("https://dummyjson.com/products")
  .then((respone) => respone.json())
  .then((data) => {
    console.log(data.products);
    const newArray = data.products.map((item) => {
      return `
      <div class="product-item">
      <img src="${item.thumbnail}" alt="">
      <h2>${item.title}</h2>
      <h3>${item.price}$</h3>
      </div>`;
    });

    const htmls = newArray.join("");
    const productsList = document.querySelector("#product-list");

    productsList.innerHTML = htmls;

    console.log(htmls);
  });
