//581. Shortest Unsorted Continuous Subarray
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.


// Solution1: Using Sorting
// array.sort() in V8 use quicksort by default. Time: O(n logn)
// Time: O(n logn)    Space: O(n) --> make a copy of the original array
const findUnsortedSubarray = function (nums) {
    let nums2 = [ ...nums];
    nums.sort((a,b) => a - b);

    let [left, right] = [0, nums.length];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums2[i]) {
            right = Math.min(right, i);
            left = Math.max(left, i)
        }
    }

    return (left - right >= 0 ? left - right + 1 : 0);
};

console.log('findUnsortedSubarray', findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
