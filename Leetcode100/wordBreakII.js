/**
<<<<<<< HEAD
 140. Word Break II
Hard
=======
 * 140. Word Break II
Hard

>>>>>>> 85e16d0f282af6ae4b0a24f4b6391e60a1cdc182
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
Example 2:

Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
Example 3:

Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
 */

// Solution:  (Thanks for Hongbo-Miao sharing the solution)
// Memoization and recursion
/*
Recursion: Check every possible prefix of the string (s) in wordDict
    - if it's found (s1) 
        --> Recursive call with the remaining portion of the string (s2)
        --> Return the array (res) by appending (s1) with (s2) 
        if the substring can lead to the formation of a valid sentence
        otherwise return an empty array
Memoization: Create a hashmap. Key-(s1) value-res
    - if key exists in hashmap, return the res 
 */
// Time: O(N^3): Size of recursion tree can go up to N^2. The creation of list takes N time.
// Space: O(N^3): The depth of the recursive tree can go up to n and each activation record can contain a strin glist of size n.
const wordBreak = (s, wordDict) => {
    if (wordDict == null || wordDict.length === 0) return [];

    const cache = new Map();
    const go = s => {
        if (cache.has(s)) return cache.get(s);

        const res = [];

        for (const w of wordDict) {
            if (s.startsWith(w)) {
                const s2 = s.slice(w.length);
                if (s2 === '') {
                    res.push(w);
                } else {
                    const vals = go(s2);

                    vals.forEach(val => res.push(`${w} ${val}`));
                }
            }
        }

        cache.set(s, res);
        return res;
    };

    return go(s);
};

console.log('wordBreak', wordBreak('catsanddogs', ['cat', 'cats', 'and', 'sand', 'dog']));
