/**
 * 1. Two Sum -- Easy
 Topic: Array && Hashtable
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */
// Brute force--- Time: O(n^2)   Space: O(1)
const twoSum0 = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};


// Solution 1 Two-pass Hash Table
// Time: O(n) Space: O(n)
const twoSum1 = (nums, target) => {
  const map = {};
  nums.forEach((num, i) => map[num] = i);
  for (let j = 0; j < nums.length; j++) {
    const diff = target - nums[j];

    if (diff in map && map[diff] !== j) {
      return [j, map[diff]];
    }
  }
};
// console.log('twoSum1', twoSum1([2, 7, 11, 15], 9));


// Solution 2 One-pass Hash Table
/*
Thoughts:
(a + b) = target
diff = target - a
diff = b

For each current number a,
1. keep track of its diff and index in a dictionary
2. check if the next num (b) exists in diff dict (check if b === diff)

Initiate
    a dict = { diff: index }
Keep track of
1) "diff" -> iterate to the next num, check if the num exists in dict (diff)
(because num + diff = target)
2) "index" -> when the two nums are found, we want to return the indices

Iterate through the nums array (i)
    find out if the nums[i] exists in the dict
        Yes -> return {dict[diff], i}
        No ->
            calculate the diff (target - num)
            add {diff: index} to dict

Input:
target = 13
        0   1  2  3   4  5
nums =  [2, 7, 5, 9, 11,15]
                      ^
diff    11  6  8  4
dict={11: 0, 6:1, 8:2, 4: 3, }

Output: [0,4]
Time: O(N)
Space: O(N)
*/
// HashTable One-pass  --- Time: O(N)  Space: O(N)
const twoSum2 = function (nums, target) {
  const dict = {};
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (dict[num] !== null && dict[num] !== undefined) {
      return [dict[num], i];
    }
    diff = target - num;
    dict[diff] = i;
  }
};


// const twoSum = (nums, target) => {
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     const val = nums[i];
//     const diff = target - val;
//     if (map[diff] >= 0) return [i, map[diff]];
//     map[val] = i; // One num can not be used twice --> save val at the end
//   }
// };

// console.log('twoSum2', twoSum2([2, 7, 11, 15], 9));
console.log('twoSum2', twoSum2([2, 3, 5, 10], 7));
