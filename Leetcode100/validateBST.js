// 98. Validate Binary Search Tree
/*
 Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 */

const isValidBST = function(root) {
    if (!root) return true;

    const helper = (node, min, max) => {
        if (!node) return true;
        if (node.val <= min || node.val >= max) return false;

        const left = helper(node.left, min, node.val);
        const right = helper(node.right, node.val, max);

        return left && right;
    };

    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

module.exports = {
    isValidBST,
};
