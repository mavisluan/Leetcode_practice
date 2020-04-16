/**
 * 67. Add Binary -- Easy
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

Constraints:
Each string consists only of '0' or '1' characters.
1 <= a.length, b.length <= 10^4
Each string is either "0" or doesn't contain any leading zero.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// Solution 1 Convert into integers --> compute the sum -> Convert the sume back into binary
// Time: O(M+N)
/**
The notation 0b in front of a number is an indicator that what follows is represented in binary.
The prefix 0b usually means "binary," the prefix 0 usually means "octal," and the prefix 0x usually means "hexadecimal."
 */
// Note: parseInt won't work if the string is long enough
const a = '11';
const b = '1';
const addBinary = (a, b) => {
  const aBin = `0b${a}`; // `0b`-means binary
  const bBin = `0b${b}`;

  const sum = BigInt(aBin) + BigInt(bBin); // BigInt() - convert binary to int
  return sum.toString(2);
};


// addBinary(a, b);
// addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
//   '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011');

// Solution 2 Compute Bit by Bit
/**
 The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start (left) of the current string.
 * string.padStart(targetLength, padString)
  const str1 = '5';
  str1.padStart(2, '0');   // "05"
  str1.padStart(6, '*');   // "*****5"
  */
// Time: O(max(N, M))  -- N, M are lengths of str a and strb
// Space: O(max(N, M)) -- res to keep the answer
const addBinaryComputeBitByBit = (a, b) => {
  let res = '';
  let carry = 0;
  // pad the short str to the be same length with the long one-> a, b will have the same length
  const str1 = a.padStart(b.length, '0');
  const str2 = b.padStart(a.length, '0');
  for (let i = str1.length - 1; i >= 0; i--) {
    const [digitA, digitB] = [parseInt(str1[i]), parseInt(str2[i])];
    const sum = digitA + digitB + carry;
    if (sum < 2) {
      carry = 0;
      res = sum + res;
    } else {
      carry = 1;
      res = (sum % 2) + res;
    }
  }
  if (carry > 0) res = carry + res;
  return res;
};

// console.log('addBinaryComputeBitByBit', addBinaryComputeBitByBit(a, b));
// console.log('addBinaryComputeBitByBit', addBinaryComputeBitByBit('1111', '10'));

// Solution 3 Use Array
const addBinaryUseArray = (a, b) => {
  a = a.split('').reverse().join('');
  b = b.split('').reverse().join('');
  const len = (a.length > b.length) ? a.length : b.length;
  const result = [];

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(a[i]) || 0;
    const num2 = parseInt(b[i]) || 0;
    // result[i] is the carry
    const sum = parseInt(result[i] || 0) + num1 + num2;
    if (sum >= 2) {
      result[i] = curr % 2;
      result.push(1); // push carry to the end of the result array
    } else {
      result[i] = curr;
    }
  }
  return result.reverse().join('');
};
