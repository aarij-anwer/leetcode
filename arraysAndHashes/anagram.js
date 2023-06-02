/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) =>  {
  const sortedS = s.split("").sort();
  const sortedT = t.split("").sort();

  let answer = true;
  if (sortedS.length === sortedT.length) {
      for (let i = 0; i < sortedS.length; i++) {
          if (sortedS[i] !== sortedT[i]){
              return false;
          }
      }
  } else {
      answer = false;
  }
  return answer;
};

let s;
let t;

s = "anagram";
t = "nagaram";
console.log(s, t, isAnagram(s,t));

s = "rat"; 
t = "car";
console.log(s, t, isAnagram(s,t));