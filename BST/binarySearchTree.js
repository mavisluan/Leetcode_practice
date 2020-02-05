/* eslint-disable no-console */
// Node class
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree class
class BinarySearchTree {
    constructor() {
        // root of the tree
        this.root = null;
    }

    // function to be implemented
    insert(val) {
        const newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertHelper(this.root, newNode);
        }
    }

    remove(val) {
        if (this.root === null) return;
        this.root = this.removeHelper(this.root, val);
    }

    // Helper function
    insertHelper(node, newNode) {
        if (newNode.val < node.val) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertHelper(node.left, newNode);
            }
        } else if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertHelper(node.right, newNode);
        }
    }

    removeHelper(node, val) {
        if (val < node.val) {
            node.left = this.removeHelper(node.left, val);
            return node;
        }
        if (val > node.val) {
            node.right = this.removeHelper(node.right, val);
            return node;
        }
        if (node.left === null && node.right === null) {
            return null;
        }
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;

        const replaceVal = this.findMinNode(node.right).val;
        node.val = replaceVal;
        node.right = this.removeHelper(node.right, replaceVal);
        return node;
    }

    findMinNode(node) {
        if (node.left === null) return node;

        return this.findMinNode(node.left);
    }

    getRootNode() {
        return this.root;
    }

    inorder(node) {
        if (node) {
            this.inorder(node.left);
            console.log('in order', node.val);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node) {
            console.log('preorder', node.val);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log('postorder', node.val);
    }

    search(node, val) {
        if (val === node.val) return node;
        if (val < node.val) {
            return this.search(node.left, val);
        }
        return this.search(node.right, val);
    }
}

// const BST = new BinarySearchTree();
// BST.insert(15);
// BST.insert(25);
// BST.insert(10);
// BST.insert(7);
// BST.insert(22);
// BST.insert(17);
// BST.insert(13);
// BST.insert(5);
// BST.insert(9);
// BST.insert(27);
// BST.remove(27);
// BST.remove(22);
// BST.remove(10);

// const { root } = BST;
// console.log('root', root);
// console.log('min node', BST.findMinNode(root));
// BST.inorder(root);
// BST.preorder(root);
// console.log('search 25', BST.search(root, 25));

module.exports = { Node, BinarySearchTree };
