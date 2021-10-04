// spread

// const group = {
//   courses: {
//     html_css: {
//       isActive: false,
//     },
//     javaScript: {
//       isActive: false,
//     },
//     react: {
//       isActive: false,
//     },
//   },
//   prop: "fghj",
// };

// const deepCopy = (object) => {
//   const newObject = {};
//   // =============
//   const getProps = (object, dist) => {
//     const keys = Object.keys(object);
//     for (const key of keys) {
//       if (object[key].constructor.name === "Object") {
//         dist[key] = getProps(object[key], dist[key]);
//       } else object[key] = dist[key];
//     }
//     return newObject;
//   };
//   // ===============
//   getProps(object, newObject);
// };
// deepCopy(group);

// const FE45 = JSON.parse(JSON.stringify(group));
// FE45.courses.html_css.isActive = true;
// console.log(FE45);
// console.log(group);

// =================

// const obj = {
//   name: "Alex",
//   courses: {
//     first: "dgfhj",
//     second: {
//       fgh: "dtfyguhj",
//     },
//   },
// };

// const data = JSON.parse(JSON.stringify(obj));
// console.log(obj);
// console.log(data);
// data.courses.first = "Lorem, ipsum.";
// console.log(obj);
// console.log(data);

// const newObj = { ...obj, status: "online" };
// newObj.courses.first = "Lorem, ipsum.";

// newObj.name = "Nikita";
// console.log(newObj);
// console.log(obj);

// =====================

// const props = {
//   name: "Nikita",
// };
// const newObject = {
//   name: "Alex",
// };
// const result = { ...props, id: "sdfghj313213123", ...newObject };
// console.log(result);

// const shop = {
//   products: [],
// };

// const addProduct = (product) => {
//   shop.products = [...shop.products, product];
//   console.log(shop.products);
// };

// addProduct({ name: "Milk" });
// addProduct({ name: "Bread" });
// addProduct({ name: "Juice" });

// ==================
// const getSum = (...numbers) => {
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }
//   return total;
// };

// console.log(getSum(2, 3, 4, 5, 6, 7, 8));
// console.log(getSum(2, 3, 4));

// =======================

// const group = {
//   courses: {
//     html_css: {
//       isActive: true,
//     },
//     javaScript: {
//       isActive: false,
//     },
//     react: {
//       isActive: false,
//     },
//   },
//   prop: "fghj",
// };

// const {
//   courses: {
//     html_css: { isActive: value },
//   },
// } = group;
// console.log(value);

// const { isActive: value } = group.courses.html_css;
// console.log(value);

// const value = group.courses.html_css.isActive;
// console.log(value);

// ==================
// const products = [
//   { name: "Milk", price: 20 },
//   { name: "Bread", price: 30 },
// ];

// for (const { name, price } of products) {
//   console.log(`${name} : ${price}`);
// }

// ===========================

// const arrays = [
//   [1, 2, 3],
//   [4, [12, 13, 14], 6],
// ];
// const [, [, [value]]] = arrays;
// // const value = arrays[1][1][0];
// console.log(value);

// const line = [
//   [100, 100],
//   [400, 768],
// ];
// const [, [, value]] = line;
// console.log(value);

// const products = {
//   categories: {
//     tools: [
//       { name: "screw", price: 20 },
//       { name: "hummer", price: 30 },
//       { name: "screwDriver", price: 100 },
//     ],
//     toys: [
//       { name: "teadyBear", price: 10 },
//       { name: "puzzle", price: 30 },
//     ],
//   },
// };

// const {
//   categories: {
//     tools: [, , { price }],
//   },
// } = products;

// console.log(price);

// ============
// function doStuffWithBook(object) {
//   const values = Object.values(object);
//   for (const value of values) console.log(value);
// }

// const getProps = (object, ...rest) => {
//   const res = {};
//   for (const prop of rest) {
//     res[prop] = object[prop];
//   }
//   return res;
// };

// doStuffWithBook(
//   getProps(
//     {
//       title: "The Last Kingdom",
//       numberOfPages: 736,
//       downloads: 10283,
//       rating: 8.38,
//       public: true,
//     },
//     "public"
//   )
// );

const data = {
  name: "Alex",
};

const { age = 25 } = data;
console.log(age);
