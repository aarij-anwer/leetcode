/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const numMap = new Map();

  nums.forEach((element) => {
      if (numMap.has(element)) {
          let count = numMap.get(element);
          count++;
          numMap.set(element, count);
      } else {
          numMap.set(element, 1);
      }
  });

  const sortedNumMap = [...numMap].sort((a, b) => {
      if (a[1] < b[1]) {
          return 1;
      } else {
          return -1;
      }
  });

  const answer = [];
  for (let i = 0; i < k; i++) {
      answer.push(sortedNumMap[i][0]);
  }

  return answer;
};

let nums; let k;

nums = [1,1,1,2,2,3]; k = 2;
console.log(nums, k, topKFrequent(nums, k));