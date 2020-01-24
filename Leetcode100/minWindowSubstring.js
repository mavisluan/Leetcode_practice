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

const minWindow = (s, t) => {
    if ( s === null || t === null || s.length === 0 || t.length === 0) return '';

    let matchCount = 0;
    let res = "";
    const tMap = {};

    for (let char of t) {
        tMap[char] = tMap[char] + 1 || 1;
    }

    const sMap = {};
    let left = findNextStrIdx(0, s, tMap);  // find the first char in s that exists in t
    if (left === s.length) return "";
    let right = left;
    while (right < s.length) {
        const rightChar = s.charAt(right);
        sMap[rightChar] = sMap[rightChar] + 1 || 1;

        if (sMap[rightChar] <= tMap[rightChar]) {
            matchCount ++;
        }

        while (left < s.length && matchCount === t.length) {
            if (res.length === 0 || res.length > right - left + 1) {
                res = s.substring(left, right + 1)
            }

            const leftChar = s.charAt(left);
            if (sMap[leftChar] <= tMap[leftChar]) {
                matchCount --;
            }

            sMap[leftChar] --;
            left = findNextStrIdx(left + 1, s, tMap)
        }

        right = findNextStrIdx(right + 1, s, tMap)
    }
    return res;
};

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

minWindow('DEGAIOBAACFHGIG', 'AABC');
