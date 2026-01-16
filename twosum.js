var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let k = i + 1; k <= nums.length - 1; k++) {
      if (nums[i] + nums[k] === target) {
        return [i, k];
      }
    }
  }
};

const test = twoSum([3, 2, 4], 6);
console.log(test);
