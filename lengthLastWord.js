/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s.trim;
  let arr = s.trim().split(/\s+/);
  return arr[arr.length - 1].length;
};

const test = lengthOfLastWord("   fly me   to   the moon  ");
console.log(test);
