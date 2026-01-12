const filter = function (arr, fn) {
  let hasil = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let operasi = fn(arr[i], i);
    if (Boolean(operasi)) {
      hasil.push(arr[i]);
    } else {
    }
  }
  return hasil;
};
