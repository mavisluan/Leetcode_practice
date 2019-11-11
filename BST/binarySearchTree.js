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
        if (node === null) return newNode;
        if (newNode.data < node.data) {
            node.left = this.insertHelper(node.left, newNode);
        } else if (newNode.data > node.data){
            node.right = this.insertHelper(node.right, newNode);
        }

        return node;
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
            if (node.right === null) return node.left;

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
    // getRootNode()
    // inorder(node)
    // preorder(node)
    // postorder(node)
    // search(node, data)
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
console.log('root', root);

console.log('min node', BST.findMinNode(root));
