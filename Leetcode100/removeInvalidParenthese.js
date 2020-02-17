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
const removeInvalidParentheses = function(s) {
    const res = [];
    let max = 0;
    dfs(s, '', 0, 0);
    return res.length !== 0 ? res : [''];

    function dfs(str, subRes, countLeft, maxLeft) {
        if (str === '') {
            if (countLeft === 0 && subRes !== '') {
                if (maxLeft > max) max = maxLeft;
                if (max === maxLeft && res.indexOf(subRes) === -1) res.push(subRes);
            }
            return;
        }
        if (str[0] === '(') {
            dfs(str.substring(1), `${subRes}(`, countLeft + 1, maxLeft + 1);
            dfs(str.substring(1), subRes, countLeft, maxLeft);
        } else if (str[0] === ')') {
            if (countLeft > 0) dfs(str.substring(1), `${subRes})`, countLeft - 1, maxLeft);
            dfs(str.substring(1), subRes, countLeft, maxLeft);
        } else {
            dfs(str.substring(1), subRes + str[0], countLeft, maxLeft);
        }
    }
};
