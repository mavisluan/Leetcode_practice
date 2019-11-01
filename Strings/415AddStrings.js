/*
415. Easy Add Strings
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:
The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

Input: ("123" , "29")     Output: "152"
 */

// Solution
// Time: O(m + n)   space: O(n)
const addStrings = (str1, str2) => {
    let [i, j] = [str1.length - 1, str2.length - 1];   // set pointer point to the last element of str1 and str2
    let sum = '';
    let carry = 0;  // (进位)

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i < 0 ? 0 : str1[i] - '0';
        const digit2 = j < 0 ? 0 : str2[j] - '0';
        const digitsSum = digit1 + digit2 + carry;

        sum = `${digitsSum % 10}${sum}`;   // prepend the new sum in front of the last sum
        carry = Math.floor((digitsSum / 10));
        i --;
        j --;
    }

    return sum;
};

console.log('addStrings', addStrings('123', '29'));
console.log('addStrings', addStrings('0', '0'));
console.log('addStrings', addStrings('29', '124'));

