/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const uniqueValues = new Set(nums);
    return !(nums.length == uniqueValues.size);
};

let nums;

nums = [1,2,3,1];
console.log(nums, containsDuplicate(nums));

nums = [1,2,3,4];
console.log(nums, containsDuplicate(nums));

nums = [1,1,1,3,3,4,3,2,4,2];
console.log(nums, containsDuplicate(nums));