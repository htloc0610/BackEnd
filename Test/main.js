// // // const ordersJSON = `
// // //     [
// // //         {
// // //             "id": 1,
// // //             "items": [
// // //                 {
// // //                     "productId": 1,
// // //                     "quantity": 2
// // //                 },
// // //                 {
// // //                     "productId": 2,
// // //                     "quantity": 1
// // //                 }
// // //             ]
// // //         },
// // //         {
// // //             "id": 2,
// // //             "items": [
// // //                 {
// // //                     "productId": 3,
// // //                     "quantity": 3
// // //                 }
// // //             ]
// // //         }
// // //     ]
// // // `;

// // // const productsJSON = `
// // //     [
// // //         {
// // //             "id": 1,
// // //             "name": "iPhone 12",
// // //             "price": 1200
// // //         },
// // //         {
// // //             "id": 2,
// // //             "name": "Samsung Galaxy S21",
// // //             "price": 1000
// // //         },
// // //         {
// // //             "id": 3,
// // //             "name": "Google Pixel 5",
// // //             "price": 900
// // //         }
// // //     ]
// // // `;

// // // const productsList = JSON.parse(productsJSON);
// // // const ordersList = JSON.parse(ordersJSON);

// // // const calculateOrderTotal = (id) => {
// // //   const order = ordersList.find((order) => order.id === id);
// // //   if (!order) {
// // //     console.log("Không tìm thấy");
// // //     return;
// // //   } else {
// // //     let totalSum = 0;
// // //     for (const item of order.items) {
// // //       const product = productsList.find(
// // //         (product) => product.id === item.productId
// // //       );
// // //       if (!product) {
// // //         console.log("Không tìm thấy sản phẩm");
// // //         return;
// // //       }
// // //       totalSum += product.price * item.quantity;
// // //     }
// // //     console.log(totalSum);
// // //   }
// // // };

// // // calculateOrderTotal(3);

// // let productsJSON = `
// //     [
// //         {
// //             "id": 1,
// //             "name": "iPhone 12",
// //             "price": 1200
// //         },
// //         {
// //             "id": 2,
// //             "name": "Samsung Galaxy S21",
// //             "price": 1000
// //         },
// //         {
// //             "id": 3,
// //             "name": "Google Pixel 5",
// //             "price": 900
// //         }
// //     ]
// // `;

// // let productsList = JSON.parse(productsJSON);
// // deleteProduct(1);
// // console.log(productsList);

// // function deleteProduct(id) {
// //   //   const product = productsList.findIndex((item) => item.id === id);
// //   //   if (!product) {
// //   //     productsList.splice(product, 1);
// //   //   }
// //   productsList = productsList.filter((item) => item.id !== id);
// //   productsJSON = JSON.stringify(productsList);
// // }

// // console.log(productsJSON);

// const productsJSON = `
//     [
//         {
//             "id": 1,
//             "name": "iPhone 12",
//             "quantity": 10
//         },
//         {
//             "id": 2,
//             "name": "Samsung Galaxy S21",
//             "quantity": 5
//         },
//         {
//             "id": 3,
//             "name": "Google Pixel 5",
//             "quantity": 8
//         }
//     ]
// `;

// const products = JSON.parse(productsJSON);
// console.log(calculateTotalQuantity());

// function calculateTotalQuantity() {
//   //   let sum = 0;
//   //   products.forEach((product) => {
//   //     sum += product.quantity;
//   //   });
//   //   console.log(sum);
//   const sumQuality = products.reduce((sum, product) => {
//     return sum + product.quantity;
//   }, 0);
//   return sumQuality;
// }
