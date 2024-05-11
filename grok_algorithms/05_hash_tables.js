class HashTable {
  store = new Array(10);
  hash(key) {
    let sum = 0;

    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum % this.store.length;
  }
  add(key, value) {
    this.store[this.hash(key)] = this.store[this.hash(key)] || [];
    this.store[this.hash(key)].push({ key, value });
  }
  get(key) {
    const item = (this.store[this.hash(key)] || []).find(
      (item) => item.key === key
    );
    return item && item.value;
  }
}
// 10, 10, 10 [10 {вася, петя, настя}]
// 4 4 4
//[0 1 2 3 4 5]
function HashTableFunc() {
  this.store = new Array(10);

  this.hash = function (key) {
    let sum = 0;

    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }

    return sum % this.store.length;
  };

  this.set = function (key, value) {
    const index = this.hash(key);

    if (!this.store[index]) {
      this.store[index] = [];
    }

    this.store[index].push([key, value]);
  };

  this.get = function (key) {
    const index = this.hash(key);

    if (this.store[index]) {
      for (let i = 0; i < this.store[index].length; i++) {
        if (this.store[index][i][0] === key) {
          return this.store[index][i][1];
        }
      }
    }

    return undefined;
  };

  this.remove = function (key) {
    const index = this.hash(key);

    if (this.store[index]) {
      for (let i = 0; i < this.store[index].length; i++) {
        if (this.store[index][i][0] === key) {
          this.store[index].splice(i, 1);
          return;
        }
      }
    }
  };
}

// Задача через стек
function isValid(s) {
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  const st = [];
  for (let i = 0; i < s.length; i++) {
    if ([")", "]", "}"].indexOf(s[i]) > -1) {
      if (brackets[s[i]] !== st.pop()) return false;
    } else {
      st.push(s[i]);
    }
  }
  return st.length === 0;
}

// function isValid(string) {
//   const stack = [];
//   const obj = {
//     ")": "(",
//     "]": "[",
//     "}": "{",
//   };

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "(" || string[i] === "[" || string[i] === "{") {
//       stack.push(string[i]);
//     } else if (string[i] === ")" || string[i] === "]" || string[i] === "}") {
//       if (stack.length === 0){
//         return false;
//       } 
//       if (stack.pop() !== obj[string[i]]){
//        return false
//       }
//     }
//   }

//     return stack.length === 0;


// }

console.log(isValid("(a)")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("")); // true
