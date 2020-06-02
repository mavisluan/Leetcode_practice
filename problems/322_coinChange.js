/**
 * 
 *322. Coin Change
Medium
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin. 

 */
/*
Thanks for the solution and comment from dball1126
Leetcode discuss group
The idea is to build up to the amount. 
If the amount is 11, we figure out the amounts of 0...10 and then eleven. 
How many coins fit into amount of 0? How many coins fit into amount of 1? And so on... 

1. create an array called DP(Dynamic Programming) and set it to 1 + amount
2. since it's Zero based, we prefill it with the same value. 
3. The iterator becomes our amount in the first for loop ( i ), and we only take the coin if it can fit into ( i ). 
    - Notes: The trickiest part is probably the ( dp[i - coin] + 1 ). 
    This is the dynamic programming part of our algorithm. It uses the previous amount already computed.
    Our amount is ( i ), but when we do (i - coin) we have a new amount which is already hopefully computed at that specific index, 
    if it is, we take the amount of coins there and add + 1 for the coin we just used to subtract it. 
    The (- coin) statement is essentially our ( +1 ). 
*/

// Time: O(n * m)  n - the amount in our DP array,  m - the amount of coins in our coins array
// Space: O(n)   n- the amount in our DP array, because we allocated this additional array it takes additionaly space/memory

const coinChange = (coins, amount) => {
    if (amount <= 0) return 0;
    // Create a DP array and prefill all elements with amount + 1 (becausej we don't consider coin 0, we need to add amount + 1)
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0; // Every element in our dp array is an amount. Amount 0 equates to 0 coins."
    console.log('dp[0]', dp[0]);
    for (let i = 1; i <= amount; i++) {
        // i is our amount, so we start with the amount of 1
        for (const coin of coins) {
            if (i - coin >= 0) {
                // If the coin is less than or equal to the amount
                // We save our amounts to the DP array, which allows us to use the previously computed amounts for future amounts. If ( i = 7) and our coin is 5, it takes ONE coin to get to the amount of 2 ( 7 - 5 ), so we use +1 for that, but in reality we are now asking for dp[2], which happens to be 1, so if the amount is 7 and the coins are [1,2,5] the previously computed amount of dp[2] is 1, it took one coin(5) to get to dp[2] so we add + 1 for that, and our result is 1 + 1.
                dp[i] = Math.min(dp[i], dp[i - coin] + 1); // If the computed amount equals the initial fill amount it must not be true, hence why we return -1, otherwise it's true and we return the amount at the index of the DP array.
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};
