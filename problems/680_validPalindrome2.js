/**
 * 680. Valid Palindrome II  -- easy
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:

Input: "aba"
Output: True
Example 2:

Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:

The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
 */

// const isPalindrome = (s) => {
//   for (let i = 0; i < Math.floor(s.length / 2); i++) {
//     if (s[i] !== s[s.length - 1 - i]) return false;
//   }
//   return true;
// };

// Time: O(N) -- N is the length of the str  Space:O(1)
// Check if isPalindrome
const isPalindrome = (subStr) => {
  let [start, end] = [0, subStr.length - 1];

  while (start < end) {
    if (subStr[start] !== subStr[end]) return false;
    start++;
    end--;
  }
  return true;
};

const validPalindrome2 = (str) => {
  let [from, to] = [0, str.length - 1];

  while (from < to) {
    if (str[from] !== str[to]) {
      // slice str into two subStrings (by removing either from or to char) and check isPalindrome on both ways
      return isPalindrome(str.slice(from, to)) || isPalindrome(str.slice(from + 1, to + 1));
    }
    from++;
    to--;
  }
  return true;
};
