// Solution 1: Hash Set
// Time: O(n)
const findDisapppearedNums = (nums) => {
    const set = new Set(nums);
    let result = [];
    for (let i = 1; i <= nums.length; i++) {  // O(n)
        if (!set.has(i)) { //O(1)
            result.push(i)
        }
    }
    return result;
};

// Solution 2: Index Visit
// Time: O(n + n) --> O(n)  Space: O(1)
const findDisappearedNums2 = (nums ) => {
    let index, res = [];

    for (let num of nums) {
        index = Math.abs(num);
        if (nums[index - 1] > 0 ){
            nums[index-1] *= -1;
        }
    }

    nums.forEach((num, i) => {
        (num > 0) && res.push(i + 1)
    });

    return res
};
