const map1 = function (arr, fn) {
  let hasil = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let operasi = fn(arr[i], i);
    hasil.push(operasi);
  }
  return hasil;
};

const newArray = map1(
  [10, 20, 30],
  (fn = function plusone() {
    return 42;
  })
);

console.log(newArray);
