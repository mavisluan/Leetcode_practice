/*
200 Number of Islands
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
 */

// Solution DFS
// for every land (grid[y][x] === '1])
// 1. count ++;
// 2. visit its neighbor lands using DFS until it's water (grid[y][x] === '0')
// 3. mark every visited land as '0'

// Time: O(M * N)
// Space: Worst case O(M*N) in case that the grid map is filled with lands where DFS goes by
// M×N deep.
var numIslands = function (grid) {
    const m = grid.length;
    if (m === 0) return 0;   // edge case: if grid is empty
    const n = grid[0].length;

    let count = 0;

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[y][x] === '1') {
                count++;
                console.log(`outer --- x:${x}, y: ${y}`)
                DFS(grid, y, x, m, n);
            }
        }
    }
    return count;
};

const DFS = (grid, y, x, m, n) => {
    console.log(`inner --- [${x}, ${y}]`)
    // Keep searching in all directions until the land is surrounded by water
    if (y < 0 || x < 0 || y >= m || x >= n || grid[y][x] === '0') return;
    grid[y][x] = '0';  // change visited land into water
    // search lands in four directions
    console.log(`[${x}, ${y}] search four directions`)
    DFS(grid, y - 1, x, m, n);
    DFS(grid, y, x - 1, m, n);
    DFS(grid, y + 1, x, m, n);
    DFS(grid, y, x + 1, m, n);
};


// console.log('numsIslands', numIslands([
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"]
// ]) === 1);


console.log('numsIslands', numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]) === 3);


// Depth First Search for a Graph
// https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/
/**
 * Solution BFS
 * Linear scan the 2d grid map, if a node contains a '1',
 * then it is a root node that triggers a Breadth First Search.
 * Put it into a queue and set its value as '0' to mark as visited node.
 * Iteratively search the neighbors of enqueued nodes until the queue becomes empty.
 * https://leetcode.com/problems/number-of-islands/discuss/585959/JavaScript-Solution-BFS-and-DFS
 *
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslandsBFS = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    if (m === 0 || n === 0) return 0;

    const queue = [];

    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++;
                grid[i][j] = '0';
                queue.push([i, j]);
                console.log("outer queue", queue)
                while (queue.length > 0) {
                    const [x, y] = queue.shift();
                    for (const direction of directions) {
                        const [dir_x, dir_y] = direction;
                        const nbr_x = x + dir_x;  // nbr = neighbor
                        const nbr_y = y + dir_y;
                        if (withinBounds(nbr_x, nbr_y, m, n) && grid[nbr_x][nbr_y] === '1') {
                            grid[nbr_x][nbr_y] = '0';
                            queue.push([nbr_x, nbr_y]);
                            console.log("inner queue", queue)
                        }
                    }
                }
            }
        }
    }

    return count;
};

/**
 * @param {int} x
 * @param {int} y
 * @param {int} m
 * @param {int} n
 * @return {boolean}
 */

function withinBounds(x, y, m, n) {
    return 0 <= x && 0 <= y && x < m && y < n;
}


// numIslandsBFS([
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"]
// ])
