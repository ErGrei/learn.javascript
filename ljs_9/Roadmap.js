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



Function.prototype.castomCall = function (context, ...args) {
  const func = this;
  const contextObj = Object.create(context);
  const funcName = func.name || "";
  contextObj[funcName] = func;
  const result = func(...args);
  delete contextObj[funcName];
  return result;
};



const obj = {
  name: "John",
  sayHello: function (a, b, c) {
    console.log(`Hello, ${this.name}! ${a, b, c}`);
  },
};
function foo(a, b, c) {
  console.log(this.name, c);
}

foo.castomBind(obj, 1)(2, 3);

obj.sayHello.castomCall(obj, 1, 2, 3);