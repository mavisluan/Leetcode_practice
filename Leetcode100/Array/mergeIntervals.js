// Time: O(n lgn)
// Space: O(n) -- created the result array

const mergeIntervals = (arr) => {
    if (arr.length <= 1) return arr;
    arr.sort((a, b) => a[0] - b[0]);  // sort the arr by the first element in subArr: O(n lgn)
    const result = [arr[0]];
    for (let i = 1; i < arr.length; i++) {  // O(n)
        const last = result[result.length - 1];
        if (last[1] >= arr[i][0]) {
            last[1] = Math.max(last[1], arr[i][1]);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
};

console.log('mergeIntervals', mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
