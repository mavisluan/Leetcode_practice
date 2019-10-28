// Given an array of size n, find the majority element.
// The majority element is the element that appears MORE THAN ⌊ n/2 ⌋ times.

// Solution 1  Hash Table
// Time: O(n)  Space: O(n)
const majorityElement = (nums) => {
    const map = {};

    for (let num of nums) {
        map[num] = map[num] + 1 || 1;

        if (map[num] > nums.length / 2) {
            return num;
        }
    }
};
// console.log('majorityElement', majorityElement([3,2,3]));

// Solution2  Sorting
// V8: if (arr.length <= 10):    Time: O(n**2)  Space: O(1)
// V8: if (arr.length > 10):     TIme: O(n*log(n)) Space O(log(n))
// array.sort() time complexity depends on browser
const majorityElement2 = (nums) => {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};

// console.log('majorityElement2', majorityElement2([3,2,3]));

// ******* Solution3 boyer-moore Voting Algorithms
// Time: O(n)   Space: O(1)
// Concept: set the candidate only if (vote === 0)
// if num is candidate, vote up. Else, vote down
// when vote is zero, the new num beats the candidate
// set the new num to be candidate
//http://www.cs.utexas.edu/~moore/best-ideas/mjrty/example.html
const majorityElement3 = (nums) => {
    let vote = 0;
    let candidate = null;

    for (let num of nums) {
        if (vote === 0) {
            candidate = num;
        }

        (num === candidate) ? vote++ : vote--;
    }
    return candidate;
};
console.log('majorityElement3', majorityElement3([2,2,1,3,4,2,2]));
