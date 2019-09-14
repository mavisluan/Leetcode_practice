// Solution 1
// Time: O(n)
const moveZeroes1 = (nums) => {
    let [counter, i] = [0, 0];
    while (counter < nums.length) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        } else {
            i++;
        }
        counter++;
    }
    return nums;
};

// console.log('moveZeroes1', moveZeroes1([0, 1, 0, 3, 12]));
// console.log('moveZeroes1', moveZeroes1([0, 0, 1]));

// Solution 2
// Time: O(n)   Space: O(1)
// 开一个变量count=0, 把数组中不为零的数，按顺序移动到下标为count的位置上，每移动一个count++，最后补上0
const moveZeroes2 = (nums) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[count] = nums[i];
            count++;
        }
    }

    while (count < nums.length) {
        nums[count] = 0;
        count++;
    }

    return nums;
};

console.log('moveZeroes2', moveZeroes2([0, 1, 0, 3, 12]));
console.log('moveZeroes2', moveZeroes2([0, 0, 1]));
