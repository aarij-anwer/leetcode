/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueValues = new Set(nums);
    return !(nums.length == uniqueValues.size);
};