/* 301. Remove Invalid Parentheses
Hard
Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
Example 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
Example 3:

Input: ")("
Output: [""] 
 */

/**
Solution 1 DFS
1. Compute the numbers of misplaced parantheses
    Find out the number of misplaced left and right parentheses
    Before a matching pair is found, each parenthesis is considered as invalid
    - '(' --> record the left parantheses
    - ')] --> if there is no matching left paranthesis, then this right paran is misplaced, increase right paran count
    --> if there is a left paranthese to match the right one, '(' and ')' are both valid, so decrement count of left paran

2. Generate valid strings
    For each "(" or ")", if leftRem or rightRem > 0, there are two options: 
    1) remove curChar  
    2) if curr is valid, append curChar and remove the next char
3. Append to the result
 */

const removeInvalidParentheses = s => {
    const answer = new Set();

    let [leftRem, rightRem] = [0, 0];
    for (const c of s) {
        if (c === '(') {
            leftRem++;
        } else if (c === ')') {
            if (leftRem === 0) rightRem++;
            else leftRem--;
        }
    }

    /**
     *
     * @param {index} - index of the str
     * @param {left} - left parantheses' number in currStr
     * @param {right} - right parantheses' number number in currStr
     * @param {leftRem} - number of misplaced left parantheses
     * @param {rightRem} - number of misplaced right parantheses
     * @param {cur} - current string (used to generate valid parantheses)
     */
    const dfs = (index, left, right, leftRem, rightRem, cur) => {
        if (index === s.length) {
            // If we reach the end of the string, the counts of left and right paran are balanced
            // and no misplaced leftRem or rightRem left, add cur to the answer
            if (left === right && leftRem === 0 && rightRem === 0) {
                answer.add(cur);
            }
        } else if (s[index] === '(') {
            // remove
            if (leftRem > 0) dfs(index + 1, left, right, leftRem - 1, rightRem, cur);
            // append "(" to curChar and increase the num of left paran
            dfs(index + 1, left + 1, right, leftRem, rightRem, `${cur}(`);
        } else if (s[index] === ')') {
            // remove
            if (rightRem > 0) dfs(index + 1, left, right, leftRem, rightRem - 1, cur);
            // append ")" to curChar and increase the num of right paran
            // if curr has more "(" than ")", it's valid --> append another ")"
            if (left > right) dfs(index + 1, left, right + 1, leftRem, rightRem, `${cur})`);
        } else {
            // if current char is a letter, append it to curChar
            dfs(index + 1, left, right, leftRem, rightRem, cur + s[index]);
        }
    };

    dfs(0, 0, 0, leftRem, rightRem, '');
    return [...answer]; // spread a set into an array  eg. Set { '(a())()', '(a)()()' } -->[ '(a())()', '(a)()()' ]
};
// console.log('removeInvalidParentheses', removeInvalidParentheses(')()(')); // ["()"]
// console.log('removeInvalidParentheses', removeInvalidParentheses('(a)())()')); // ["(a)()()", "(a())()"]
// console.log('removeInvalidParentheses', removeInvalidParentheses(')(')); // [""]

// Solutions from AminiCK
const removeInvalidParenthesesDFS = function(s) {
    // sanity check
    if (!s.length) return [''];
    /**
     * @param {Number} l - invalid '(' needs to be removed
     * @param {Number} r - invalid ')' needs to be removed
     * @param {Number} i - current position
     * @param {Number} a - current result assembly
     * @param {Number} c - bracket counter (check validness)
     * when c < 0, it means we have an extra ')' up to the current point,
     * which means the string will never be valid
     */
    const dfs = function(l, r, i, a, c) {
        if (l < 0 || r < 0 || c < 0) return;
        if (i === s.length) {
            if (l === 0 && r === 0 && c === 0) result.add(a);
            return;
        }

        if (s[i] === '(' || s[i] === ')') {
            const f = s[i] === '('; // flag
            dfs(l, r, i + 1, a + s[i], c + (f ? 1 : -1)); // keep
            dfs(l - (f ? 1 : 0), r - (f ? 0 : 1), i + 1, a, c); // remove
        } else {
            dfs(l, r, i + 1, a + s[i], c);
        }
    };

    // count invalid parentheses
    let lc = 0;
    let rc = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') lc++;
        else if (s[i] == ')') {
            if (lc > 0) lc--;
            else rc++;
        }
    }

    const result = new Set();
    dfs(lc, rc, 0, '', 0);
    return [...result.values()];
};

// const removeInvalidParentheses = function(s) {
//     const res = [];
//     let max = 0;
//     dfs(s, '', 0, 0);
//     return res.length !== 0 ? res : [''];

//     function dfs(str, subRes, countLeft, maxLeft) {
//         if (str === '') {
//             if (countLeft === 0 && subRes !== '') {
//                 if (maxLeft > max) max = maxLeft;
//                 if (max === maxLeft && res.indexOf(subRes) === -1) res.push(subRes);
//             }
//             return;
//         }
//         if (str[0] === '(') {
//             dfs(str.substring(1), `${subRes}(`, countLeft + 1, maxLeft + 1);
//             dfs(str.substring(1), subRes, countLeft, maxLeft);
//         } else if (str[0] === ')') {
//             if (countLeft > 0) dfs(str.substring(1), `${subRes})`, countLeft - 1, maxLeft);
//             dfs(str.substring(1), subRes, countLeft, maxLeft);
//         } else {
//             dfs(str.substring(1), subRes + str[0], countLeft, maxLeft);
//         }
//     }
// };
