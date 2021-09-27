// const user = {
//   firstName: "Oleg",
//   lastName: "Ivanov",
//   age: 20,
//   status: "student",
//   books: ["1", "2", "3"],
//   isMarried: false,
//   education: {
//     math: {
//       tutor: "Alex Petrov",
//       mentor: "Volodimir Petrov",
//     },
//   },
// };

// const values = ["firstName", "lastName", "age"];

// for (const value of values) {
//   console.log(user[value]); //user["firstName"]
// }

// const str = "Lorem ipsum dolor sit amet.";

// for (let i = 0; i < str.length; i += 1) {
//   console.log(str[i]);
// }

// ==============
// console.log(user);
// user.lastName = "Petrov";
// user.education.math.mentor = "Nikita Petrov";
// console.log(user);

// console.group(`${user.firstName}'s properties`);
// console.log(`FirstName:`, user.firstName);
// console.log(`LastName:`, user.lastName);
// console.groupEnd();

// ================

// const name = "Alex";
// // user.name = name;

// const user = {
//   name: name,
// };
// console.log(user);
// ======================
// const getName = function () {
//   console.log(this.name);
// };

// const person = {
//   name: "Alex",
//   getName,
// };

// person.getName();

// const user = person;
// user.getName();

// const arr = [1, 2, 3, 4, 5];

// arr.push(6);
// console.log(Math.random())

// =======================
// const user = {
//   firstName: "Oleg",
//   lastName: "Ivanov",
//   age: 20,
//   status: "student",
//   books: ["1", "2", "3"],
//   isMarried: false,
//   education: {
//     math: {
//       tutor: "Alex Petrov",
//       mentor: "Volodimir Petrov",
//     },
//   },
// };

// const getKey = (object) => {
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       console.log(key);
//       if (object[key].constructor.name === "Object") {
//         getKey(object[key]);
//       }
//     }
//   }
// };

// getKey(user);
// =========================

// for (const key in user) {
//   console.log(key);
//   if (typeof user[key] === "object") {
//     for (const item in user[key]) {
//       console.log("item:", item);
//     }
//   }
// }

// const str = "Lorem, ipsum dolor."

// const str = new String("Lorem, ipsum dolor.");
// console.dir(str);

// const newObject = new Obje

// =======================

// const user = {
//   name: "Alex",
//   age: 20,
//   status: "student",
// };

// console.log("firstName" in user);

// ====================
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// console.log(dog);

// for (const key in dog) {
//   console.log(key);
// }

// console.log(dog.hasOwnProperty("legs")); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// ===========================

// const user = {
//   firstName: "Oleg",
//   lastName: "Ivanov",
//   age: 20,
//   status: "student",
//   books: ["1", "2", "3"],
//   isMarried: false,
//   education: {
//     math: {
//       tutor: "Alex Petrov",
//       mentor: "Volodimir Petrov",
//     },
//   },
// };

// const keys = Object.keys(user);
// console.log(keys);

// for (const key of keys) {
//   console.log(user[key]);
// }

// const values = Object.values(user);
// console.log(values);

// const entries = Object.entries(user);
// console.log(entries);

// const map = new Map();
// console.log(map);
// map.name = "Alex";
// console.log(map);

// ============================
// const users = [
//   { name: "Alex", age: 20 },
//   { name: "Nikita", age: 20 },
//   { name: "Vova", age: 20 },
// ];

// const newUsers = [];

// for (const user of users) {
//   const item = {};
//   const keys = Object.keys(user);
//   // ["name", "age"];
//   for (const key of keys) {
//     item[key] = user[key];
//   }
//   //{name: "Alex", age: 20}
//   item.isOnline = false;
//   //{name: "Alex", age: 20, isOnline: false}
//   newUsers.push(item);
// }

// console.log(newUsers);

// users[0].name = "Bob";
// console.log(users);
// console.log(newUsers);

// const data = users.map((item) => ({ ...item, isOnline: false }));
// console.log("data:", data);
// console.log(users);

// =================
// const users = [{ name: "Alex" }, { name: "Nikita" }, { name: "Vova" }];
// const newUsers = [...users];

// console.log(newUsers);
// users[0].name = "Bob";
// console.log(users);
// console.log(newUsers);

// ====================

const english = {
  title: "english",
  navItems: {
    home: "home",
    about: "about",
    contacts: "contacts",
  },
};

const ukrainian = {
  title: "ukrainian",
  navItems: {
    home: "головна",
    about: "про нас",
    contacts: "контакти",
  },
};

const russian = {
  title: "russian",
  navItems: {
    home: "главная",
    about: "про нас",
    contacts: "контакты",
  },
};

const languages = {
  english,
  ukrainian,
  russian,
};

const currentLanguage = "ukrainian";
// localStorage.setItem("language", JSON.stringify(currentLanguage));

const links = [
  { name: languages[currentLanguage].navItems["home"], path: "/" },
  { name: languages[currentLanguage].navItems["about"], path: "/about" },
  { name: languages[currentLanguage].navItems["contacts"], path: "/contacts" },
];
console.log(links);

const markup = links.reduce((acc, item) => {
  acc += `<li><a href=${item.path}>${item.name.toUpperCase()}</a></li>`;
  return acc;
}, "");

console.log(markup);

document.querySelector(".navList").innerHTML = markup;
