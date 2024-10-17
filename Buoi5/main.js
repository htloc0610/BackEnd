// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.replace("Tôi", "Mình"));
// console.log(myString.replace(/Tôi/g, "Mình"));

// var myString = `HTML5, CSS3, Javascript`;
// console.log(myString.split()); // Cả string là 1 phần tử
// console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
// console.log(myString.split(", ")); // Mỗi từ là 1 phần tử
// console.log(myString.split(", ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử

// console.log(Infinity);
// console.log(-Infinity);
// console.log("12" / "ád");

// // Undefined
// // ● Là kiểu dữ liệu mà khi khai báo ra một biến và không gán giá trị thì kết quả trả về là undefined.
// let a;
// console.log(a);

// // Kiểu Null
// // ● Là kiểu dữ liệu đặc biệt, chỉ bao gồm một giá trị là null (không biết giá trị, không có giá trị)
// let b = null;
// console.log(b);

// // Kiểu Object
// // ● Là một tập hợp gồm các cặp key - value (khóa - giá trị).
// let tenBien = {
//   key1: "value 1",
//   key2: "value 2",
// };

// let tenBien2 = ["value 1", "value 2"];
// // Code sẽ chạy 1 lần duy nhất sau một khoảng thời gian
// // setTimeout(function () {}, time);
// // Code sẽ chạy lặp lại sau một khoảng thời gian
// // setInterval(function () {}, time);

// // start: Vị trí bắt đầu tìm kiếm (tính từ trái qua phải) và sẽ tìm kiếm xuôi tiếp (mặc định bắt đầu từ 0).
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.indexOf("Tôi")); // Trả về 10
// console.log(myString.indexOf("Hải")); // Trả về -1
// console.log(myString.indexOf("Nam")); // Trả về 18
// console.log(myString.indexOf("nam")); // Trả về -1
// console.log(myString.indexOf("Tôi", 11)); // Trả về 23
// // start: Vị trí bắt đầu tìm kiếm (tính từ trái qua phải) và sẽ tìm kiếm ngược lại (mặc định bắt đầu từ 0).
// console.log(myString.lastIndexOf("Tôi", 24)); // Trả về 23
// console.log(myString.lastIndexOf("Tôi", 22)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 10)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 9)); // Trả về -1

// console.log(myString.slice(10, 21)); // Tôi tên Nam
// console.log(myString.slice(0)); // Lấy toàn bộ chuỗi
// console.log(myString.slice(0, 1)); // X (Lấy ký tự đầu tiên của chuỗi)
// console.log(myString.slice(-1)); // . (Lấy ký tự cuối cùng của chuỗi)
// console.log(myString); // Vẫn giữ nguyên chuỗi gốc

// console.log(myString.replace("Tôi", "Mình"));
// console.log(myString.replace(/Tôi/g, "Mình"));

// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());

// console.log(myString.trim());

// console.log(myString.charAt()); // Lấy ký tự đầu tiên
// console.log(myString.charAt(0)); // Lấy ký tự đầu tiên
// console.log(myString.charAt(1)); // Lấy ký tự thứ 2
// console.log(myString.charAt(myString.length - 1)); // Lấy ký tự cuối cùng

// console.log(myString.split()); // Cả string là 1 phần tử
// console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
// console.log(myString.split(" ")); // Mỗi từ là 1 phần tử
// console.log(myString.split(" ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử

// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.join()); // Trả về: "HTML5,CSS3,Javascript"
// console.log(list.join(",")); // Trả về: "HTML5,CSS3,Javascript"
// console.log(list.join("")); // Trả về: "HTML5CSS3Javascript"
// console.log(list.join(", ")); // Trả về: "HTML5, CSS3, Javascript"
// console.log(list.join(" - ")); // Trả về: "HTML5 - CSS3 - Javascript"

// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.pop()); // Trả về: "Javascript"
// console.log(list); // Trả về: ["HTML5", "CSS3"]

//Trả về độ dài mới của mảng.
// var list = ["HTML5", "CSS3", "Javascript"];
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.push("Bootstrap 4", "ReactJS")); // Trả về: 5
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.push("Bootstrap 4", "ReactJS")); // Trả về: 5
// console.log(list);

// Dùng để xóa phần tử đầu mảng
//Trả về độ dài mới của mảng.
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.shift()); // Trả về: "HTML5
// console.log(list); // Trả về: ["CSS3", "Javascript"]

// Thêm một hoặc nhiều phần tử vào đầu mảng.
// //Trả về độ dài mới của mảng.
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.unshift("Bootstrap 4", "ReactJS")); // Trả về: 5
// console.log(list);

//Trả về mảng bị xóa.
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.splice(2, 0, "Bootstrap 4", "ReactJS")); // Trả về: []
// console.log(list);
// console.log(list.splice(1, 1)); // Trả về: ["CSS3"]
// console.log(list); // Trả về: ["HTML5", "Javascript"]

//Dùng để nối 2 array.
// var list = ["HTML5", "CSS3", "Javascript"];
// var list2 = ["Bootstrap 4", "ReactJS"];
// console.log(list.concat(list2));
// Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
// console.log(list);
// Trả về: ["HTML5", "CSS3", "Javascript"]

//Không làm ảnh hưởng đến mảng ban đầu
// var list = ["HTML5", "CSS3", "Javascript"];
// var list2 = ["Bootstrap 4", "ReactJS"];
// console.log(list.concat(list2));
// Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
// console.log(list);
// Trả về: ["HTML5", "CSS3", "Javascript"]

//Không làm ảnh hưởng đến mảng ban đầu.
// var list = ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"];
// console.log(list.slice(3)); // Trả về: ["Bootstrap 4", "ReactJS"]
// console.log(list.slice(1, 3)); // Trả về: ["CSS3", "Javascript"]
// console.log(list.slice(-3, -1)); // Trả về: ["Javascript", "Bootstrap 4"]
// console.log(list);
// Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]

// class Student {
//   name = "Lộc";
//   age = 12;
// }

// var student = {
//   name: "Lộc",
//   age: 12,
// };

// const studentInstance = new Student();

// for (let a in studentInstance) {
//   console.log(a);
// }

// student.id = "123";
// console.log(student.name);
// for (let a in student) {
//   console.log(a);
//   console.log(student[a]);
// }

// var arr = new Array(1, 2, 3, 4, 5);
// for (let a of arr) {
//   console.log(a);
// }

//Declaration function (Hàm định nghĩa)
// Có tính hoisting (nghĩa là gọi được hàm trước lúc khai báo hàm đó)
//Có đối tượng arguments
function tenHam(thamSo1, thamSo2) {}

//Expression function (Hàm biểu thức)
//Không có tính hoisting (Nếu gọi hàm trước lúc khai báo hàm thì sẽ gặp lỗi)
//Có đối tượng arguments
// var tenHam = function (thamSo1, thamSo2) {};

//Arrow function (Hàm mũi tên)
//Không có tính hoisting (Nếu gọi hàm trước lúc khai báo hàm thì sẽ gặp lỗi)
//Không có đối tượng arguments
var tenHam = (thamSo1, thamSo2) => {};

// function test() {
//   console.log(arguments); // Đây là đối tượng arguments
// }
// test(1, 2, 3); // Kết quả: [1, 2, 3]

// const test1 = () => {
//   console.log(arguments); // Lỗi: arguments không được định nghĩa
// };
// test1(1, 2, 3);

// function tong() {
//   console.log(arguments);
// }
// var ketqua = tong(10, 20, 30, 40);
// console.log(ketqua);

// const test1 = (...arguments) => {
//   console.log(arguments); // Lỗi: arguments không được định nghĩa
// };
// test1(1, 2, 3);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 5];
// let sum = 0;

// arr.forEach(function (currentValue, index, array) {
//   // code xử lý
//   });

//Để duyệt qua mỗi phần tử của mảng và thực hiện một hành động nào đó.
// numbers.forEach((item, index, arrayOrigin) => {
//   // _ tượng trưng không dùng tới
//   console.log(item);
//   console.log(index);
//   console.log(arrayOrigin);
//   console.log("-----------------");
// });

//Kiểm tra tất cả các phần tử của một mảng phải thỏa mãn một điều kiện gì đó
// numbers.every(function (currentValue, index, array) {
//   return currentValue < 100;
// });
// console.log(
//   numbers.every(function (currentValue, index, array) {
//     return currentValue < 0;
//   })
// );

//Kiểm tra chỉ cần một phần tử của một mảng thỏa mãn một điều kiện gì đó là được.
// console.log(
//   numbers.some(function (currentValue, index, array) {
//     return currentValue < 5;
//   })
// );

//Tìm xem trong mảng có giá trị giống với giá trị đang cần tìm không?
// console.log(
//   numbers.find(function (currentValue, index, array) {
//     return currentValue === 5;
//   })
// );

// Giống hàm find().
// ● Tìm được nhiều phần tử trong mảng.
// console.log(
//   numbers.filter(function (currentValue, index, array) {
//     return currentValue === 5;
//   })
// );

//Lặp qua từng phần tử của mảng và trả về một mảng mới
// console.log(
//   numbers.map(function (currentValue, index, array) {
//     return currentValue === 5;
//   })
// );

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 5];
// //Hàm reduce() duyệt qua từng phần tử trong mảng để tính toán và trả về một giá trị cuối cùng
// const sum = console.log(
//   numbers.reduce((total, item) => {
//     console.log(total);
//     console.log(item);
//     console.log("------------------");
//     return total + item;
//   })
// );

// arr.reduce(function (accumulator, currentValue, currentIndex, array) {
//   // code xử lý
// }, initialValue);
// accumulator: là giá trị của lệnh return cho mỗi lần lặp.
// initialValue: giá trị khởi tạo ban đầu (không bắt buộc)

// console.log(sum);

var monhoc = {
  length: 10,
  ten: 10,
};

console.log(monhoc.length);

// class nên không truy cập được, phải gọi khởi tạo
class abc {
  leng = 10;
}

var abcd = new abc();
console.log(abcd.leng);
