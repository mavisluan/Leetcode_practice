/* eslint-disable no-console */
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

const testRoot = new TreeNode(1);
testRoot.left = new TreeNode(2);
testRoot.right = new TreeNode(5);
const node2 = testRoot.left;
node2.left = new TreeNode(3);
node2.right = new TreeNode(4);

// console.log('testRoot', testRoot);

module.exports = { TreeNode, testRoot };
