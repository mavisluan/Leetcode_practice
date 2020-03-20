// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array),
// some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.

// Solution1 Hash Table
// Time: O(n)   Space: O(n)
const findDuplicates = (nums) => {
    const map = {};
    let result = [];
    for (let num of nums) {
        map[num] = map[num] + 1 || 1;

        if (map[num] > 1) {
            result.push(num);
        }
    }
    return result;
};

// ******* Solution 2 Mark visited with -
// Time: O(n)   Space: O(1)
// Concept:
// use the num as index to visit element nums[index - 1]
// nums[index - 1] > 0 (means first time visit)--> set num to negative
// num[index - 1] < 0 (means it's been visited) --> push to dup
// Notes: check with index - 1, because the largest number could be out of index bound
const findDuplicates2 = (nums) => {
    if (nums.length === 0) return [];
    let index, dup = [];
    for (let num of nums) {
        index = Math.abs(num);
        if (nums[index - 1] < 0) {
            dup.push(index);
        } else {
            nums[index - 1] *= -1;
        }
    }
    return dup;
};

// Solution 3 Not modify the original array
// Time: O(nlogn)  Space: O(1) | O(n)
const findDuplicate3 = (nums) => {
    //make a copy of the array
    const copy = [...nums].sort((a, b) => a - b);  // O(nlgn)
    // console.log('nums', nums);
    // console.log('copy', copy);
    for (let i = 1; i < copy.length; i++) {
        if (copy[i] === copy[i - 1]) return copy[i];
    }

    return -1;
};

console.log('findDup3', findDuplicate3([1,6,3,2,5,3]));
