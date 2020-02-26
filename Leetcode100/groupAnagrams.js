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

const groupAnagrams = function(strs) {
    const groups = {};
    for (const s of strs) {
        const key = s
            .split('')
            .sort()
            .join('');
        if (groups[key]) {
            groups[key] = [...groups[key], s];
        } else {
            groups[key] = [s];
        }
    }
    return Object.values(groups);
};
