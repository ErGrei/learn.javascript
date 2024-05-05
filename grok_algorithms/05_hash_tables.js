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
      const item = (this.store[this.hash(key)] || []).find((item) => item.key === key);
      return item && item.value;
    }
  }
  
  function HashTableFunc() {
    this.store = new Array(10);

    this.hash = function(key) {
        let sum = 0;
        
        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }
        
        return sum % this.store.length;
    };

    this.set = function(key, value) {
        const index = this.hash(key);
        
        if (!this.store[index]) {
            this.store[index] = [];
        }
        
        this.store[index].push([key, value]);
    };

    this.get = function(key) {
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

    this.remove = function(key) {
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
// function isValid(s) {
//   const brackets = {
//     ")": "(",
//     "]": "[",
//     "}": "{"
//   };

//   const st = [];
//   for (let i = 0; i < s.length; i++) {
//     if (isClosedBracket(s[i])) {
//       if (brackets[s[i]] !== st.pop()) return false;
//     } else {
//       st.push(s[i]);
//     }
//   }
//   return st.length === 0;
// }

// function isClosedBracket(ch) {
//   return [")", "]", "}"].indexOf(ch) > -1;
// }

// console.log(isValid("()"));// true
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("([)]")); // false
// console.log(isValid("{[]}")); // true
// console.log(isValid("")); // true