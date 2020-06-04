/*
39. Combination Sum -- Medium
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target),
find all unique combinations in candidates where the candidate numbers sums to target.
The same repeated number may be chosen from candidates unlimited number of times.
Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 */

// backtrack  (quick exit)
const combinationSum1 = function (candidates, target) {
    let result = [];
    let list = candidates.sort((a, b) => a - b);

    const backtrack = (arr, i, target) => {
        console.log(`arr: ${arr}, i: ${i}, target:${target}`);

        if (target === 0) {
            result.push(arr);

        } else {
            // iterate through all numbers in candidates
            for (let j = i; j < list.length; j++) {

                // if adding element will exceed target, don't bother checking numbers to the right
                if (target - list[j] < 0) break;

                // go down path where current element is added
                arr.push(list[j]);
                backtrack([...arr], j, target - list[j]);

                // backtrack
                arr.pop();
            }
        }
    };

    backtrack([], 0, target);
    return result;
};

// console.log('combinationSum1', combinationSum1([2,3,6,7], 7));


// ***** backtrack
function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];
    const subSum = [];
    helper(0, target);

    return result;

    function helper(start, remain) {
        console.log(`subSum:${subSum}, remain: ${remain}, start:${start}`);
        const curVal = candidates[start];
        if (remain === curVal) {
            return result.push([...subSum, curVal]);
        }
        if (remain < curVal || start === candidates.length) return;

        subSum.push(curVal);
        helper(start, remain - curVal);
        subSum.pop();
        helper(start + 1, remain);
    }
}

console.log('combinationSum2', combinationSum2([2,3,6,7], 7));
// console.log('combinationSum2', combinationSum2([8, 7, 4, 3], 11));
