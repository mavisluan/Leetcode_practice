/**
 * 994. Rotting Oranges
Easy

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

Example 1:

Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 */
// Big thanks to Ositowang for sharing the solution
// BFS solution
const orangesRotting = function(grid) {
    if (grid.length === 0 || grid[0].length === 0) return -1;

    const [row, col] = [grid.length, grid[0].length];
    let fresh = 0;
    const rottens = [];
    let minutes = 0;
    // Collect fresh numbers and rotten locations
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                fresh += 1;
            } else if (grid[i][j] === 2) {
                rottens.push([i, j]);
            }
        }
    }

    const movement = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];

    /*
    As long as there are rottens and fresh left
    --> iterate through rottens ---> turn around fresh into rottens && push new-rotten's location to rottens
        Because the size of rottens keeps changing when a fresh is turned to rotten
        Save the current size of the rottens at the beginning of the iteration
        When the size is 0, current iteration ends --> increase the minutes by 1
 */

    while (rottens.length !== 0 && fresh) {
        let size = rottens.length;
        while (size) {
            const currCell = rottens.shift();
            size--;
            const [x, y] = currCell;
            for (let d = 0; d < 4; d++) {
                const tx = x + movement[d][0];
                const ty = y + movement[d][1];
                if (tx < 0 || tx >= row || ty < 0 || ty >= col || grid[tx][ty] !== 1) {
                    continue;
                }
                fresh--;
                grid[tx][ty] = 2;
                rottens.push([tx, ty]);
            }
        }
        minutes++;
    }
    return fresh ? -1 : minutes;
};

// Big thanks to Shengdae for sharing the solution
const orangesRotting2 = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    let fresh = 0;
    const queue = [];
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] === 2) queue.push([i, j]);
            if (grid[i][j] === 1) fresh++;
        }
    }
    let minute = 0;
    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift();
            if (x - 1 >= 0 && grid[x - 1][y] === 1) {
                grid[x - 1][y] = 2;
                fresh--;
                queue.push([x - 1, y]);
            }
            if (x + 1 < height && grid[x + 1][y] === 1) {
                grid[x + 1][y] = 2;
                fresh--;
                queue.push([x + 1, y]);
            }
            if (y - 1 >= 0 && grid[x][y - 1] === 1) {
                grid[x][y - 1] = 2;
                fresh--;
                queue.push([x, y - 1]);
            }
            if (y + 1 < width && grid[x][y + 1] === 1) {
                grid[x][y + 1] = 2;
                fresh--;
                queue.push([x, y + 1]);
            }
        }
        if (queue.length > 0) minute++;
    }
    return fresh === 0 ? minute : -1;
};

console.log(
    orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
    ])
);
