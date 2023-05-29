/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const uniqueValues = new Set(nums);
    return !(nums.length == uniqueValues.size);
};