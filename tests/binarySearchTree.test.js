const { assert } = require('chai');
const { isValidBST } = require('../Leetcode100/validateBST.js');
const { Node, BinarySearchTree } = require('../BST/binarySearchTree');

const createBST = arr => {
    const BST = new BinarySearchTree();
    arr.forEach(val => BST.insert(val));
    return BST;
};

describe('BinarySearchTree', () => {
    const node = new Node(30);

    describe('Node', () => {
        it('should return an instance of Node', () => {
            assert.instanceOf(node, Node);
        });

        it('should include left, right node with its own value 30', () => {
            assert.include(node, { val: 30, left: null, right: null });
        });
    });

    describe('BinarySearchTree', () => {
        const bst = new BinarySearchTree();
        it('Should return an instance of BinarySearchTree', () => {
            assert.instanceOf(bst, BinarySearchTree);
        });

        it('should include a root whose value is null in a new BST', () => {
            assert.include(bst, { root: null });
        });

        // INSERT
        it('should has a root after inserting a node to the empty bst', () => {
            bst.insert(30);
            // assert.equal(bst.root.val, 30);
            // assert.include(bst.root, { val: 30, left: null, right: null });
            assert.deepInclude(bst, { root: { val: 30, left: null, right: null } });
        });

        it('should insert the node to the left if it is smaller than the root', () => {
            bst.insert(30);
            bst.insert(25);

            assert.include(bst.root.left, { val: 25, left: null, right: null });
        });

        // REMOVE
        it('should remove the node with the same value', () => {
            bst.remove(25);

            assert.notDeepInclude(bst, { val: 30, left: null, right: null });
        });

        // it('should be an empty bst again if the root is removed', () => {
        //     bst.remove(30);
        //     assert.include(bst, { root: null });
        // });

        it('Should return true if the tree is valid', () => {
            const bst1 = createBST([15, 25, 10, 7, 22]);
            assert.equal(isValidBST(bst1), true);
        });
    });
});
