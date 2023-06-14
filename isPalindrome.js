/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const str = s.replace(/[^A-Za-z0-9]/g,"").toLowerCase().split("");
  const middleIndex = str.length % 2 === 0 ? str.length/2 : (str.length - 1)/2;

  for (let i = 0; i < middleIndex ; i++) {
      if (str[i] !== str[str.length-1-i]) {
          return false;
      }
  }
  return true;
};

let s;

s = "A man, a plan, a canal: Panama";
console.log(s);
console.log("isPalindrome:", isPalindrome(s));

s = "race a car";
console.log(s);
console.log("isPalindrome:", isPalindrome(s));

s = " ";
console.log(s);
console.log("isPalindrome:", isPalindrome(s));


