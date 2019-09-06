
// Solution One pass
// find minPrice and maxProfit
// Time: O(n)      Space:O(1) (two variables are used)
const maxProfit = (prices) => {
    let [minPrice, maxProfit] = [prices[0], 0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }

        if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};

// console.log('maxProfit', maxProfit([7,1,5,3,6,4]));
// console.log('maxProfit', maxProfit([7,6,4,3,1]));
console.log('maxProfit', maxProfit([2,4,1]));

