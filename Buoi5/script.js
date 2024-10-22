// var objectJS = {
//   fullName: "Đặng Phương Nam",
//   phone: "0123456789",
//   email: "namtest@gmai.com",
// };

//JSON viết tắt của JavaScript Object Notation.
// var objectJSON = `
//     {
//         "fullName": "Đặng Phương Nam",
//         "phone": "0123456789",
//         "email": "namtest@gmai.com"
//     }
// `;

// console.log(objectJSON);

// const objectJS = JSON.parse(objectJSON);
// console.log(objectJS);

// const objectJSON2 = JSON.stringify(objectJS);
// console.log(objectJSON2);

// JSON có giá trị là Number
// var numberJS = 10;
// var numberJSON = `{
//   "test" : "abc"
// }`;

// console.log(numberJSON);
// var numberJS = JSON.parse(numberJSON);
// console.log(numberJS);

// var numberJSON2 = JSON.stringify(numberJS);
// console.log(numberJSON2);

//JSON có giá trị là String
// var stringJS = "abc";
// var stringJSON = `"abc"`;
// console.log(stringJSON);

// var stringJS = JSON.parse(stringJSON);
// console.log(stringJS);

// var stringJSON2 = JSON.stringify(stringJS);
// console.log(stringJSON2);

//JSON có giá trị là Boolean
// var booleanJSON = `true`;
// console.log(booleanJSON);

// var booleanJS = JSON.parse(booleanJSON);
// console.log(booleanJS);

// var booleanJSON2 = JSON.stringify(booleanJS);
// console.log(booleanJSON2);

//JSON có giá trị là Array
// var arrayJSON = `[
//   {
//     "fullName": "Lê Văn A",
//     "email": "abc@gmail.com"
//   },
//     {
//     "fullName": "Lê Văn B",
//     "email": "abc@gmail.com"
//   }
// ]`;
// console.log(arrayJSON);

// var arrayJS = JSON.parse(arrayJSON);
// console.log(arrayJS);

// var arrayJSON2 = JSON.stringify(arrayJS);
// console.log(arrayJSON2);

//JSON có giá trị là Null

var nullJSON = `null`;
console.log(nullJSON);

var nullJS = JSON.parse(nullJSON);
console.log(nullJS);

var nullJSON2 = JSON.stringify(nullJS);
console.log(nullJSON2);
