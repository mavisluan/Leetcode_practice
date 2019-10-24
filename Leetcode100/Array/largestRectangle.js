/*
Given n non-negative integers representing the histogram's bar height
where the width of each bar is 1, find the area of largest rectangle in the histogram.
Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].
 */

const heights = [2, 1, 5, 6, 2, 3];

// Solution 1
// 1. Find the index where currentHeight > nextHeight
// 2. Check from right --> left and calculate area (minHeight * width)
// Time: O(n^2) Space: O(1)
const largestRectangle1 = heights => {
    if (!heights || heights.length === 0) return 0;
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        // if it's the last element or the current height is height than the next height
        if (i === heights.length - 1 || heights[i] > heights[i + 1]) {
            let minHeight = heights[i]; // minHeight from i to j
            let j = i;
            while (j >= 0) {
                minHeight = Math.min(minHeight, heights[j]);
                let area = minHeight * (i - j + 1);
                maxArea = Math.max(maxArea, area);
                j--;
            }
        }
    }

    return maxArea;
};

// console.log("largestRectangle1", largestRectangle1([2, 1, 5, 6, 2, 3]));


// Solution 2 Use Stack
// Time: O(n) --> n numbers are pushed and popped  Space: O(n) --> use stack
// [2, 1, 5, 6, 2, 3]
// for each index, if the val increases, push the index to the stack
//                 else calculate area

const largestRectangle2 = arr => {
    if (arr === null || arr.length === 0) return 0;

    arr.push(0);  // push 0 to the end for the case that all the values increase
    let maxArea = 0;
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        while (stack.length !== 0 && arr[i] < arr[stack[stack.length - 1]]) {
            const height = arr[stack.pop()];
            const width = (stack.length === 0) ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width)
        }
        stack.push(i)   // if the stack is empty or currVal > preVal(stack's top idx element's val)
    }
    return maxArea;
}


console.log("largestRectangle2", largestRectangle2([2, 1, 5, 6, 2, 3]));
