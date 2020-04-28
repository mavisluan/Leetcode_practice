// Solution 1 Two-pass Hash Table
// Time: O(n) Space: O(n)
const twoSum1 = (nums, target) => {
  const map = {};
  nums.forEach((num, i) => map[num] = i);
  for (let j = 0; j < nums.length; j++) {
    const diff = target - nums[j];

    if (diff in map && map[diff] !== j) {
      return [j, map[diff]];
    }
  }
};
// console.log('twoSum1', twoSum1([2, 7, 11, 15], 9));


// Solution 2 One-pass Hash Table
// iterate and insert element into the table
// look back to check if current element's diff exists in the table
// Time: O(n) Space: O(n)
const twoSum2 = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in map && map[diff] !== i) {
      return [i, map[diff]];
    }
    map[nums[i]] = i;
  }
};


// HashTable One-pass  --- Time: O(N)  Space: O(N)
const twoSum = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const diff = target - val;
    if (map[diff] >= 0) return [i, map[diff]];
    map[val] = i; // One num can not be used twice --> save val at the end
  }
};

// console.log('twoSum2', twoSum2([2, 7, 11, 15], 9));
console.log('twoSum2', twoSum2([2, 3, 5, 10], 7));
