// Solution 1 Dynamic programming
// Track from left and from right max value in arrays
// calculate the water amount:
// 1) find Min of (left[i], right[i])
// 2) calculate the diff with arr[i]
// Time: O(n)  Space: O(n)
const trapWater = (arr) => {
    if (!arr || arr.length === 0) return 0;

    const [left, right] = [[], []];
    let [leftMax, rightMax, sum] = [0, 0, 0];
    const n = arr.length;
    left[0] = leftMax;
    right[n - 1] = rightMax;
    // record left Max by index
    for (let i = 1; i < n; i++) {
        if (arr[i - 1] > leftMax) leftMax = arr[i - 1];
        left[i] = leftMax;
    }
    // record right Max by index
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i + 1] > rightMax) rightMax = arr[i + 1];
        right[i] = rightMax;
    }
    // calculate the amount of water and add it up
    for (let j = 0; j < n; j++) {
        let min = Math.min(left[j], right[j]);
        let water = (min > arr[j]) ? min - arr[j] : 0;
        sum += water;
    }
    return sum;
};

// console.log('trapWater', trapWater([0,1,0,2,1,0,1,3,2,1,2,1]));

// Solution 2 Using Two pointers
// For each position/ index, find Min of leftMax and rightMax
//      --> for each bar, the water it can trap depends on Min(leftMax, rightMax) - arr[i](bar height)
//          --> keep the record of the water amount and add it up
// Time: O(n)  Space: O(1)
const trapWater2 = (arr) => {
    let [leftMax, rightMax, sum, water] = [0, 0, 0, 0];
    const n = arr.length;

    let [leftP, rightP] = [0, n - 1];

    while (leftP < rightP) {
        leftMax = Math.max(leftMax, arr[leftP]);
        rightMax = Math.max(rightMax, arr[rightP]);

        if (leftMax <= rightMax) {
            water = Math.max(leftMax - arr[leftP], 0);
            leftP++;
        } else {
            water = Math.max(rightMax - arr[rightP], 0);
            rightP--;
        }
        sum += water;
    }
    return sum;
};

console.log('trapWater2', trapWater2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

