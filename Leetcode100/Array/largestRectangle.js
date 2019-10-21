/*
Given n non-negative integers representing the histogram's bar height
where the width of each bar is 1, find the area of largest rectangle in the histogram.
Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].
 */

const heights = [2, 1, 5, 6, 2, 3];

// Solution 1
// 1. Find the index where currentHeight > nextHeight
// 2. Check from right --> left and calculate area (minHeight * width)

const largestRectangle1 = heights => {
  if (!heights || heights.length === 0) return 0;
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
      // if it's the last element or the current height is height than the next height
    if (i === heights.length - 1 || heights[i] > heights[i + 1]) {
      let minHeight = heights[i];
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

console.log("largestRectangle1", largestRectangle1([2, 1, 5, 6, 2, 3]));
