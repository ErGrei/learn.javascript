const obj = {
  name: "John",
  age: {
    value: 237,
    birthday: [
      {
        a: 1,
        d: 3,
      },
      1,
      1765,
    ],
  },
  sayHello() {
    console.log("hello");
  },
};

function cloneObjFoo(obj) {
  const clone = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      clone[key] = cloneObjFoo(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
}

// function cloneObjFoo2(obj) {
//   const clone = {};
//   for (let key in obj) {
//       if (typeof obj[key] === "object") {
//           clone[key] = cloneObjFoo2(obj[key]);
//           continue
//       } else {
//           clone[key] = obj[key];
//       }
//   }
//   return clone
// }

const clone = cloneObjFoo(obj);
clone.age.birthday[1] = 2;
clone.name = "Pete";
clone.sayHello = function () {
  console.log("hi");
}

console.log(clone);
console.log(obj);
console.log(clone.sayHello());
console.log(obj.sayHello());