const { assert } = require('chai');
const { isValidBST } = require('../Leetcode100/validateBST.js');
const { Node, BinarySearchTree } = require('../BST/binarySearchTree');

const createBST = arr => {
    const BST = new BinarySearchTree();
    arr.forEach(val => BST.insert(val));
    return BST;
};

describe('validateBST', () => {
    it('Should return a boolean', () => {
        const BST = createBST([2, 1, 3]);
        assert.typeOf(isValidBST(BST), 'boolean');
    });

    it('Should return true if it is a BST', () => {
        const BST = createBST([2, 1, 3]);

        assert.equal(isValidBST(BST), true);
    });

    it('Should return false if it is NOT a BST', () => {
        const root1 = new Node(5);
        root1.left = new Node(1);
        root1.right = new Node(4);
        root1.right.left = new Node(3);
        root1.right.right = new Node(6);

        assert.equal(isValidBST(root1), false);
    });

    it('Should return false if one child node val is equal to the parent val', () => {
        const root2 = new Node(1);
        root2.left = new Node(1);

        assert.equal(isValidBST(root2), false);
    });

    it('Should return true if the tree is empty', () => {
        assert.equal(isValidBST(null), true);
    });
});
