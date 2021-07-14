/**
 * 121. Best Time to Buy and Sell Stock -Easy

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

 */
/**
 * @param {number[]} prices
 * @return {number}
 */
/*
Input: prices = [7,1,5,3,6,4]
Output: 5

Key factors:
0. Edge case: if no profit, return 0

1. The buy day must be before the sell day
 [  7,  1,  5,  3,  6,  4]
        ^           ^
2. lowest price & highest price (lowest price happens before highest price)

 [  7,  1,  5,  3,  6,  4]
                    ^
iterate from index 1 to the end
low: 7 -> 1 -> 1 -> 1 -> 1   (if current num < low -> low =num  high = num)
high: 7 -> 1 -> 5 -> 5 -> 6  (if current num > high -> high = num)
diff: 0 -> 0 -> 4 -> 4 -> 5
maxDiff: 0   -> 4 -> 4 -> 5 (maxDiff = Math.max(diff, maxDiff))

Edge: if (maxDiff < 0) return 0

Time: O(N) Space: O(1)
*/

const maxProfit = function (prices) { // prices:  [  7,  1,  5,  3,  6,  4]
  let [low, high] = [prices[0], prices[0]];
  let [diff, maxDiff] = [0, 0];
  // low: 7 -> 1 -> 1 -> 1 -> 1 -> 1
  // high: 7 -> 1 -> 5 -> 1 -> 6 -> 6
  // diff: 0 -> 0 -> 4 -> 4 -> 5 -> 5
  // maxDiff: 0 -> 0 -> 4 -> 4 -> 5 -> 5
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]; // price: 1-> 5 ->3 -> 6 -> 4
    if (price < low) {
      low = price;
      high = price;
    }
    if (price > high) {
      high = price;
    }

    diff = high - low;
    maxDiff = Math.max(diff, maxDiff);
  }

  if (maxDiff < 0) return 0;
  return maxDiff;
};
