/**
22. Generate Parentheses         Medium

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

/** Time complexity analysis From Jack-O
  * The way I like to think about the runtime of backtracking algorithms is O(b^d),
  *  where b is the branching factor and d is the maximum depth of recursion.
Backtracking is characterized by a number of decisions b that can be made at each level of recursion. 
If you visualize the recursion tree, this is the number of children each internal node has. 
You can also think of b as standing for "base", which can help you remember that b is the base of the exponential.

If we can make b decisions at each level of recursion, and we expand the recursion tree to d levels (ie: each path has a length of d), 
then we get b^d nodes. Since backtracking is exhaustive and must visit each one of these nodes, the runtime is O(b^d).
 */

function generateParenthesis(n) {
    const res = [];

    function go(l, r, s) {
        console.log(`current str is ${s}, l:${l}, r:${r}`);
        // l: left remaining, r: right remaining
        if (l > r) return; // The number of '(' should be always >= ')'

        if (l === 0 && r === 0) {
            res.push(s);
            return;
        }

        if (l > 0) go(l - 1, r, `${s}(`);
        if (r > 0) go(l, r - 1, `${s})`);
    }

    go(n, n, '');
    return res;
}

// console.log('generateParenthesis', generateParenthesis(3));

// Solution 2 backtrack (array)
function backtrack(res, len, curr = [], presum = 0) {
    // console.log(`curr:${curr}, presum:${presum}, currLen: ${curr.length}`);
    if (curr.length === len) {
        res.push(curr.join(''));
        return;
    }
    if (presum < len - curr.length) {
        // console.log('push (');

        curr.push('(');
        backtrack(res, len, curr, presum + 1);
        curr.pop();
    }
    if (presum > 0) {
        // console.log('push )');

        curr.push(')');
        backtrack(res, len, curr, presum - 1);
        curr.pop();
    }
}

const generateParenthesis2 = function(n) {
    const res = [];
    backtrack(res, 2 * n);
    return res;
};
console.log('generateParenthesis2', generateParenthesis2(3));
