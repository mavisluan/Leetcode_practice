/**
 * 347. Top K Frequent Elements  -- Medium
Given an integer array nums and an integer k,
return the k most frequent elements.
You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]


Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*
key factors: top k frequent elements
initialize dict
iterate through the array
    count frequency into a dict
    dict = {num: frequency} {1: 3, 2: 2, 3: 1}

extract keys array from dict [1, 2, 3]
sortedByFrequency = sort the keys by its frequency
return sortedByFrequency.slice(0, k)
*/

// Time compexity: O(n) + O(n) + O(nlogn) + O(k) = 2*O(n) + O(k) + O(nlogn) = O(k) + O(nlogn)
// Space: : O(n) + O(n) + O(n) = O(n)
const topKFrequent = function (nums, k) {
  const dict = {}; // {1: 3, 2: 2, 3: 1}
  for (const num of nums) { // Time: O(N) Space: O(N)
    dict[num] = dict[num] + 1 || 1;
  }

  const uniqueNums = Object.keys(dict); // Time: O(N) Space: O(N)
  // Time: O(n log(n)) Space: O(N)
  const sortedByFrequency = uniqueNums.sort((a, b) => dict[b] - dict[a]);
  return sortedByFrequency.slice(0, k); // Time: O(K)
};
