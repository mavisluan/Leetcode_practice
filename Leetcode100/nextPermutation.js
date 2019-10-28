/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
The replacement must be in-place and use only constant extra memory.
                        ********
Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

// Solution:
// look for the first descending num: from the 2nd last of el to the start
// look for the nearest larger num of the descending num: from descending num index + 1 to the end
// swap the first descending num with the nearest larger num
// reverse the arr from the first descending num idx + 1 to the end
const arr = [1, 2, 6, 4, 2];

const nextPermutation = function (nums) {
    let replace = nums.length - 2;
    while (replace >= 0) {  // look for the first descending num index
        if (nums[replace] < nums[replace + 1]) break;
        replace--;
    }

    if (replace < 0) {    // if no descending num, already the biggest --> reverse
        nums.sort((a, b) => a - b);
        return;
    }

    let lgrIdx = replace + 1;   // look for the nearest larger num
    while (lgrIdx < nums.length && nums[lgrIdx] > nums[replace]) {
        lgrIdx++;
    }

    [nums[lgrIdx - 1], nums[replace]] = [nums[replace], nums[lgrIdx - 1]]; // swap

    let start = replace + 1, end = nums.length - 1;  // reverse from descending num index + 1 to the end
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};


nextPermutation(arr);
console.log('nextPermutation', arr);
