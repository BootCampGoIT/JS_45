// console.log("Занятие 3 - Массивы");

// ## Массивы

// ### Создание массива

// ### Доступ к элементам

// const usersList = ["Alex", "Nikita", "Boris"];
// console.log(usersList[2]);
// usersList[3] = "Andrii";
// usersList[99] = "Vova";
// console.log(usersList[45]);
// console.log(usersList.length);

// const user = ["Alex", 25, "student"]

// const coordinates = [
//   [100, 120],
//   [500, 700],
// ];

// console.log(coordinates[0][1]);

// ## Итерация по массиву

// ### Цикл for...of

// const usersList = ["Alex", "Nikita", "Boris"];

// for (let i = 0; i < usersList.length; i += 1) {
//   console.log(usersList[i]);
// }

// for (const user of usersList) {
//   console.log(user);
// }

// const str = "Lorem ipsum dolor sit amet.";
// const str = new String("Lorem ipsum dolor sit amet.");
// console.dir(str);

// ## Присвоение по ссылке и по значению

// let num = 5;
// let newNum = num;

// console.log(`num`, num);
// console.log(`newNum`, newNum);

// num += 10;

// console.log(`num`, num);
// console.log(`newNum`, newNum);

// const usersList = ["Alex", "Nikita", "Boris"];
// const newUserList = usersList;

// console.log(`usersList`, usersList);
// console.log(`newUserList`, newUserList);

// usersList[usersList.length] = "Vova";
// console.log(`usersList`, usersList);
// console.log(`newUserList`, newUserList);

// ==========================

// const usersList = ["Alex", "Nikita", "Boris"];

// for (const user of usersList) {
//   const iterator = 1000000000;
//   if (user !== "Nikita") continue;
//   console.log(user, "End")
//   for (let i = 0; i <= iterator; i += 1) {
//     // console.log(i);
//   }
// }
// console.log("Hello");

// ================================

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// =================================

// const data = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // let total = 0;
// // for (const num of sum) {
// //   total += num;
// // }
// // console.log(`total`, total);

// let res = 0;

// for (let i = 0; i < data.length; i += 1) {
//   console.log(data[i]);
//   for (let k = 0; k < data.length; k += 1) {
//     console.log(`[${i}][${k}]:`, data[i][k]);
//     res += data[i][k]; //[0][0] //1
//   }
// }
// console.log(`res`, res);

// ====================
// ## Методы массива

// const users = [
//   { name: "Alex", age: 25 },
//   { name: "Nikita", age: 30 },
// ];

// ### Методы split() и join()

// const str = new String("lorem");
// console.dir(str);

// const arr = new Array([1, 2, 3, 4, 5]);
// console.dir(arr);

// const str =
//   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est beatae atque earum iusto laudantium ipsa illo quia tenetur! Tenetur.";

// const res = str.split(" ").reverse()[0];
// const lastWord = res[res.length - 1];
// console.log(`lastWord`, lastWord);

// console.log(`res`, res);
// for (const elem of res) {
//   if (elem === "elit.") {
//     console.log(true);
//   }
// }

// const date = "09/20/2021";
// const res = date.split("/", 2).reverse();
// console.log(`res`, res);
// res[2] = date.split("/")[2];
// console.log(`res`, res.join("."));

// console.log(`res`, res);
// console.log(`${res[1]}.${res[0]}.${res[2]}`);

// const arr = [1, 2, 3, 4];
// const res = arr.join("");
// console.log(`res`, res);
// ### Метод indexOf()
// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Ajax", "Poly"];
// for (const client of clients) {
//   console.log(clients.indexOf(client));
// }

// const set = new Set(clients);
// console.log(`set`, set);

// ### Метод includes()
// const clients = ["Mango", "Ajax", "Poly", "KiWi", "AJax", "Poly"];
// // const res = clients.includes("Kiwi");
// // console.log(`res`, res);
// const value = "kiwi";

// let res;
// for (const name of clients) {
//   clients[clients.indexOf(name)] = name.toLowerCase();
//   console.log(`clients`, clients);
//   res = clients.includes(value.toLowerCase());
// }
// console.log(res);

// ### Методы push() и pop()

// const arr = [1, 2, 3, 4, 5];

// arr.push(6);
// console.log(arr);
// const res = arr.pop();
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// // const res = arr.shift();
// console.log(res);

// ### Методы shift() и unshift()

// ### Метод splice()
// const arr = [1, 2, 3, 4, 5];
// // const res = arr.splice(0, 2);
// console.log(`arr`, arr);

// const res = arr.splice(0, 1, 100, 200);
// console.log(`arr`, arr);
// console.log(`res`, res);

// ### Метод concat()

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 0];
// const res = arr1.concat(arr2);
// console.log(arr1);
// console.log(arr2);
// console.log(`res`, res);

// ================ functions =================
// function declaration
// getName(1, 2);

// function getName(...rest) {
//   console.log(`rest`, rest);
//   //   for (const item of arguments) {
//   //     console.log(item);
//   //   }
// }

// function expression
// const getName = function (...numbers) {
//   if (!numbers.length) return 0;
//   let res = 0;
//   for (const num of numbers) {
//     res += num;
//   }
//   return res;
// };

// const res = getName();
// console.log(res);

// arrow function
// const getName = () => console.log("Hello");
// getName();

// const x = 30;

// function fn1() {
//   function fn2() {
//     function fn3() {
//       var x = 10;
//       console.log(x);
//     }
//   }
// }

// if (true) {
//   if (true) {
//     var x = 100;
//   }
// }

// console.log(x);

// console.log(x);

// IIFE
// (function () {
//   console.log("Hello");
// })();

// const fn = () => {};

// ==========================
// function fn() {
//   const x = fn(10);
//   return x;
//   function fn(x) {
//     console.log(x);
//   }
// }

// const res = fn();
// console.log(`res`, res);

// =============================

// function fn() {
//   const arr = Array.from(arguments);
//   console.log(arr);
// }
// fn(1, 2, 3, 4, 5);
// const arr = Array.from([1, 2, 3, 4, 5]);
// console.log(arr);

// const getData = (...rest) => {
//   console.log(rest);
// };

// getData(1, 2, 3, 4, 5);

// =========================
// const sum = (a, b) => {
//   if (a.constructor.name === "Number" && b.constructor.name === "Number") {
//     return a + b;
//   }
// };
// ========================
// import { calculator } from "./helpers/calculator.js";

// calculator(10, 5, "+");

// ==================
// let x = 5;

// const fn = function () {
//   x = 10;
// };
// // fn();
// console.log(x); //5

// ==============
// const fn3 = () => {
//   return 5;
// };

// const fn2 = () => {
//   return fn3();
// };

// const fn1 = () => {
//   return fn2();
// };

// console.log(fn1());

// ==========================

// const fn = function (x) {
//   return function () {
//     console.log(x);
//   };
// };

// const res = fn(5);
// console.log(res);

// ==================

// const counter = function (initialValue = 50) {
//   return function (step) {
//     console.log((initialValue += step));
//   };
// };

const counter =
  (initialValue = 50) =>
  (step) =>
    console.log((initialValue += step));

const volume = counter(100);
volume(2);
volume(2);
volume(2);
volume(-2);
volume(-2);
console.log("==============================");

const zoom = counter();
zoom(20);
zoom(20);
zoom(20);
zoom(20);
