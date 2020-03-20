/*
Given an array of integers nums sorted in ascending order,
find the starting and ending position of a given target value.
Your algorithm's runtime complexity must be in the order of O(log n).
                                                            ********
If the target is not found in the array, return [-1, -1].
Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
 */


// Time: O(log(n))   Space: O(1)
const searchRange = (nums, target) => {
    let [left, right] = [0, nums.length - 1];

    while (left <= right) {       // left === right searchRange([1], 1)
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            return [findLeft(nums, 0, mid, target), findRight(nums, mid, nums.length - 1, target)];
        }
    }

    return [-1,-1];   // not found
};


const findLeft = (nums, left, right, target) => {
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid - 1] < target) { // if nums[mid] === target, check nums[mid - 1]
            return mid;   // mid is the left border
        } else {   // if nums[mid] === target && nums[mid - 1] === target
            right = mid -1;
        }
    }
    return left;
}

const findRight = (nums, left, right, target) => {
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid + 1] > target) { // if nums[mid] === target, check nums[mid + 1]
            return mid; // mid is the right border
        } else {
            left = mid + 1;
        }
    }
    return right;
};

// console.log('searchRange', searchRange([5,7,7,8,8,10], 8))
// console.log('searchRange', searchRange([5,7,7,8,8,10], 6))
// console.log('searchRange', searchRange([2, 2], 2))
console.log('searchRange', searchRange([1], 1))
