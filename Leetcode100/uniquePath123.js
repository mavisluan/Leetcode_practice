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

    console.log('matrix', matrix);
    return matrix[n - 1][m - 1];
};

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
};


// console.log('uniquePath2', uniquePath2([
//     [0, 0, 0],
//     [0, 1, 0],
//     [0, 0, 0]
// ]))

// console.log('uniquePath2', uniquePath2([[0]]))
// console.log('uniquePath2', uniquePath2([[1, 0]]))

// console.log('uniquePath2', uniquePath2([[1],[0]]))
// console.log('uniquePath2', uniquePath2([[0,0,0,0,0],[0,0,0,0,1],[0,0,0,1,0],[0,0,0,0,0]]))


/*
980. Unique Path3
On a 2-dimensional grid, there are 4 types of squares:

1 represents the starting square.  There is exactly one starting square.
2 represents the ending square.  There is exactly one ending square.
0 represents empty squares we can walk over.
-1 represents obstacles that we cannot walk over.
Return the number of 4-directional walks from the starting square to the ending square,
that walk over every non-obstacle square exactly once.

Example 1:

Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
Explanation: We have the following two paths:
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
Example 2:

Input: [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
Explanation: We have the following four paths:
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
Example 3:

Input: [[0,1],[2,0]]
Output: 0
Explanation:
There is no path that walks over every empty square exactly once.
Note that the starting and ending square can be anywhere in the grid.

Note:
1 <= grid.length * grid[0].length <= 20
 */

// Solution
// Time: O(H * W * 2 ^H*W)     Space: O( H * W )
function uniquePathsIII(grid) {
    if (grid == null || grid.length === 0) return 0;

    const h = grid.length;
    const w = grid[0].length;
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let start;
    let end;
    let emptyCount = 1;
    let res = 0;

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j] === 0) emptyCount++;
            else if (grid[i][j] === 1) start = [i, j];
            else if (grid[i][j] === 2) end = [i, j];
        }
    }

    function go(x, y, count) {
        if (grid[x][y] === -1 || grid[x][y] === Infinity) return;   // if current position is a wall or visited, return

        if (x === end[0] && y === end[1]) {
            if (count === emptyCount) res++;
            return;
        }

        grid[x][y] = Infinity; // Mark visited  (if not a wall or visited)
        // check on 4 directions, if valid, keep moving, if all directions not valid, reset the position
        for (const [di, dj] of dirs) {
            const i = x + di;
            const j = y + dj;
            if (i < 0 || i >= h || j < 0 || j >= w) continue;  // if out of bound, continue
            go(i, j, count + 1);  // increase count on every move
        }
        grid[x][y] = 0; // Reset current position
    }

    go(start[0], start[1], 0);
    return res;
}


console.log('uniquePathsIII', uniquePathsIII([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 2, -1]]));
