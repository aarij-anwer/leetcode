/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const answer = [];
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const secondElement = target - nums[i];

    if (map.has(secondElement)) {
      //we found our pair
      answer.push(map.get(secondElement));
      answer.push(i);
      return answer;
    } else {
      map.set(nums[i], i);
    }
  }

  return answer;
  
};

let nums; let target;

nums = [2,7,11,15]; target = 9;
console.log(nums, target, twoSum(nums,target));
