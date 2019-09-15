// Solution1
// Time: O(n^2)
const threeSum = function (arr) {
    if (!arr || arr.length < 3) return [arr];
    if (arr.length === 3) {
        const sum = arr.reduce((sum, i) => sum + i, 0);
        if (sum === 0) return [arr];
        else return [];
    }
    arr.sort((a, b) => a - b);  // O(nlogn)
    const result = [];
    const n = arr.length;
    let prevBase = null;
    let base = null;
    for (let i = 0; i < n - 2; i++) {  // for && while O(n**2)
        // check if duplicate value
        if (prevBase === arr[i]) continue;
        else base = arr[i];

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            if (arr[left] + arr[right] === 0 - base) {
                result.push([base, arr[left], arr[right]]);
                left = moveLeft(arr, left + 1);
                right = moveRight(arr, right - 1);
            } else if (arr[left] + arr[right] > 0 - base) {
                right = moveRight(arr, right - 1);
            } else {
                left = moveLeft(arr, left + 1);
            }
        }

        prevBase = base;
    }
    return result;
};
const moveLeft = (arr, left) => {
    while (arr[left] === arr[left - 1]) {
        left++;
    }
    return left;
};

const moveRight = (arr, right) => {
    while (arr[right] === arr[right + 1]) {
        right--;
    }
    return right;
};


const nums = [-1, 0, 1, 2, -1, -4];

console.log('threeSum', threeSum(nums));

