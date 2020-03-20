/**
 * 49. Group Anagrams  Medium
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
 */

/* Solution 1 Categorize by Sorted string
    Maintain a map group: {string --> array} where
    K is a sorted string, and each value is the array of strings 
    from the initial input 
*/
// Time: O(NK logK) --> N - length of strs, K - max length of a string in strs
// Space: O(NK) --> The total info content stored in group
const groupAnagrams = function(strs) {
    const groups = {};
    for (const s of strs) {
        // Time: O(N)
        const key = s
            .split('')
            .sort() // Time: O(K logK)
            .join('');
        if (groups[key]) {
            groups[key] = [...groups[key], s];
        } else {
            groups[key] = [s];
        }
    }
    return Object.values(groups);
};

/* Solution 2 Categorize by Count
    Maintain a map group: {string --> array} where
    K is a string with count of 26 chars, and each value is the array of strings 
    from the initial input 
 */
// Time: O(NK) - Count each str is linear in the size of the string (count every string)
// Space: O(NK) - the total info content stored in dict
const groupAnagrams2 = function(strs) {
    const dict = {};
    // Time: O(N) -length of strs
    for (const word of strs) {
        const charCount = new Array(26).fill(0); // an array to track the count of each char in word
        // Time: O(K) -- length of word
        for (let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 'a'.charCodeAt(0);
            charCount[index]++;
        }

        charCount.join(''); // returns a new string by concatenating all of the elements in an array

        if (dict[charCount]) dict[charCount].push(word);
        else dict[charCount] = [word];
    }

    return Object.values(dict);
};
