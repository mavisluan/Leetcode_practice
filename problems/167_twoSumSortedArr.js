/*
167. Two Sum II - Input array is sorted ***********
Easy
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// Solution 1 HashTable - One Pass: Time: O(N) Space: O(N)
const twoSum = function(numbers, target) {
    const dict = {};
    for (let i = 0 ; i < numbers.length; i++) {
        const num = numbers[i]
        const diff = target - num;
        if (diff in dict) return [dict[diff] + 1, i + 1]
        dict[num] = i;
    }
};

// Solution 2 Two pointers  *******
// Time: O(N) Space: O(1)
const twoSumTwoPointers = (nums, target) =>  {
    let [left, right] = [0, nums.length - 1]
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) return [left + 1, right + 1]
        if (sum < target) left ++;
        else right --;
    }
    return [];
}
