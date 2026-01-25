const data = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

const romanToInt = function (s) {
  let nilai = 0;
  for (let i = 0; i < s.length; i++) {
    let current = data.get(s[i]);
    let next = data.get(s[i + 1]);
    if (current < next) {
      current = -current;
    }
    nilai = nilai + current;
  }
  return nilai;
};

const test = romanToInt("CDXLIV");
console.log(test);
