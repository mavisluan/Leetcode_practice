//581. Shortest Unsorted Continuous Subarray
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.


// Solution1: Using Sorting (with two pointers)
// array.sort() in V8 use quicksort by default. Time: O(n logn)
// Time: O(n logn)    Space: O(n) --> make a copy of the original array
const findUnsortedSubarray1 = function (nums) {
    let sNums = [...nums];
    sNums.sort((a, b) => a - b);

    let [left, right] = [0, nums.length];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sNums[i]) {
            right = Math.min(right, i);
            left = Math.max(left, i);
        }
    }

    return (left - right >= 0 ? left - right + 1 : 0);
};

// console.log('findUnsortedSubarray', findUnsortedSubarray1([2, 6, 4, 8, 10, 9, 15]));


// Solution 2 Sorting with on stack
// Time: O(n logn)    Space: O(n) --> make a copy of the original array
const findUnsortedSubarray2 = function (nums) {
    let sNums = [...nums];
    sNums.sort((a, b) => a - b);
    const diffIndices = [];

    for (let i = 0; i < nums.length; i++) {
        (nums[i] !== sNums[i]) && diffIndices.push(i);
    }

    if (diffIndices.length === 0) return 0;
    return diffIndices[diffIndices.length - 1] - diffIndices[0] + 1;
};
// console.log('findUnsortedSubarray2', findUnsortedSubarray2([2, 6, 4, 8, 10, 9, 15]));


// Solution 3 Without Using Extra Space
// Time: O(n) || O(4n) Space: O(1)
// 1st loop: find min num not ascending ( 0 ---> n -1)
// 2nd loop: find max num not ascending ( n-2 ---> 0)
// 3rd loop: find the index of min ascending num (0 --> n - 1)
// 4th loop: find the index of max ascending num ( n-1 ---> 0)
const findUnsortedSubarray3 = (nums) => {
    let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {             //checks if a number isn't ascending
            min = Math.min(min, nums[i]);
        }
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] > nums[i + 1]) {              //checks if a number isn't ascending
            max = Math.max(max, nums[i]);
        }
    }

    let l, r;
    for (l = 0; l < nums.length; l++) {
        if (min < nums[l]) {
            break;
        }
    }

    for (r = nums.length - 1; r >= 0; r--) {
        if (max > nums[r]) {
            break;
        }
    }
    return r - 1 < 0 ? 0 : r - l + 1;
};

console.log('findUnsortedSubarray3', findUnsortedSubarray3([2, 6, 4, 8, 10, 9, 15]));
