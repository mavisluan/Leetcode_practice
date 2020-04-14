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
/**
The notation 0b in front of a number is an indicator that what follows is represented in binary. 
The prefix 0b usually means "binary," the prefix 0 usually means "octal," and the prefix 0x usually means "hexadecimal."
 */
const addBinary = (a, b) => {
    const aBin = `0b${a}`;
    const bBin = `0b${b}`;
    const sum = BigInt(aBin) + BigInt(bBin);
    return sum.toString(2);
};
