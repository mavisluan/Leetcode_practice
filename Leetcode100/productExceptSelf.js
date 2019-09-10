// Solution 1 Space Approach
// Concept: productExceptSelf is equal to LeftProduct * rightProduct
// Loop1: ( end --> start)
//  1) update result --> result[i] = rightProduct
//  2) update rightProduct *= nums[i]
// When loop1 is done, result contains all the rightProduct
// Loop2: (start --> end_
//  1) update result --> result[j] *= leftProduct (results[j] contains the value of rightProduct)
//  2) update leftProduct *= nums[j]

// Time: O(n+n) --> O(n)  Space: O(1)
const productExceptSelf = (nums) => {
    const result = [];
    let [leftProduct, rightProduct] = [1,1];

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = rightProduct;
        rightProduct *= nums[i]
    }

    for (let j = 0; j < nums.length; j++) {
        result[j] *= leftProduct;
        leftProduct *= nums[j]
    }

    return result;
}

// console.log('productExceptSelf', productExceptSelf([1,2,3,4]));

// Solution 2 Space approach
