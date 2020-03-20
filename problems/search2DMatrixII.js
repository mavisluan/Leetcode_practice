/**
240. Search a 2D Matrix II
Medium
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.
Given target = 20, return false.
 */

/*
    Solution 1 Binary Search
    Do a binary search to each row
    Time: O(M * logN) # of rows - M   # of cols - N
    Space: O(1)
*/
const binarySearch = (arr, t) => {
    let [start, end] = [0, arr.length - 1];

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === t) return true;
        if (arr[mid] < t) start = mid + 1;
        else end = mid - 1;
    }

    return false;
};

const searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length || !matrix[0].length) return false;
    const [maxRow, maxCol] = [matrix.length, matrix[0].length];
    if (matrix[0][0] > target || matrix[maxRow - 1][maxCol - 1] < target) return false;

    for (let r = 0; r < maxRow; r++) {
        if (matrix[r][0] <= target && matrix[r][maxCol - 1] >= target) {
            if (binarySearch(matrix[r], target)) return true;
        }
    }

    return false;
};

console.log(
    `searchMatrix`,
    searchMatrix(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 50],
        ],
        18
    )
);

/*
Solution 2 Search space reduction
Time: O(h+w) Space: O(1)
[                   
  [1,   4,  7, 11, 15], <
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]  ^

1. Start from leftBottom:  eg. 18  move Up: decrease   move Right: increase
2. Start from rightTop: eg. 15    move Down: increase   move Left: decrease
*/
const searchMatrix2 = (matrix, target) => {
    if (!matrix || !matrix.length || !matrix[0].length) return false;
    const [h, w] = [matrix.length, matrix[0].length];

    let [r, c] = [h - 1, 0];
    while (r >= 0 && c <= w - 1) {
        if (matrix[r][c] === target) return true;
        if (matrix[r][c] < target) c++;
        else r--;
    }

    return false;
};
