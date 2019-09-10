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

    if (startIdx >= nums.length) return;

    for (let i = startIdx; i < nums.length; i++) {
        subSets.push(nums[i]);
        toFindSubSets(nums, result, subSets, i + 1);
        subSets.pop();
    }
};

console.log('subSet2', subSets2([1, 2, 3]));


var subsets = function(nums) {
    let res = [];
    let stack = [];
    let n = nums.length;

    function ps(start) {
        let copy = stack.slice();
        res.push(copy);

        if (start >= n) {
            return;
        }

        for (let i = start; i < n; i++) {
            stack.push(nums[i]);
            ps(i+1);
            stack.pop();
        }
    }


    ps(0);

    return res;
};
