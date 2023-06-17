/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let max = 0;
  let min = 100000;

  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < min) {
          min = prices[i];
      } else if (prices[i] - min > max) {
          max = prices[i] - min;
      }
  }

  return max;
};