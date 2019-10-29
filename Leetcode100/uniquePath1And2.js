/*
62 Unique Path 1
A robot is located at the top-left corner of a m x n grid .
The robot can only move either down or right at any point in time.
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
How many possible unique paths are there?

Above is a 7 x 3 grid. How many possible unique paths are there?
Note: m and n will be at most 100.

Example 1:
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
 */


// Solution 1
// Time: O(n^2) Space: O(1)
// Because the robot can only move either right or down,
// To each position of the matrix,
// the number of ways to this position = (ways to its upper position) + (ways to its left position)
const uniquePaths1 = (m, n) => {
    if (m === 0 || n === 0) return 0;
    const matrix = [];


    // Initialize 1s in the column1
    for (let i = 0; i < n; i++) {
        matrix.push([]);  // generate the 2D array
        matrix[i][0] = 1
    }

    // Initialize 1s in the row1
    for (let j = 0; j < m; j++) {
        matrix[0][j] = 1
    }

    // function: matrix[i][j] =  matrix[i - 1][j] + matrix[i][j - 1];
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }

    console.log('matrix', matrix)
    return matrix[n - 1][m - 1];
}

// console.log('uniquePaths', uniquePaths1(4, 3))


/*
63. Unique Path2
A robot is located at the top-left corner of a m x n grid.
The robot can only move either down or right at any point in time.
The robot is trying to reach the bottom-right corner of the grid .
Now consider if some obstacles are added to the grids.
How many unique paths would there be?
An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
 */

const uniquePath2 = (obstacleGrid) => {
    const [r, c] = [obstacleGrid.length, obstacleGrid[0].length];
    const matrix = [];
    // Generate 2D array
    for (let i = 0; i < r; i++) {
        matrix.push(new Array(c).fill(0));
    }
    // Initialize row 1
    for (let i = 0; i < r; i++) {
        if (obstacleGrid[i][0] === 1) break;
        matrix[i][0] = 1;
    }
    // Initialize column 1
    for (let j = 0; j < c; j++) {
        if (obstacleGrid[0][j] === 1) break;
        matrix[0][j] = 1;
    }

    // function
    for (let i = 1; i < r; i++) {
        for (let j = 1; j < c; j++) {
            if (obstacleGrid[i][j] === 1) continue;
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }
    return matrix[r - 1][c - 1];
}


// console.log('uniquePath2', uniquePath2([
//     [0, 0, 0],
//     [0, 1, 0],
//     [0, 0, 0]
// ]))

// console.log('uniquePath2', uniquePath2([[0]]))
// console.log('uniquePath2', uniquePath2([[1, 0]]))

// console.log('uniquePath2', uniquePath2([[1],[0]]))
console.log('uniquePath2', uniquePath2([[0,0,0,0,0],[0,0,0,0,1],[0,0,0,1,0],[0,0,0,0,0]]))
