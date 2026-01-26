/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  for (let a = 1; a < n; a++) {
    let b = n - a;
    if (!a.toString().includes("0") && !b.toString().includes("0")) {
      return [a, b];
    }
  }
};

const test = getNoZeroIntegers(1010);
const test2 = getNoZeroIntegers(2);

console.log(test);
console.log(test2);
