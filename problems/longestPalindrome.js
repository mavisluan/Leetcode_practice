/*
5. Longest Palindrome Substring
Given a string s, find the longest palindromic substring in s.
You may assume that the maximum length of s is 1000.
Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 */


// Solution  Expand Around Center
// i -- the index of the center: loop from the first char to the end
// j -- controls the size of the center:  0 --> 1  ( 0-- check one char  1-- check two chars)

const longestPalindrome= (s) => {
    let max = '';

    for (let i = 0; i < s.length; i++) {
        // inner loop j control the size of center
        // j = 0 --> one char     j = 1 --> two chars
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = left + j;
            // Loop: expand the center as long as it's palindrome
            while (left >=0 && right < s.length && s[left ] === s[right]) {
                left --;
                right ++;
            }

            // palindrome's size = right - left - 1
            if (right - left - 1 > max.length) {
                // substring includes start, excludes end --> left + 1
                max = s.substring(left + 1, right);
            }
        }
    }

    return max;
};


console.log('longestPalindrome2', longestPalindrome('babad'));
