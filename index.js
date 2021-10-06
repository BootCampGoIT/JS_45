// [].method((item, idx, arr) => {
//   // логика которая будет применяться на каждой итерации
// });

// const arr = [1, 2, 3, 4, 5];

//! map()
// const arr = [{isOnline: true}, true, true, true, false];
// const arr = [true, true, true, true, false];
// const res = arr.map((isOnline) => {{ isOnline }});
// console.log(res);
// const arr = ["Home", "About", "Contacts"];

// const res = arr.map((item) => `<li>${item}</li>`).join("");
// console.log(`res`, res);
// =============
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const res = students.map(({ score }) => score);
// console.log(`res`, res);

//! flatMap()

// const students = [
//   { name: "Манго", courses: ["435tetrtr", "345terte"] },
//   { name: "Поли", courses: ["434243", "fteter45"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const res = [...new Set(students.flatMap(({ courses }) => courses))];
// console.log(`res`, res);

//! filter()
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];
// const res = students.filter(({ score }) => score > 50);
// console.log(`res`, res);
// =====================
// const students = [
//   { id: "erwre", name: "Манго", score: 83 },
//   { id: "wer4", name: "Поли", score: 59 },
//   { id: "ewrwer", name: "Аякс", score: 37 },
//   { id: "423432", name: "Киви", score: 94 },
//   { id: "ewrewrewr", name: "Хьюстон", score: 64 },
// ];

// const deleteItem = (id) => students.filter((student) => student.id !== id);
// console.log(deleteItem("423432"));

// ==============
// const filter = "hello";

// const groups = [{ groupName: "Hello" }, { groupName: "By" }];

// const getFilteredGroups = () =>
//   groups.filter((group) =>
//     group.groupName.toLowerCase().includes(filter.toLowerCase())
//   );

//   console.log(getFilteredGroups())

//! find()
// const students = [
//   { id: "erwre", name: "Манго", score: "83" },
//   { id: "wer4", name: "Поли", score: 59 },
//   { id: "ewreefgr", name: "Хьюстон", score: 64 },
//   { id: "ewrwer", name: "Аякс", score: "37" },
//   { id: "423432", name: "Киви", score: 94 },
//   { id: "dfdfdfgdfgdfgdfg", name: "Хьюстон", score: 64 },
// ];

// const res = students.find((item) => item.name === "Хьюстон");
// const res1 = students.some((item) => item.name === "Хьюстон");
// const res1 = students.filter(
//   (item) => item.score.constructor.name !== "Number"
// );
// console.log(res);
// console.log(res1);
// res && console.log("Yes");

//! some()

//! every()

//! findIndex()

// const array = [1, 2, 3, 1, 5, 7, 1, 1, 1, 1, 1];

// // const set = new Set(array);
// // console.log(set);
// array.forEach((item) => console.log(array.indexOf(item)));
// console.log(indexOf(arr[0]));

//! reduce()
// const students = [
//   { id: "erwre", name: "Манго", score: 83 },
//   { id: "wer4", name: "Поли", score: 59 },
//   { id: "ewreefgr", name: "Хьюстон", score: 64 },
//   { id: "ewrwer", name: "Аякс", score: 37 },
//   { id: "423432", name: "Киви", score: 94 },
// ];

// const res = students.reduce((acc, item) => {
//   if (item.score > 70) {
//     acc += item.score;
//   }
//   return acc;
// }, 0);
// console.log(res);

// const res = students.reduce((acc, item) => {
//   acc.push({ isOnline: false, ...item });
//   return acc;
// }, []);

// console.log(`res`, res);

// const res = students.reduce((acc, { name }) => {
//   acc += `<li>${name}</li>`;
//   return acc;
// }, "");
// console.log(res); //<li>Mango</li><li>Poli</li>

// const res = students.map((item) => ({ ...item, isOnline: false }));
// console.log(res);

//! sort()

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // const res = [...new Set(tweets.flatMap(({ tags }) => tags))].length;
// const uniqueTags = tweets.reduce((acc, { tags }) => {
//   tags.forEach((tag) => !acc.some((item) => item === tag) && acc.push(tag));
//   return acc;
// }, []);

// console.log(uniqueTags);

// ============
// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]
// =====
// const students = ["aндрей", "Андрей", "Олег", "aяя", "Борис", "Катя"];
// students.sort();
// console.log(students);

// const arr = ["Якорь", "Яблоко"];

// arr.sort();
// console.log(arr);
