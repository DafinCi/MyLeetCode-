var isPalindrome = function (x) {
  let rev = 0;
  let temp = x;
  while (x > 0) {
    let dig = x % 10;
    rev = rev * 10 + dig;
    x = Math.floor(x / 10);
  }
  if (temp === rev) {
    return true;
  }
  return false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(120));
console.log(isPalindrome(12321));
