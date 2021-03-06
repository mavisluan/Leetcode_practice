// Solution 1
const subSets1 = (nums) => {
    let res = [];

    const helper = (nums, i, arr) => {
        if (i === nums.length) {
            res.push(arr);
            return;
        }

        helper(nums, i + 1, arr);
        helper(nums, i + 1, arr.concat(nums[i]));
    };

    helper(nums, 0, []);
    return res;
};

// console.log('subSets1', subSets1([1,2,3]));

// Solution 2 BackTracking
const subSets2 = (nums) => {
    const result = [];

    if (nums.length === 0) return result;

    const subSets = [];
    toFindSubSets(nums, result, subSets, 0);

    return result;
};


const toFindSubSets = (nums, result, subSets, startIdx) => {
    const copy = [...subSets];
    result.push(copy);
    console.log(`record in result: ${result}, startIdx: ${startIdx}`);

    if (startIdx >= nums.length) return;

    for (let i = startIdx; i < nums.length; i++) {
        // console.log(`preSubsets: ${subSets}, startIdx: ${startIdx}`);
        subSets.push(nums[i]);
        console.log(`call function: i:${i}, result:${result}, subSets:${subSets}`);
        toFindSubSets(nums, result, subSets, i + 1);
        // console.log('before pop', subSets,i);
        subSets.pop();
        // console.log('after pop', subSets,i);
    }
};

// console.log('subSet2', subSets2([1, 2, 3]));


// Time: O(2^n)
// res will store all subsets.
// O(2 ^ (number of elements inside array))
// because in the array nums,
// at every step we have two choices for each element
// either include or ignore the element in our subset.
var subSets3 = function(nums) {
    let res = [];
    let stack = [];
    let n = nums.length;

    function ps(start) {
        console.log(`Top: result:${res}, start:${start}, subSet:${stack}`);

        let copy = stack.slice();
        res.push(copy);

        if (start >= n) {
            return;
        }

        for (let i = start; i < n; i++) {
            // console.log(`Loop:  start:${start}, subSet:${stack}, i:${i}`);

            stack.push(nums[i]);  // include nums[i] in subset
            ps(i+1);
            // console.log(`Pop: start:${start}, subSet:${stack}, i:${i}`);

            stack.pop();  // exclude nums[i] from subset and triggers backtracking
        }
    }


    ps(0);

    return res;
};


// subSets3([1,2,3]);
// Take more space because of call stacks
const subSetsRecursion = arr => {
    const result = [[]];
    const ss = [];

    helper(ss, 0);

    function helper(ss, start) {
        if (start === arr.length) return;
        ss.push(arr[start]);
        result.push([...ss]);

        helper(ss, start + 1);
        ss.pop();
        helper(ss, start + 1);
    }

    return result;
};

console.log('subSetsRecursion', subSetsRecursion([1,2,3]))
