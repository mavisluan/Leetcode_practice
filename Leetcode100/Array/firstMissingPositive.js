/*
Given an unsorted integer array, find the smallest missing positive integer.
Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
 */

// Time: O(n) Space: O(1)
const firstMissingPositive = (nums) => {
    if (nums === null || nums.length === 0 ) return 1;
    // Mark all the negs and 0s to be Max num
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) {
            nums[i] = Number.MAX_SAFE_INTEGER
        }
    }

    // Use each num as index and mark nums[num - 1] to be negative
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);   // num must be positive --> used as index
        if (num <= nums.length) {      // if num > nums.length, the num doesn't influence result
            nums[num - 1] = - Math.abs(nums[num -1]);
        }
    }

    // Get the first positive num's index + 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return arr.length + 1;    // [1,2,3,4] --> return 5
}
