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
