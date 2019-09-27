/* 560. Subarray Sum Equals K
Given an array of integers and an integer k, you need to find the total number of continuous
subarrays whose sum equals to k.
Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
    The length of the array is in range [1, 20,000].
    The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/

// Solution1 Cummulative sum
// (i: from  0 to n-1;   j: from j to n - 1)
//index:        0  1  2          0  1  2             0  1  2
//             [1, 1, 1]        [1, 1, 1]           [1, 1, 1]
//              i                   i                      i
//              j ---->             j -->                  j
//prefixSum  0  1  2  3          0  1  2                0  1
//                 ^                   ^
// count     0 --> 1              ---> 2
// Time: O(n^2)   Space: O(1)
const subarraySum1 = (nums, k) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let prefixSum = 0;
        for (let j = i; j < nums.length; j++) {
            prefixSum += nums[j];  // prefixSum is cummulative sum from nums[i] to nums[j]
            if (prefixSum === k) count ++;
        }
    }

    return count;
};


// Solution2 Hashmap -- Utilizing the prefixSum array of the original input
// Keep track of prefixSums, for each currSum, count how many prefixSums = currSum - k
// Time: O(n) Space: O(n)
// map{ key: value}
//       |     |
//      sum   times of the sum appears

// nums           [  3,   4,     7,     2,     -3,     1,    4,    2  ],   k = 7
// sum       0       3    7     14      16     13     14*   18    20
// sum-k            -4    0      7      9       6      7    11    13
// map  { 0: 1,    3:1,   7: 1, 14:1+1, 16: 1, 13: 1,  -   18:1,  20: 1}
//        ^               ^^     *              ^
// if (map[sum-k]) count += map[sum-k]
// count     0          +map[0] +map[7]              +map[7]     +map[13]

const subarraySum2 = (nums, k) => {
    let [count, sum] = [0, 0];
    const map = {0: 1};

    for (let num of nums) {
        sum += num;

        if (map[sum - k]) {
            count += map[sum - k]
        }
        map[sum] = map[sum] + 1 || 1;
    }
    return count;
};


// console.log('subarraySum', subarraySum1([1,1,1], 2));
console.log('subarraySum', subarraySum2([3,4,7,2,-3,1,4,2], 7));

