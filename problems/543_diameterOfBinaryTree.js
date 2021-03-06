/**
543. Diameter of Binary Tree -- Easy
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree

          1
         / \
        2   3
       / \
      4   5
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// Reference: DawChihLiou
/**
 Solution: DFS
 To each node, calculate
    1) max depth of node.left
    2) max depth of node.right
    3) maxDiameter: Math.max(diameter, (max Left Depth + max Right Depth))
 */
// Time: O(N)  Space: O(N) --> Recursive call stack
const diameterOfBinaryTree = (root) => {
  let diameter = 0;

  const dfs = (node) => {
    if (!node) return 0;
    // For each node, calculate
    const left = dfs(node.left); // max edges to node's left
    const right = dfs(node.right); // max edges to node's right
    diameter = Math.max(diameter, (left + right));
    // max of maxDiameter and (maxLeftEdges + maxRightEdges)
    return Math.max(left, right) + 1; // Add root to the largest edge number
  };

  dfs(root);
  return diameter;
};
