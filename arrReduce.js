var reduce = function (nums, fn, init) {
  let nilai = init;
  for (let i = 0; i <= nums.length - 1; i++) {
    nilai = fn(nilai, nums[i]);
  }
  return nilai;
};

console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr * curr;
    },
    0
  )
);
