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

// Time: O(mn)
var numIslands = function (grid) {
    const m = grid.length;
    if (m === 0) return 0;   // edge case: if grid is empty
    const n = grid[0].length;

    let count = 0;

    for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[y][x] === '1') {
                count++;
                DFS(grid, y, x, m, n);
            }
        }
    }
    return count;
};

const DFS = (grid, y, x, m, n) => {
    // Keep searching in all directions until the land is surrounded by water
    if (y < 0 || x < 0 || y >= m || x >= n || grid[y][x] === '0') return;
    grid[y][x] = '0';  // change visited land into water
    // search lands in four directions
    DFS(grid, y - 1, x, m, n);
    DFS(grid, y, x - 1, m, n);
    DFS(grid, y + 1, x, m, n);
    DFS(grid, y, x + 1, m, n);
};


console.log('numsIslands', numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]) === 1);


console.log('numsIslands', numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]) === 3);


// Depth First Search for a Graph
// https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/

