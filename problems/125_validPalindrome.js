/**
 125 Valid Palindrome -- Easy
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 */
// Time: O(N) - n is the length of the string
// Space: O(1)
const isPalindrome = (s) => {
  if (s.length === 0) return true;
  const isValidChar = (char) => {
    const code = char.charCodeAt(0);

    return (code >= 97 && code <= 122) || (code >= 65 && code <= 90) || (code >= 48 && code <= 57);
  };

  let [left, right] = [0, s.length - 1];

  while (left < right) {
    /** ***** Check left < right while moving the two pointers to avoid out of range ******** */
    while (left < right && !isValidChar(s[left])) {
      left++;
    }

    while (left < right && !isValidChar(s[right])) {
      right--;
    }

    if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
};

// Time: O(N) - n is the length of the string
// Space: O(N) - We need O(N) additional space to store the filtered valid str and reversed str
const isPalindromeReverse = (s) => {
  if (s.length === 0) return true;
  let validStr = '';
  let reversedStr = '';

  const isValidChar = (char) => {
    const code = char.charCodeAt(0);

    return (code >= 97 && code <= 122) || (code >= 65 && code <= 90) || (code >= 48 && code <= 57);
  };

  for (const char of s) {
    if (isValidChar(char)) {
      validStr += char;
      reversedStr = char + reversedStr;
    }
  }

  return reversedStr.toLowerCase() === validStr.toLowerCase();
};
