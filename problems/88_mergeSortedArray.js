/*
88. Merge Sorted Array  -- Easy
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

// Solution 1 Two pointers (start for beginning)
/**
 Make a copy of nums1
 Use two pointers
    -> compare copy's and nums2's values
    -> Assign the smaller value to nums1
    -> If there are elements left in copy or nums2
        -> Take the nums1's piece with assigned numbers + the left elements
 */

// Time: O(M+N)  - Iterate through each el in nums1 and nums2
// Space: O(M) - The copy of nums1
const mergeFromStart = (nums1, m, nums2, n) => {
  const copy = [...nums1];
  let [x, i, j] = [0, 0, 0];

  while (i < m && j < n) {
    if (copy[i] < nums2[j]) {
      nums1[x] = copy[i];
      i++;
    } else {
      nums1[x] = nums2[j];
      j++;
    }
    x++;
  }

  // array.splice(index, howmany, item1, ....., itemX)
  if (i < m) nums1.splice(x, m + n - x, ...copy.slice(i, m));
  if (j < n) nums1.splice(x, m + n - x, ...nums2.slice(j));

  return nums1;
};

// Solution 2
// Start to overwrite nums1 from the end. Then no additional space is needed.
// Time: O(M+N)  Space: O(1)
const mergeFromEnd = (nums1, m, nums2, n) => {
  let [x, p1, p2] = [m + n - 1, m - 1, n - 1];
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[x] = nums1[p1];
      p1--;
    } else {
      nums1[x] = nums2[p2];
      p2--;
    }
    x--;
  }

  if (p1 < 0) nums1.splice(0, x + 1, ...nums2.splice(0, p2 + 1));

  return nums1;
};
