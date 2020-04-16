/**
 * 387. First Unique Character in a String -- Easy
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
 */
/**
 * @param {string} s
 * @return {number}
 */
// Solution 1 Hashtable
// Dict:  key- char     value- index
// Sort out the values arr and find the first value
const firstUniqChar = (s) => {
  if (!s || s.length === 0) return -1;
  const indexDict = {};
  // indexDict ---> key- char     value- index
  // if key exists, mark the value to be the length of the string
  for (let i = 0; i < s.length; i++) { // Time: O(N)
    const char = s[i];
    if (char in indexDict) {
      indexDict[char] = s.length;
    } else {
      indexDict[char] = i;
    }
  }

  const values = Object.values(indexDict).sort((a, b) => a - b); // Time: O(nLogN) -- O(n^2)
  return values[0] === s.length ? -1 : values[0];
};

// Solution 2 Hashtable 2
// Time: O(N) space:O(N)
// freq --> key - char    value-frequency of char appears
// iterate through the char in str
// --> check freqency in freq table
const firstUniqChar2 = (s) => {
  if (!s || s.length === 0) return -1;
  const freq = {};
  for (const char of s) {
    freq[char] = freq[char] + 1 || 1;
  }

  for (let i = 0; i < s.length; i++) { // iterate from the first char in string
    if (freq[s.charAt(i)] === 1) return i;
  }
  return -1;
};

// Solution 3 Array (charCode)
// Time: O(N)  space: O(N)
// Count freq of char and update freq on charTable
// Reference: matharumanpreet00
const firstUniqChar3Array = (s) => {
  if (!s || s.length === 0) return -1;
  const freq = new Array(26).fill(0);
  const indices = new Array(26).fill(-1);
  let minIdx = s.length;

  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - 97;
    // only update index when the char first appear
    if (indices[index] < 0) indices[index] = i;
    freq[index]++;
  }

  for (let i = 0; i < 26; i++) {
    if (freq[i] === 1 && indices[i] >= 0) {
      if (indices[i] < minIdx) minIdx = indices[i];
    }
  }

  return minIdx !== s.length ? minIdx : -1;
};


// console.log('firstUniq', firstUniqChar3Array('leetcode'));
