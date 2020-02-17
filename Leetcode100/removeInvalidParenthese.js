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
const removeInvalidParentheses = s => {
    const answer = new Set();
    // Find out the number of misplaced left and right parentheses
    // Before a matching pair is found, each parenthesis is considered as invalid
    let [leftRem, rightRem] = [0, 0];
    for (const c of s) {
        if (c === '(') {
            leftRem++; // record the left parantheses
        } else if (c === ')') {
            // if there is no matching left paranthesis, then this right paran is misplaced, increase right paran count
            if (leftRem === 0) rightRem++;
            // if we have a left paranthese to match the right one, '(' and ')' are both valid,
            // so decrement count of left paran
            else leftRem--;
        }
    }

    const dfs = (index, left, right, leftRem, rightRem, cur) => {
        if (index === s.length) {
            // If we reach the end of the string, the counts of left and right paran are balanced
            // and no misplaced leftRem or rightRem left
            if (left === right && leftRem === 0 && rightRem === 0) {
                answer.add(cur);
            }
        } else if (s[index] === '(') {
            if (leftRem > 0) dfs(index + 1, left, right, leftRem - 1, rightRem, cur);
            dfs(index + 1, left + 1, right, leftRem, rightRem, `${cur}(`);
        } else if (s[index] === ')') {
            if (rightRem > 0) dfs(index + 1, left, right, leftRem, rightRem - 1, cur);
            if (left > right) dfs(index + 1, left, right + 1, leftRem, rightRem, `${cur})`);
        } else {
            // if current char is a letter, append it to curChar
            dfs(index + 1, left, right, leftRem, rightRem, cur + s[index]);
        }
    };

    dfs(0, 0, 0, leftRem, rightRem, '');
    return [...answer];
};
console.log('removeInvalidParentheses', removeInvalidParentheses(')()(')); // ["()"]

console.log('removeInvalidParentheses', removeInvalidParentheses(')(')); // [""]

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
