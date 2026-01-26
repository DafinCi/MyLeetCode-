/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1) return 0;

  nums.sort((a, b) => a - b);
  let hasil = Infinity;
  for (let i = 0; i + k - 1 < nums.length; i++) {
    hasil = Math.min(hasil, nums[i + k - 1] - nums[i]);
  }
  return hasil;
};

const test = minimumDifference([9, 4, 1, 7], 2);
console.log(test);
