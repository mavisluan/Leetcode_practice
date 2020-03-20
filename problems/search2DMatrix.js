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
 * Solution Reference: Hongbo-Miao
 * Solution 1: Binary search
 * Treat 2d (M * N) matrix as a sorted array of length M * N
 * row = idx // n and col = idx % n.
 * @param h - # of rows  
 * @param w - # of cols
    Time: O(log(h * w)) Space: O(1)
 */

const searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length || !matrix[0].length) return false;

    const [h, w] = [matrix.length, matrix[0].length];

    let [start, end] = [0, h * w - 1];
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const r = Math.floor(mid / w);
        const c = mid % w;

        if (matrix[r][c] === target) return true;
        if (matrix[r][c] < target) start = mid + 1;
        else end = mid - 1;
    }

    return false;
};

/**
 * Solution 2: locate row first, then column
 * Time: O(log(h) + O(log(w))) Space: O(1)
 * @param h - # of rows
 * @param w - # of cols
 */
const searchMatrix2 = (matrix, target) => {
    if (!matrix || !matrix.length || !matrix[0].length) return false;
    const [h, w] = [matrix.length, matrix[0].length];
    if (target < matrix[0][0] || target > matrix[h - 1][w - 1]) return false;
    // location target row (O(log(h)))
    let [start, end] = [0, h - 1];
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        // compare with the smallest num in a row
        if (matrix[mid][0] === target) return true;
        if (matrix[mid][0] < target) start = mid + 1;
        else end = mid - 1;
    }

    // if compare with the smallest num in a row, target row is end row
    // else target row is start row
    const row = end;
    start = 0;
    end = w - 1;
    // search in target row  (O(log(w)))
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (matrix[row][mid] === target) return true;
        if (matrix[row][mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return false;
};
