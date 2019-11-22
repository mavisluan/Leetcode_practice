// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree class
class BinarySearchTree {
    constructor (){
        // root of the tree
        this.root = null;
    }

    // function to be implemented
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertHelper(this.root, newNode);
        }
    }
    remove(data) {
        if (this.root === null) return;
        this.root = this.removeHelper(this.root, data);
    }

    // Helper function
    insertHelper(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertHelper(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertHelper(node.right, newNode);
            }
        }
    }

    removeHelper(node, data) {
        if (data < node.data) {
            node.left = this.removeHelper(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.removeHelper(node.right, data);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left === null)  return node.right;
            else if (node.right === null) return node.left;

            const replaceVal = this.findMinNode(node.right).data;
            node.data = replaceVal;
            node.right = this.removeHelper(node.right, replaceVal);
            return node;
        }
    }

    findMinNode(node) {
        if (node.left === null) return node;
        else {
           return this.findMinNode(node.left);
       }
    }
    getRootNode() {
        return this.root;
    }

    inorder(node) {
        if (node) {
            this.inorder(node.left);
            console.log('in order', node.data);
            this.inorder(node.right);
        }
    }
    preorder(node) {
        if (node) {
            console.log('preorder', node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    postorder(node) {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log('postorder', node.data);
    }

    search(node, data) {
        if (data === node.data) return node;
        else if (data < node.data) {
            return this.search(node.left, data);
        } else {
            return this.search(node.right, data);
        }
    }
}

const BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
BST.remove(27);
BST.remove(22);
BST.remove(10);


const root= BST.root;
// console.log('root', root);
// console.log('min node', BST.findMinNode(root));
// BST.inorder(root);
// BST.preorder(root);
console.log('search 25', BST.search(root, 25));
