/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
  x = Math.abs(x - z);
  y = Math.abs(y - z);
  if (x === y) return 0;
  if (x < y) return 1;
  return 2;
};

const test = findClosest(5, 2, 3);
console.log(test);
