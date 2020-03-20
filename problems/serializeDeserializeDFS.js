/* eslint-disable no-shadow */
/* eslint-disable no-console */
/**
Time complexity : in both serialization and deserialization functions, we visit each node exactly once, thus the time complexity is O(N), where 
N is the number of nodes, i.e. the size of tree.

Space complexity : in both serialization and deserialization functions, we keep the entire tree, either at the beginning or at the end, therefore, the space complexity is O(N).
 */
const { testRoot, TreeNode } = require('../BT/binaryTree');

const serializeDFS = root => {
    if (!root) return [];

    const result = [];
    const helper = node => {
        if (!node) {
            result.push(null);
            return;
        }

        result.push(node.val);
        helper(node.left);
        helper(node.right);
    };

    helper(root);
    console.log('result', result);
    return result;
};

const deserializeDFS = data => {
    if (data.length === 0) return null;

    const root = new TreeNode(data.shift());
    const helper = node => {
        if (node === null) return null; // if node is null, return null as node.left or node.right
        const leftVal = data.shift();
        node.left = helper(leftVal === null ? null : new TreeNode(leftVal));
        const rightVal = data.shift();
        node.right = helper(rightVal === null ? null : new TreeNode(rightVal));
        return node; // if node is NOT null, return node as node.left or node.right
    };

    helper(root);

    return root;
};

const result = serializeDFS(testRoot);
deserializeDFS(result);
