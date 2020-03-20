
// Solution 1 Set -- Sliding window method (without duplicate the cars start with index left)
// Time: O(2n) - O(n)  - In the worst case each char will be visited twice by left and right
// Space: O(min(m,n)) - We need O(k) space for the sliding window, where k is the size of the Set.
// the size of the set is upper bounded by the size of the string n and the size of the charset m.
/*
    substr
        - a HashSet to store the chars in current window [left, right ) (right = left initially)
    left
        - tracks the valid starting point
        - moves forward on char repeats/exists in the substr
        - remove the starting char from the substr
    right
       - tracks the valid ending point
       - moves forward on unique char
       - add the char to substr
       - update the maxLen
 */

const lengthOfLongestSubstring1 = (s) => {
    let [left, right, maxLen] = [0, 0, 0];
    const substr = new Set();

    while (right < s.length) {
        if (!substr.has(s[right])) {
            substr.add(s[right]);
            right ++;
            maxLen = Math.max(maxLen, substr.size);
        } else {
            substr.delete(s[left]);
            left ++;
        }
    }

    return maxLen;
};

// Solution 2 Map() -- Sliding window optimized
// Use 'seen' map to keep the track of char and its index
// If a char exists in seen
//      - move the left pointer to the seen.get(char) index + 1
//      - Update the char's value in the map with the new index

// Time: O(n)
const lengthOfLongestSubstring2 = function(s) {
    let [left, right, maxLen] = [0,0,0];
    const seen = new Map();
    const size = s.length;
// quick exit if maxLen is bigger than the rest of the checking length
                  //                   |
    while (right < size && (size - left > maxLen)) {
        const char = s[right];
        if (seen.has(char)) {
            left = Math.max(seen.get(char) + 1, left);
        }

        maxLen = Math.max(maxLen, right - left + 1);
        seen.set(char, right);
        right ++
    }

    return maxLen;

};

// const lengthOfLongestSubstring = function (s) {
//     let maxLen = 0;
//     let size = s.length;
//     if (size <= 1) return size;
//
//     const helper = (start, ss) => {
//         if ((start === size) || ss.has(s[start])) {
//             maxLen = Math.max(ss.size, maxLen);
//             return;
//         }
//         ss.add(s[start]);
//         return helper(start + 1, ss);
//     }
//
//     for (let i = 0; i < size; i++) {
//         if (size - i <= maxLen) return maxLen;
//         const ss = new Set();
//         console.log('i', i)
//         helper(i, ss);
//     }
//
//     return maxLen;
// };


console.log('lengthOfLongestSubstring', lengthOfLongestSubstring1('dvdf') === 3);
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring1('abcabcbb') === 3);
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring1('pwwkew') === 3);
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring1('bbbbb') === 1);

