/* eslint-disable no-label-var */
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

/* Solution:
Check every two adpointeracent words if they are sorted lexicographically.
if and only if adpointeracent words are, the words arr is sorted lexicographically.
This is because order is transitive: a <= b and b <= c implies a <= c.

    i --> index of words array
    pointer -> index of word
    compare:
    1) word1[pointer] !== word2[pointer]
        --> if word1[pointer] is behind word2[pointer] in order --> return false
        --> else --> continue and move i (move to the next two words)

    2) word1[pointer] === word2[pointer]
        --> move the pointer and continue comparing
            --> when the pointer reaches the shorter word's length
                means one word is the other word's subString
                (Lexicographicaly short words come before longer word)
            --> if word1.length > word2.length --> return false
*/
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

const isAlienSortedLabel = (words, order) => {
  // Use a label to skip unnecessary comparisons
  // eslint-disable-next-line no-restricted-syntax
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

    // When pointer = the shorter word's length (meaning one word is the substring of the other)
    // Word2 has to be the shorter word, if not we have an incorrect order
    // For example: [app, apple]
    if (word1.length > word2.length) return false;
  }
  return true;
};

// Solution 2
// Time: O(C) -- c is the total content of words
// Space: O(1)
const isAlienSorted = (words, order) => {
  // Outer loop iterate through word
  for (let i = 0; i < words.length - 1; i++) {
    const [word1, word2] = [words[i], words[i + 1]];
    let pointer = 0;
    // Inner loop iterate through char in word
    while (pointer < Math.min(word1.length, word2.length)) {
      if (word1[pointer] !== word2[pointer]) {
        if (order.indexOf(word1[pointer]) > order.indexOf(word2[pointer])) return false;
        break; // break out of inner loop, increase i
      }
      pointer++;
    }
    // when pointer = word2.length
    // meaning 1) pointer breaks while loop 2) word2 is the short word
    if (pointer === word2.length) return false;
  }

  return true;
};

const words = ['hello', 'leetcode', 'world'];
const order = 'hlabcdefgipointerkmnopqrstuvwxyz';

// Solution 3 Map
// Time: O(C) - C is the content of words
// Space: O(M) -- M is the length of order (Map)
// Thanks to ValeriiVasin's solution
const compare = (a, b, letterMap) => {
  const [aLength, bLength] = [a.length, b.length];
  const minLength = Math.min(aLength, bLength);

  for (let pointer = 0; pointer < minLength; pointer++) {
    const aOrder = letterMap.get(a[pointer]);
    const bOrder = letterMap.get(b[pointer]);

    if (aOrder === bOrder) continue; // move pointer
    if (aOrder < bOrder) return -1; // lexical order

    return 1; // not lexical order
  }

  if (aLength === bLength) return 0;
  return aLength < bLength ? -1 : 1;
};

const isAlienSortedMap = (words, order) => {
  // Create a map with all letters in order and their indices
  const letterMap = new Map();
  let i = 0;

  for (const letter of order) {
    letterMap.set(letter, i);
    i++;
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (compare(words[i], words[i + 1], letterMap) === -1) continue;

    return false;
  }

  return true;
};

console.log(isAlienSortedMap(words, order));
