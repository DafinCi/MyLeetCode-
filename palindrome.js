var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else {
    if (x.length > 1) {
      let tes = x / 2;
      if (!Number.isInteger(tes)) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
};

const tes = isPalindrome(7);
console.log(tes);
