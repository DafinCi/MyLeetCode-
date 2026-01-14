const once = function (fn) {
  let calls = false;
  return function (...args) {
    if (calls === false) {
      calls = true;
      return fn(...args);
    }
    return undefined;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
