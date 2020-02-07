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

// Solution 1 BFS
/*
1. Vars: stack: [], currNode: BTNode, result: []
2. stack =[root] 
3. While stack is not empty
    - Get currNode: node = stack.shift();
    - save currNode.val to result
    - push currNode's left & right nodes to stack
*/
const serializeBFS = root => {
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

// Solution 1 BFS
/*
1. Create root node with data.shift() (first val from data array)
2. stack = [root] 
3. While stack is not empty
    - Get currNode: node = stack.shift();
    - Get leftVal, rightVal with stack.shift();
    - Create and add left and right nodes to current Node;
    - push currNode's left & right nodes to stack  
*/
const deserializeBFS = function(data) {
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
