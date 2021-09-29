// spread

const group = {
  courses: {
    html_css: {
      isActive: false,
    },
    javaScript: {
      isActive: false,
    },
    react: {
      isActive: false,
    },
  },
  prop: "fghj",
};

const deepCopy = (object) => {
  const newObject = {};
  // =============
  const getProps = (object, dist) => {
    const keys = Object.keys(object);
    for (const key of keys) {
      if (object[key].constructor.name === "Object") {
        dist[key] = getProps(object[key], dist[key]);
      } else object[key] = dist[key];
    }
    return newObject;
  };
  // ===============
  getProps(object, newObject);
  console.log(newObject);
};
deepCopy(group);

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
