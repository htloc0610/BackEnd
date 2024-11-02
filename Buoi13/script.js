// // // // // // // import { kiemTraSoDuong } from "./helpers/kiemTraSoDuong.js";
// // // // // // // import { kiemTraChanLe } from "./helpers/kiemTraChanLe.js";
// // // // // // // import { tinhTong } from "./helpers/tinhTong.js";

// // // // // // // // const congViec1 = () => {
// // // // // // // //   console.log("Công việc 1");
// // // // // // // // };

// // // // // // // // const congViec2 = (callback) => {
// // // // // // // //   console.log(callback);
// // // // // // // //   callback();
// // // // // // // //   console.log("Công việc 2");
// // // // // // // // };

// // // // // // // // // congViec1();
// // // // // // // // congViec2(congViec1);

// // // // // // // // tinhTong(10, 20, kiemTraSoDuong);
// // // // // // // // tinhTong(10, 20, kiemTraChanLe);

// // // // // // // tinhTong(10, 20, (number) => {
// // // // // // //   kiemTraChanLe(number);
// // // // // // //   kiemTraSoDuong(number);
// // // // // // // });

// // // // // // const loginSucces = () => {
// // // // // //   console.log("Đăng nhập thành công");
// // // // // // };

// // // // // // const checkLogin = (data, callback) => {
// // // // // //   const email = "nametest@gmail.com";
// // // // // //   const password = "2222";

// // // // // //   if (data.email === email && data.password === password) {
// // // // // //     callback();
// // // // // //   } else {
// // // // // //     console.log("Đăng nhập thất bại");
// // // // // //   }
// // // // // // };

// // // // // // let data = {
// // // // // //   email: "nametest@gmail.com",
// // // // // //   password: "2222",
// // // // // // };

// // // // // // checkLogin(data, loginSucces);

// // // // // var a = 10;

// // // // // var promise = new Promise((resolve, reject) => {
// // // // //   if (a === undefined) {
// // // // //     reject();
// // // // //   } else {
// // // // //     resolve(a);
// // // // //   }
// // // // // });

// // // // // promise
// // // // //   .then((resultA) => {
// // // // //     console.log(resultA);
// // // // //     return resultA;
// // // // //   })
// // // // //   .then((resultA) => {
// // // // //     const b = resultA + 10;
// // // // //     console.log(b);
// // // // //   })
// // // // //   .catch(() => {
// // // // //     console.log("Thất bại");
// // // // //   })
// // // // //   .finally(() => {
// // // // //     console.log("Luôn chạy vào đây");
// // // // //   });

// // // // // Trạng tháng

// // // // const promise = new Promise((resolve, reject) => {
// // // //   setTimeout(() => {
// // // //     // resolve(10);
// // // //     reject();
// // // //   }, 3000);
// // // // });

// // // // setTimeout(() => {
// // // //   console.log("Sau 1 giây", promise);
// // // // }, 1000);

// // // // setTimeout(() => {
// // // //   console.log("Sau 2 giây", promise);
// // // // }, 2000);

// // // // setTimeout(() => {
// // // //   console.log("Sau 3 giây", promise);
// // // // }, 3000);

// // // fetch("https://dummyjson.com/products")
// // //   .then((respone) => respone.json())
// // //   .then((data) => {
// // //     console.log(data.products);
// // //     const newArray = data.products.map((item) => {
// // //       return `
// // //       <div class="product-item">
// // //       <img src="${item.thumbnail}" alt="">
// // //       <h2>${item.title}</h2>
// // //       <h3>${item.price}$</h3>
// // //       </div>`;
// // //     });

// // //     const htmls = newArray.join("");
// // //     const productsList = document.querySelector("#product-list");

// // //     productsList.innerHTML = htmls;

// // //     console.log(htmls);
// // //   });

// // // ●Async: Khai báo một hàm bất đồng bộ.
// // //   ● Tự động biến đổi một hàm thông thường thành một Promise.
// // //   ● Từ khóa Async được đặt trước 1 hàm.

// // // ● Await: Tạm dừng việc thực hiện các hàm async.
// // //   ● Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
// // //   ● Await chỉ có thể được sử dụng bên trong các hàm async.

// // // const fetchApi = async (api) => {
// // //   const respone = await fetch(api);
// // //   // console.log(respone);
// // //   const data = await respone.json();
// // //   // console.log(data);
// // //   return data;
// // // };

// // // // fetchApi("https://dummyjson.com/products").then((data) => {
// // // //   console.log(data);
// // // // });
// // // fetchApi("http://localhost:3000/products").then((data) => {
// // //   console.log(data);
// // // });

// // // Hướng dẫn cấu hình:
// // //   ● Bước 1: Gõ lệnh npm init để khởi tạo file package.json.
// // //   ● Bước 2: Gõ lệnh npm i json-server để cài.
// // //   ● Bước 3: Tạo 1 file database.json.
// // //   ● Bước 4: Thêm vào mục script trong package.json dòng lệnh: "start": "json-server --watch
// // //   database.json".
// // //   ● Bước 5: Gõ lệnh npm start để chạy.

// // localStorage.setItem("fullName", "Đặng Phương Nam");
// // const fullName = localStorage.getItem("fullName");
// // console.log(fullName);

// // const divTest = document.querySelector(".test");
// // divTest.innerHTML = fullName;

// // const currentMode = localStorage.getItem("mode");
// // if (currentMode) {
// //   const body = document.querySelector("body");
// //   body.classList.toggle(currentMode);
// // }

// // // Change Mode
// // const btnChangeMode = document.querySelector("#change-mode");
// // btnChangeMode.addEventListener("click", () => {
// //   const body = document.querySelector("body");
// //   body.classList.toggle("dark");

// //   const currentMode = localStorage.getItem("mode");
// //   if (currentMode) {
// //     currentMode.setItem("mode", "");
// //   } else {
// //     localStorage.setItem("mode", "dark");
// //   }
// // });

// // Change Mode
// const currentMode = sessionStorage.getItem("mode");
// if (currentMode) {
//   const body = document.querySelector("body");
//   body.classList.toggle(currentMode);
// }

// const array1 = [1, 2, 3];
// const array2 = [...array1, 4, 5];
// console.log(array2);

// let inforUserDB = {
//   fullName: "Lê Văn A",
//   email: "levana@gmail.com",
// };

// let inforUserFE = {
//   phone: "012345678",
//   age: 18,
// };

// const newInfor = {
//   ...inforUserDB,
//   ...inforUserFE,
//   facebook: "fb.com/abc",
// };

// console.log(newInfor);

const array = [1, 2, 3];

const [a, b] = array;

console.log(a);
console.log(b);
