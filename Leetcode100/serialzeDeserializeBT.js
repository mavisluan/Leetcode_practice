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
const deserialize = function(data) {
    if (data.length === 0) return null;
    const root = new TreeNode(data.shift());
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.shift();
        const leftVal = data.shift();
        const rightVal = data.shift();

        node.left = leftVal !== null ? new TreeNode(leftVal) : null;
        node.right = rightVal !== null ? new TreeNode(rightVal) : null;

        if (node.left !== null) stack.push(node.left);
        if (node.right !== null) stack.push(node.right);
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
