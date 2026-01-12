const createCounter = function (init) {
  let nilai = init;
  return {
    increment: () => (nilai += 1),
    decrement: () => (nilai -= 1),
    reset: () => (nilai = init),
  };
};
