/**
  * 74. Search a 2D Matrix
Medium

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
Matrix: the upper row's last num is smaller to the first num in the next row
matrix = [
      [1,   3,  5,  7],  
     [10, 11, 16, 20],
    [23, 30, 34, 50]
]   
target = 13
Output: false
  */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/**
 * Video reference: https://www.youtube.com/watch?time_continue=63&v=FOa55B9Ikfg&feature=emb_logo
 * Solution 1: Binary search
 * Treat 2d (M * N) matrix as a sorted array of length M * N
 * row = idx // n and col = idx % n.
 * @param M - # of rows  
 * @param N - # of cols
    Time: O(log(M*N)) Space: O(1)
 */

const searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;

    const [m, n] = [matrix.length, matrix[0].length];

    let [start, end] = [0, m * n - 1];
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const r = Math.floor(mid / n);
        const c = mid % n;

        if (matrix[r][c] === target) return true;
        if (matrix[r][c] < target) start = mid + 1;
        else end = mid - 1;
    }

    return false;
};
