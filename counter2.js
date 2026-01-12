const createCounter = function (init) {
  let nilai = init;
  return {
    increment: () => (nilai += 1),
    decrement: () => (nilai -= 1),
    reset: () => (nilai = init),
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.increment()); // 6
console.log(counter.increment()); // 6
console.log(counter.increment()); // 6
console.log(counter.increment()); // 6
console.log(counter.increment()); // 6
console.log(counter.increment()); // 6
console.log(counter.increment()); // 6
console.log(counter.increment()); // 6
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.decrement()); // 5
console.log(counter.increment()); // 6

console.log(counter.reset()); // 5
