// Solution1
// Time: O(n^2)
const threeSum = function (arr) {
  // if (arr === null || arr.length < 3) return [arr];
  if (arr.length === 3) {
    const sum = arr.reduce((sum, i) => sum + i, 0);
    if (sum === 0) return [arr];
    return [];
  }
  arr.sort((a, b) => a - b); // O(nlogn)
  const result = [];
  const n = arr.length;
  let base = null;
  for (let i = 0; i < n - 2; i++) { // for && while O(n**2)
    // check if duplicate value
    if (base === arr[i]) continue;
    else base = arr[i];

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === -base) {
        result.push([base, arr[left], arr[right]]);
        left = moveLeft(arr, left + 1);
        right = moveRight(arr, right - 1);
      } else if (sum > 0 - base) {
        right = moveRight(arr, right - 1);
      } else {
        left = moveLeft(arr, left + 1);
      }
    }
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
// Solution 2
const threeSum2 = (nums) => {
  nums.sort((a, b) => a - b);
  const res = [];
  let tempA = nums[0];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === tempA && i !== 0) continue;
    const a = nums[i];

    let [left, right] = [i+1, nums.length - 1];
    let tempB = nums[left];
    let firstFlag = true;
    while (left < right) {
      const [b, c] = [nums[left], nums[right]];

      if (b === tempB && !firstFlag ){
        left++;
        continue
      }
      if(b + c === -a) {
        res.push([a, b, c]);
        left ++;
        tempB = b;
        firstFlag = false;
      } else if (b + c > - a) right --;
      else left ++;
    }
    tempA = a;
  }

  return res;
};
