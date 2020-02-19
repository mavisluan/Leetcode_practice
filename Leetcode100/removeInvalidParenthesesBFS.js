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
Solutions from AminiCK
The idea - BFS
Build a tree where the root node is the given string, and each level(child nodes), we are trying to remove 1 parentheses from the previous nodes.
At some level, we will remove enough parentheses to generage a valid string, and we stop going to deeper levels at that point.
 */

/**
 * 
 1. isValid - to check if str has valid parantheses by counting "("s and ")"s
    - "(", count ++ 
    - ")", count --
    - Valid str should have balanced "(" and ")", count === 0
    - if count < 0, means more ")" than "(" --> NOT valid
 */
const removeInvalidParenthesesBFS = s => {
    if (s.length === 0 || s === null) return [''];

    const isValid = s => {
        let count = 0;
        for (const c of s) {
            if (c === '(') count++;
            else if (c === ')') {
                count--;
                if (count < 0) return false;
            }
        }
        return count === 0;
    };

    // Generate all possible children nodes
    const queue = [s];
    const result = [];
    let done = false;

    while (queue.length > 0) {
        console.log('queue', queue);

        const node = queue.shift();
        if (isValid(node)) {
            result.push(node);
            done = true;
        }

        if (!done) {
            for (let i = 0; i < node.length; i++) {
                if (node[i] === '(' || node[i] === ')') {
                    // prep the child node by removing the current parantheses
                    const temp = node.substring(0, i) + node.substring(i + 1);
                    if (!queue.includes(temp)) queue.push(temp);
                    if (node[i] === '(') {
                        while (node[i + 1] === '(') i++;
                    } else while (node[i + 1] === ')') i++;
                }
            }
        }
    }

    return result;
};

console.log('removeInvalidParenthesesBFS', removeInvalidParenthesesBFS(')()(')); // ["()"]
// console.log('removeInvalidParenthesesBFS', removeInvalidParenthesesBFS('(a)())()')); // ["(a)()()", "(a())()"]
// console.log('removeInvalidParenthesesBFS', removeInvalidParenthesesBFS(')(')); // [""]
