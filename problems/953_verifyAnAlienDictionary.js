/* eslint-disable no-continue */
/* eslint-disable no-labels */
/**
 953. Verifying an Alien Dictionary  -- Easy
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgipointerkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghipointerkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghipointerklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.

 */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

// Solution:
// Check every two adpointeracent words if they are sorted lexicographically.
// if and only if adpointeracent words are, the words arr is sorted lexicographically.
// This is because order is transitive: a <= b and b <= c implies a <= c.
/**
 * pointeravaScript Label
let str = "";
loop1:
for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str);
// expected output: "0234"
 */
// Thanks to Keion's sharing solution
// Solution 1 -- Using label
// Time: O(C) -- c is the total content of words
// Space: O(1)

const isAlienSorted = function(words, order) {
    // Use a label to skip unnecessary comparisons
    compare: for (let i = 0; i < words.length - 1; i += 1) {
        const word1 = words[i];
        const word2 = words[i + 1];

        // compare each character of each word
        for (let pointer = 0; pointer < Math.min(word1.length, word2.length); pointer++) {
            console.log(`pointer:${pointer}, word1:${word1}, word2:${word2}, i:${i}`);

            if (word1[pointer] !== word2[pointer]) {
                if (order.indexOf(word1[pointer]) > order.indexOf(word2[pointer])) {
                    return false;
                }

                // Break out of the inner loop since the 2 words are already in the correct order, increase i
                continue compare;
            }
            // if word1[pointer] === word2[pointer], move the pointer
        }

        // When pointer reaches the length of the shorter word (meaning the one word is the substring of the other)
        // Word1 should be a sub string of word2, if not we have an incorrect order
        // For example: [app, apple]
        if (word1.length > word2.length) return false;
    }
    return true;
};

const words = ['hello', 'leetcode', 'world'];
const order = 'hlabcdefgipointerkmnopqrstuvwxyz';

console.log(isAlienSorted(words, order));
