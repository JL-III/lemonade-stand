// const add = (a, b, c) => a + b + c;

// const curriedAdd = a => b => c => a + b + c

const add = (a, b) => a + b;

const curry =
  (f, arr = []) =>
  (...args) =>
    ((a) => (a.length >= f.length ? f(...a) : curry(f, a)))([...arr, ...args]);

curriedAdd = curry(add);

console.log(curriedAdd(1)(2));
console.log(curriedAdd(1, 2));
