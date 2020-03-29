/**
 * 202. Happy Number Easy
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example:
***********************************************
NOTE:
if it ends in 1, return true;
if it loops endlessly in a cycle, return false;

Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 */

/**
 * @param {number} n
 * @return {boolean}
 */
// Time: O(logN) - Finding the next value for a given number has a cost of O(logN), because we are processing each digit in the number, and the number of digits in a number is given by logN
// Space: O(logN) - a measure of what numbers are put in the HashSet --> For a large enough N, the most space with bee N
// Solution 1 Recursion
const isHappyRecursion = (n) => {
  const seen = new Set();

  const check = (n) => {
    if (n === 1) return true;
    if (seen.has(n)) return false;
    seen.add(n);

    const sum = `${n}`.split('').reduce((total, num) => total + num ** 2, 0);

    return check(sum);
  };

  return check(n);
};

// Solution 2 Interation
const isHappyInteration = (n) => {
  const seen = new Set();
  const calculateSum = (n) => {
    let sum = 0;
    while (n > 0) {
      const d = n % 10; // last digit
      n = Math.floor(n / 10);
      sum += d * d;
    }
    return sum;
  };
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = calculateSum(n);
  }

  return n === 1;
};

// Solution 3 Linked List
// Time: O(logN)    Space: O(1)
/*
    n = 264 -> 26 -> 2 -> 0
    d =   ^     ^    ^
*/
const isHappyLinkedList = (n) => {
  const calculateSum = (n) => {
    let sum = 0;
    while (n > 0) {
      const d = n % 10; // last digit
      n = Math.floor(n / 10);
      sum += d * d;
    }
    return sum;
  };

  let slowRunner = n;
  let fastRunner = calculateSum(n);
  // if it's a loop, fast and slow runners meet
  while (fastRunner !== 1 && fastRunner !== slowRunner) {
    slowRunner = calculateSum(slowRunner); // slow runner moves once
    fastRunner = calculateSum(calculateSum(fastRunner)); // fast runner moves twice
  }

  return fastRunner === 1;
};
