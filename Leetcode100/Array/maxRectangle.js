/*
85. Maximal Rectangle (84 Largest Rectangle in Histogram's Follow-up question )
Given a 2D binary matrix filled with 0's and 1's, find the largest
rectangle containing only 1's and return its area.

Example:
Input:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6
 */

// Time: O( N^2 M): Computing the maximum area for one point takes O(N) time,
// since it iterates over the values in the same column.
// This is done for all N * M points, giving OP(N) * N(NM) = O (N^2 M)

// Space: O (N M) -- allocate an equal sized array to store the maximum width at each point

// helper function calculate the largest area in an array (Problem 84)
const helper = (heights) => {
    if (heights === null || heights.length === 0) return 0;
    let maxArea = 0;
    let stack = [];
    heights.push(0);
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const lastIdx = stack[stack.length - 1];
            const width = (stack.length === 0) ? i : i - lastIdx - 1;
            maxArea = Math.max(maxArea, height * width)
        }

        stack.push(i);
    }

    return maxArea;
}


// calculate each row's accumulated heights
// To every point in a row:
//      if currHeight = 0, then accumulated height = 0
//      else: accumulated height = currHeight + prevHeight

const maximalRectangle = (matrix) => {
    if (matrix === null || matrix.length === 0) return 0;
    let maxArea = 0;
    const heights = [];

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (r === 0) heights[c] = parseInt(matrix[0][c]);  // if it's the first row, convert string to interger
            else {
                heights[c] = (matrix[r][c] === '0') ? 0 : parseInt(matrix[r][c]) + heights[c];
            }   // if not the first row, check currHeight and calculate accumulated Height accordingly
        }
        maxArea = heights.length > 0 && Math.max(maxArea, helper(heights)); // calculate and update maxArea
    }

    return maxArea;
};

console.log('maximalRectangle', maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]))


// console.log(maximalRectangle([["1"]]))
