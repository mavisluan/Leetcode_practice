/**
 * 443. String Compression -- Easy
Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.
Follow up:
Could you solve it using only O(1) extra space?

Example 1:
Input:
["a","a","b","b","c","c","c"]
Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".

Example 2:
Input:
["a"]
Output:
Return 1, and the first 1 characters of the input array should be: ["a"]
Explanation:
Nothing is replaced.

Example 3:
Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array.


Note:

All characters have an ASCII value in [35, 126].
1 <= len(chars) <= 1000.
 */
// Solution 1
// Time: O(N)  Space: O(1)
/**
 *
 * @param {compressIdx} - iterate through chars to update value for the compressed Chars
 * @param {charIdx} - move when compare-char is different as char
 * @param {compareIdx} - move when compare-char is the same as char
 * @param {counter} - count how many same chars for each char
 */

const compress1 = (chars) => {
  let compressIdx = 0;
  let charIdx = 0;
  const size = chars.length;

  while (charIdx < size) {
    let counter = 1;
    let compareIdx = charIdx + 1;
    while (compareIdx < size && chars[charIdx] === chars[compareIdx]) {
      counter++;
      compareIdx++;
    }

    chars[compressIdx] = chars[charIdx];
    compressIdx++;
    if (counter > 1) {
      const numStrs = counter.toString();
      for (const num of numStrs) { // if counter is more than 1 digit
        chars[compressIdx] = num;
        compressIdx++;
      }
    }
    charIdx = compareIdx;
  }

  chars = chars.slice(0, compressIdx);
  console.log('chars', chars);
  return chars.length;
};
// Solution 2
const compress2 = (chars) => {
  let len = 1;
  let startIdx = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) len++;
    else if (len > 1) {
      const arr = len.toString().split('');
      chars.splice(startIdx + 1, len - 1, ...arr);
      startIdx = (i + 1) - (len - arr.length - 1);
      i -= (len - arr.length - 1);
      len = 1;
    } else startIdx++;
  }
  return chars.length;
};

const chars1 = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
// ["a","3","b","2","a","2"]
const chars2 = ['a', 'a', 'a', 'b', 'b', 'a', 'a'];
// ["a","b","1","2"]
console.log('compress1', compress1(chars1));
console.log('compress1', compress1(chars2));
