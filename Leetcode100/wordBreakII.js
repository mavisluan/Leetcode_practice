/**
 140. Word Break II
Hard
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

/* Thanks for Saloni Kaur for complexity analysis
Time: O(N* 2^N)
To calculate the time complexity, we can calculate how many times the sub-problem was executed. 
That is how many times the wordBreakHelper was run. That is, in the worst case scenario, of “aaaaaa”:
If the input is “aaaaaa” and the dictionary is [a, aa, aaa, aaaa, aaaaa, aaaaaa]. 
wordBreakHelper("aaaaaa", 6, dictionary);
wordBreakHelper("aaaaa", 5, dictionary);
wordBreakHelper("aaaa", 4, dictionary);
wordBreakHelper("aaa", 3, dictionary);
wordBreakHelper("aa", 2, dictionary);
wordBreakHelper("a", 1, dictionary);

The map would look something like this:
Space: O(N * 2^N)
0 -> ["a"] ----------------------------> 2^0 items
1 -> ["a a","aa"] ---------------------> 2^1 items
2 -> ["a a a", "aa a", "a aa", "aaa"] -> 2^2 items
*/
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

// Solution 2 DP
const wordBreakDP = (s, wordDict) => {
    if (wordDict == null || wordDict.length === 0) return [];

    const res = [];
    wordDict = new Set(wordDict);
    const dp = new Array(s.length + 1);
    dp[0] = [0];

    for (let i = 1; i <= s.length; i++) {
        dp[i] = [];
        for (let j = 0; j < i; j++) {
            // dp[i] is an array which contains all valid indices j(s) - dp[j] is valid && slice(j, i) exists in wordDict ->  dp[i].push(j)
            if (dp[j].length && wordDict.has(s.slice(j, i))) dp[i].push(j);
        }
    }

    const build = (idx, suffix) => {
        if (!idx) return res.push(suffix);
        dp[idx].forEach(from => {
            // if suffix is not empty, append it to the newSuffix
            const newSuffix = suffix === '' ? s.slice(from, idx) : `${s.slice(from, idx)} ${suffix}`;
            build(from, newSuffix);
        });
    };

    build(s.length, '');
    return res;
};

console.log('wordBreakDP', wordBreak('catsanddogs', ['cat', 'cats', 'and', 'sand', 'dog']));
