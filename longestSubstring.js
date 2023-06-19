/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const unique = new Map();
    let count = 0;
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        if (unique.has(s[i])) {
            //repeat
            if (count > max) {
                max = count;
            }
            count = 0;
            i = unique.get(s[i]) + 1;
            unique.clear();
        } 
        unique.set(s[i], i);
        count++;
        // console.log(unique);
        // console.log("max", max);
        // console.log("count", count);
    }

    if (count > max) {
        max = count;
    }
    return max;
};