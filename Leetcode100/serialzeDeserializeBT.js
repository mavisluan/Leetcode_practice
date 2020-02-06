/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => {
    if (!root) return [];

    let stack = [];
    const result = [root];

    while (stack.length > 0) {
        const node = stack.shift();
        if (!node) {
            result.push(null);
        } else {
            result.push(node.val);
            stack = [...stack, node.left, node.right];
        }
    }

    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
