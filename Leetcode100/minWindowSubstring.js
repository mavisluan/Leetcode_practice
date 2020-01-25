/*
76. Minimum Window Substring

Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
 */
/*
SUMMARY
Use two pointers(left & right) to :

Find a valid window (a substring that contains all the characters we need to match)
Check if this valid window is the shortest known valid window. If it is, update your answer.
Minimize the valid window. If it is still valid repeat step 2.
Repeat steps 1 - 3 for the entirety of the input string.
 */


// Solution
// Time: O(S+T)    Space: O(S+T)
const minWindow = (s, t) => {
    if ( s === null || t === null || s.length === 0 || t.length === 0) return '';

    let matchCount = 0;
    let res = "";
    const tMap = {};

    for (let char of t) {
        tMap[char] = tMap[char] + 1 || 1;
    }

    const sMap = {};
    let left = findNextStrIdx(0, s, tMap);  // find the first char in s that exists in t --> starting point
    if (left === s.length) return "";
    let right = left;

    while (right < s.length) {  // before matchCount reaches t's total char count, move right forward
        const rightChar = s.charAt(right);
        // increase matchCount only when sMap contains smaller number of the char than tMap
        // eg. sMap: {A: 3, B: 1}   tMap: {A: 2, B: 1, C: 1}
        //               |___________________|
        //  sMap has 3 As, but tMap has 2 As, matchCount won't increase, because A's count at this case won't affect the total matching count
        if (!sMap[rightChar] || sMap[rightChar] < tMap[rightChar]) {
            matchCount ++;
        }

        sMap[rightChar] = sMap[rightChar] + 1 || 1;  // update sMap char's count

        while (left < s.length && matchCount === t.length) {  // when matchCount reaches t's total char count, move left forward
            if (res.length === 0 || res.length > right - left + 1) {
                res = s.substring(left, right + 1)
            }

            const leftChar = s.charAt(left);
            if (sMap[leftChar] <= tMap[leftChar]) {  // decrease matchCount when sMap contains equal or smaller number of the char than tMap
                matchCount --;
            }

            sMap[leftChar] --;  // update sMap char's count
            left = findNextStrIdx(left + 1, s, tMap)  // move left pointer to the next matching char's index
        }

        right = findNextStrIdx(right + 1, s, tMap)  // move right pointer to the next matching char's index
    }
    return res;
};

// find the char in s that exists in tMap
// The min substring must start and end with the chars inside tMap
// When moving left and right pointers, move the pointers to
// the next matching char's index (not matching chars' location won't influence the result)
const findNextStrIdx = (start, s, tMap) => {
    while (start < s.length) {
        const char = s.charAt(start);
        if (tMap[char]) {
            return start;
        }
        start ++;
    }

    return start;
};

console.log('findNextStrIdx', minWindow('DEGAIOBAACFHGIG', 'AABC')) ;
