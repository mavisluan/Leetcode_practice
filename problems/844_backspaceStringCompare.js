/**
 *844. Backspace String Compare
Easy

1415

73

Add to List

Share
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
 */

// Solution1 Stack
// Time: O(M+N)  Space: O(M+N) - build a new stack
const backspaceCompare = (S, T) => {
  const build = (str) => {
    const stack = [];
    for (const char of str.split('')) {
      (char === '#') ? stack.pop() : stack.push(char);
    }
    return stack.join('');
  };

  return build(S) === build(T);
};


// Solution 2 Two Pointers
// Reference: ethaneff's solution
// Time: O(M+N)  Space: O(1)
const backspaceCompareTwoPointers = (s, t) => {
  let sPointer = s.length - 1;
  let tPointer = t.length - 1;
  let sCount = 0;
  let tCount = 0;

  while (sPointer >= 0 || tPointer >= 0) {
    const sItem = s[sPointer];
    const tItem = t[tPointer];
    if (sItem === '#') {
      sPointer--;
      sCount++;
    } else if (tItem === '#') {
      tPointer--;
      tCount++;
    } else if (sCount > 0) {
      sCount--;
      sPointer--;
    } else if (tCount > 0) {
      tCount--;
      tPointer--;
    } else if (sPointer >= 0 && tPointer >= 0 && sItem !== tItem) {
      return false;
    } else if (sPointer >= 0 !== tPointer >= 0) {
    // if one pointer is out of range and the other pointer is within the range
    // Compare a char with nothing --> return false;
    // else if ((sPointer < 0 || tPointer < 0) && sPointer !== tPointer)
      return false;
    } else {
      sPointer--;
      tPointer--;
    }
  }
  return true;
};
