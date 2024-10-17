var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
console.log(myString.replace("Tôi", "Mình"));
console.log(myString.replace(/Tôi/g, "Mình"));

var myString = `HTML5, CSS3, Javascript`;
console.log(myString.split()); // Cả string là 1 phần tử
console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
console.log(myString.split(", ")); // Mỗi từ là 1 phần tử
console.log(myString.split(", ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử

console.log(Infinity);
console.log(-Infinity);
console.log("12" / "ád");

// Undefined
// ● Là kiểu dữ liệu mà khi khai báo ra một biến và không gán giá trị thì kết quả trả về là undefined.
let a;
console.log(a);

// Kiểu Null
// ● Là kiểu dữ liệu đặc biệt, chỉ bao gồm một giá trị là null (không biết giá trị, không có giá trị)
let b = null;
console.log(b);

// Kiểu Object
// ● Là một tập hợp gồm các cặp key - value (khóa - giá trị).
let tenBien = {
  key1: "value 1",
  key2: "value 2",
};

let tenBien2 = ["value 1", "value 2"];
// Code sẽ chạy 1 lần duy nhất sau một khoảng thời gian
// setTimeout(function () {}, time);
// Code sẽ chạy lặp lại sau một khoảng thời gian
// setInterval(function () {}, time);

// start: Vị trí bắt đầu tìm kiếm (tính từ trái qua phải) và sẽ tìm kiếm xuôi tiếp (mặc định bắt đầu từ 0).
var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
console.log(myString.indexOf("Tôi")); // Trả về 10
console.log(myString.indexOf("Hải")); // Trả về -1
console.log(myString.indexOf("Nam")); // Trả về 18
console.log(myString.indexOf("nam")); // Trả về -1
console.log(myString.indexOf("Tôi", 11)); // Trả về 23
// start: Vị trí bắt đầu tìm kiếm (tính từ trái qua phải) và sẽ tìm kiếm ngược lại (mặc định bắt đầu từ 0).
console.log(myString.lastIndexOf("Tôi", 24)); // Trả về 23
console.log(myString.lastIndexOf("Tôi", 22)); // Trả về 10
console.log(myString.lastIndexOf("Tôi", 10)); // Trả về 10
console.log(myString.lastIndexOf("Tôi", 9)); // Trả về -1

console.log(myString.slice(10, 21)); // Tôi tên Nam
console.log(myString.slice(0)); // Lấy toàn bộ chuỗi
console.log(myString.slice(0, 1)); // X (Lấy ký tự đầu tiên của chuỗi)
console.log(myString.slice(-1)); // . (Lấy ký tự cuối cùng của chuỗi)
console.log(myString); // Vẫn giữ nguyên chuỗi gốc

console.log(myString.replace("Tôi", "Mình"));
console.log(myString.replace(/Tôi/g, "Mình"));

console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

console.log(myString.trim());

console.log(myString.charAt()); // Lấy ký tự đầu tiên
console.log(myString.charAt(0)); // Lấy ký tự đầu tiên
console.log(myString.charAt(1)); // Lấy ký tự thứ 2
console.log(myString.charAt(myString.length - 1)); // Lấy ký tự cuối cùng

console.log(myString.split()); // Cả string là 1 phần tử
console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
console.log(myString.split(" ")); // Mỗi từ là 1 phần tử
console.log(myString.split(" ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử

var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.join()); // Trả về: "HTML5,CSS3,Javascript"
console.log(list.join(",")); // Trả về: "HTML5,CSS3,Javascript"
console.log(list.join("")); // Trả về: "HTML5CSS3Javascript"
console.log(list.join(", ")); // Trả về: "HTML5, CSS3, Javascript"
console.log(list.join(" - ")); // Trả về: "HTML5 - CSS3 - Javascript"

var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.pop()); // Trả về: "Javascript"
console.log(list); // Trả về: ["HTML5", "CSS3"]

//Trả về độ dài mới của mảng.
var list = ["HTML5", "CSS3", "Javascript"];
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.push("Bootstrap 4", "ReactJS")); // Trả về: 5
console.log(list);
// Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.push("Bootstrap 4", "ReactJS")); // Trả về: 5
console.log(list);

// Dùng để xóa phần tử đầu mảng
//Trả về độ dài mới của mảng.
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.shift()); // Trả về: "HTML5
console.log(list); // Trả về: ["CSS3", "Javascript"]

// Thêm một hoặc nhiều phần tử vào đầu mảng.
//Trả về độ dài mới của mảng.
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.unshift("Bootstrap 4", "ReactJS")); // Trả về: 5
console.log(list);

//Trả về mảng bị xóa.
var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.splice(2, 0, "Bootstrap 4", "ReactJS")); // Trả về: []
console.log(list);
console.log(list.splice(1, 1)); // Trả về: ["CSS3"]
console.log(list); // Trả về: ["HTML5", "Javascript"]

//Dùng để nối 2 array.
var list = ["HTML5", "CSS3", "Javascript"];
var list2 = ["Bootstrap 4", "ReactJS"];
console.log(list.concat(list2));
// Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
console.log(list);
// Trả về: ["HTML5", "CSS3", "Javascript"]

//Không làm ảnh hưởng đến mảng ban đầu
var list = ["HTML5", "CSS3", "Javascript"];
var list2 = ["Bootstrap 4", "ReactJS"];
console.log(list.concat(list2));
// Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
console.log(list);
// Trả về: ["HTML5", "CSS3", "Javascript"]

//Không làm ảnh hưởng đến mảng ban đầu.
var list = ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"];
console.log(list.slice(3)); // Trả về: ["Bootstrap 4", "ReactJS"]
console.log(list.slice(1, 3)); // Trả về: ["CSS3", "Javascript"]
console.log(list.slice(-3, -1)); // Trả về: ["Javascript", "Bootstrap 4"]
console.log(list);
// Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
