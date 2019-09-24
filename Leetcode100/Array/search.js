/* Problem: 33 search in rotated sorted array
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
************Your algorithm's runtime complexity must be in the order of O(log n). *************
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
 */

// Solution1  Binary Search
// 1. Split nums into half by mid  --> Check if nums[mid] === target
// 2. When there are more than two nums in range,
//          --> check mid on the left side or right side --> compare values --> move pointers
// 3. When only two nums in range, check if nums[start] or nums[end] === target
//          --> return result
// [4,5,6,7,0,1,2]
//  |     |     |
// start  mid   end
// Time: O(log(N))    Space: O(1)
const search = (nums, target) => {
    if (!nums || nums.length === 0) return -1;
    let [start, end] = [0, nums.length - 1];

    while (start + 1 < end) {   // start + 1 === end -> only two nums left
        let mid = start + Math.floor((end - start) / 2);

        if (target === nums[mid]) return mid;
        if (nums[mid] > nums[start]) {  // mid is on the left side
            if (target >= nums[start] && target <= nums[mid]) end = mid;
            else start = mid;
        }
        if (nums[mid] < nums[end]) {  // mid is on the right side
            if (target >= nums[mid] && target <= nums[end]) start = mid;
            else end = mid;
        }
    }

    if (nums[start] === target) return start;
    if (nums[end] === target) return end;

    return -1;
};

console.log(`search:`, search([4,5,6,7,0,1,2], 0));
