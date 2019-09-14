// Solution: One pass
// Time: O(n), Space: O(1)
// Keep the record of product, maxToCurr, minToCurr
// Product
// Two maxToCurrs' product can be the largest
// Two minToCurrs' product can be the largest
// The num itself's value can also be the largest [-3, 26]

// maxToCurr: max of (maxToCurr * num, minToCurr * num, num)
// minToCurr: min of (maxToCurr * num, minToCurr * num, num)
// Product: max of (maxToCurr, product)
const maxProduct = function (nums) {
    if (nums.length === 1) return nums[0];

    // initial the three trackers
    let [maxToCurr, minToCurr, product] = [nums[0], nums[0], nums[0]];
    for (let i = 1; i < nums.length; i++) {
        // Don't update the maxToCurr and minToCurr.
        // Save nextMax and nextMin, because the next calculation needs the same numbers
        let nextMax = maxToCurr * nums[i];
        let nextMin = minToCurr * nums[i];
        maxToCurr = Math.max(nums[i], Math.max(nextMax, nextMin));
        minToCurr = Math.min(nums[i], Math.min(nextMax, nextMin));
        product = Math.max(maxToCurr, product);
    }

    return product;
};

// console.log('maxProduct', maxProduct([2, 3, -2, 4]));
// console.log('maxProduct', maxProduct([-2, 0, -1]));
console.log('maxProduct', maxProduct([-4, -3, -2]));
