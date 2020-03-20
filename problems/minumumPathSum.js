/*
64. Minimum Path Sum
Given a m x n grid filled with non-negative numbers,
find a path from top left to bottom right which minimizes
the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

// Solution1:
// Time: O(m * n)   Space: O(m * n) -- another matrix of the same size is used
// the 2D matrix keeps the record of minSum to the certain point
// to each position: since we can only move down or right
// MinSum = Math.min( matrixUpValue, matrixLeftValue) + gridCurrVal

const minPathSum = (grid) => {
    const matrix = [];
    const [h, w] = [grid.length, grid[0].length];
    // generate 2D matrix
    for (let i = 0; i < h; i++) {
        matrix.push([]);
    }
    matrix[0][0] = grid[0][0];
    // initialize first row value (accumulated sum)
    for (let i = 1; i < w; i++) {
        matrix[0][i] = grid[0][i]+ matrix[0][i-1];
    }

    // initialize first col value (accumulated sum)
    for (let j = 1; j < h; j++) {
        matrix[j][0] = grid[j][0] + matrix[j - 1][0];
    }

    for (let i = 1; i < h; i++) {
        for (let j = 1; j < w; j++){
            matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-1]) + grid[i][j];
        }
    }

    return matrix[h-1][w-1];
};


// Solution 2
// Time: O(m*n)   Space: O(1) --> update grid in place, no extra space is used
const minPathSum2 = (grid) => {
    const [h, w] = [grid.length, grid[0].length];

    for (let i = 1; i < h; i++) {  // update the first col (from 1,0)
        grid[i][0] += grid[i-1][0];
    }

    for (let j = 1; j < w; j++) {  // update the first row (from 0,1)
        grid[0][j] += grid[0][j-1];
    }

    for (let i =1; i < h; i++) {   // update the rest of the grid
        for (let j = 1; j < w; j++) {
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
        }
    }

    return grid[h-1][w-1];
};


// console.log('minPathSum', minPathSum([
//     [1,3,1],
//     [1,5,1],
//     [4,2,1]
// ]))

// console.log('minPathSum', minPathSum([
//     [1,3,1],
// ]))


console.log('minPathSum', minPathSum2([
    [1],[3],[1],
]));
