/* eslint-disable no-console */
/*
Given a non-empty string s and a dictionary wordDict containing a list of non-emptywords, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
Note:
	• The same word in the dictionary may be reused multiple times in the segmentation.
	• You may assume the dictionary does not contain duplicate words.
Example 1:
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

// Solution 1 DP
// Time: O(n^2) - Two loops to fill dp array
// Space: O(n) - Length of dp array is n + 1
/**
 * Approach: The given problem (s) can be divided into subproblems s1 and s2. If theses subproblems inividually satify the required conditions, the complete problem, s also satisfies the same.
 * Two pointers
 * @param {*} i - the length of the substring from beginning till i (s.slice(0-i))
 * @param {*} j - the index partitioning the current substring s.slice(0, j) and s.slice(j, i)
 * if s.slice(0, i-j) in wordDict && s.slice(j, i) in wordDict --> isWordBreak(s.slice(0, i)) is true
 * 		'abc'                         'de'
 * s = 'a  b  c  d  e  f  g'       wordDict = ['abc', 'de','fg']
 *     [0 ~  j] [j~i]
 *      |___________|
 *          i
 */
const wordBreakDP = (s, wordDict) => {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            const word = s.slice(j, i);
            if (dp[j] === true && wordDict.includes(word)) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};

// Solution 2 BFS
// Time: O(N^2) - For every starting index, the search can continue till the end of the giving string.
// Space: O(N) - Queue of at most n size is needed
const wordBreakBFS = (s, wordDict) => {
    const dict = new Set(wordDict);
    const visited = new Set();
    const queue = [0];
    while (queue.length) {
        const start = queue.shift();

        if (!visited.has(start)) {
            for (let end = start + 1; end <= s.length; end++) {
                const word = s.slice(start, end);

                if (dict.has(word)) {
                    if (end === s.length) return true;
                    queue.push(end);
                }
            }
            visited.add(start);
        }
    }

    return false;
};

// Solution 3 Memo
// Time: O(N^2)  Size of recursion tree can go up to N^2
// Space: O(N) The depth of recursion truee can go up to N
const verifyBreak = (s, dict, start, memo) => {
    // console.log(`start:${start}, memo:${memo}`);

    if (start === s.length) return true;

    if (memo[start] !== undefined) return memo[start];

    for (let end = start + 1; end <= s.length; end++) {
        console.log(`start:${start}, memo:${memo}, end:${end}`);
        const word = s.substring(start, end);
        // check if s.substring(start, end) in dict
        // && the rest of the string also in dict
        if (dict.has(word) && verifyBreak(s, dict, end, memo)) {
            return (memo[start] = true);
        }
    }

    return (memo[start] = false);
};

const wordBreakMemo = (s, wordDict) => verifyBreak(s, new Set(wordDict), 0, []);

console.log('wordBreakMemo', wordBreakMemo('abcdefg', ['abc', 'de', 'fg']));
// console.log('wordBreakMemo', wordBreakMemo('aaab', ['a', 'aa', 'aaa']));
