var isPalindrome = function (x) {
  let rev = 0;
  let temp = x;
  while (x > 0) {
    let dig = x % 10;
    console.log(`ini dig: ${dig}`);
    rev = rev * 10 + dig;
    console.log(`ini rev: ${rev}`);
    x = Math.floor(x / 10);
    console.log(`ini x: ${x}`);
  }
  if (temp === rev) {
    return true;
  }
  return false;
};
isPalindrome(121);
