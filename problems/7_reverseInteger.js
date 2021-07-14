/**
 * 7. Reverse Integer   Easy
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2**31, 2**31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0

Constraints:
-2**31 <= x <= 2**31 - 1
 */
/**
 * @param {number} x
 * @return {number}
 Edge: reversedNum is out of [-2**31, 2**31 - 1], return 0
       x = 0 -> return 0
 */

/*
Input:
x = -1230
Output:
-321

Walk though examples to figure out:
x = -1230    3 -> 32 -> 321 -> -321
x = 189531   1 -> 13 -> 135 -> 1359 -> 13598 -> 135981
            1*10+3   13*10+5  135*10+9  1359*10+8  13598*10+1
1. to get digits in which order
2. to put digits togther in which way
We want the most right digit to become the most left digit
so 1) get digits from the right to left
   2) rev * 10 + right to move the current rev one digit left

Keep track of
1) sign: check if x < 0 or x > 0  -> negative
2) rightDigit 3 -> 2 -> 1    { x % 10 }
3) rev 0 * 10 + 3 = 3 -> 3 * 10 + 2 = 32 -> 32 * 10 + 1
4) x 1230 -> 123 -> 12 -> 1 {Math.floor (x/10)}

*/
// Time: O(log(x))   Space: O(1)
const reverse = function (x) {
  if (x === 0) return 0;
  const isNegative = x < 0; // isNegative: true
  x = Math.abs(x);

  let rightMostDigit = 0; // ->0 -> 3-> 2 -> 1 -> 0
  let rev = 0; // 0-> 0 -> 3 -> 3 * 10 + 2= 32 -> 32*10+1 = 321 -> -321
  while (x) { // x: 1230 -> 123 -> 12 -> 1
    rightMostDigit = x % 10;
    rev = rev * 10 + rightMostDigit;
    x = Math.floor(x / 10);
  }

  if (isNegative) {
    rev *= -1;
  }

  if (rev > 2 ** 31 - 1 || rev < -(2 ** 31)) return 0;
  return rev;
};
