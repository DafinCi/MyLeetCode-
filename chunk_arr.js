var chunk = function (arr, size) {
  hasil = [];

  for (let i = 0; i < arr.length; i += size) {
    hasil.push(arr.slice(i, i + size));
  }
  return hasil;
};

const tes = chunk([], 6);
console.log(tes);
