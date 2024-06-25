Function.prototype.castomBind = function (context, ...args) {
  const fn = this;
  const id = Symbol("id");
  context[id] = fn;
  return function (...args2) {
     const result = context[id](...args, ...args2);
     delete context[id];
     return result;
  };
};


const obj = {
  name: "John",
}
function foo(a,b,c) {
  console.log(this.name, a, b, c);
}

foo.castomBind(obj, 1)(2, 3);
