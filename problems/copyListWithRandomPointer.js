/*
138. Copy List with Random Pointer   Medium
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]

Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]

Input: head = []
Output: []
Explanation: Given linked list is empty (null pointer), so return null.
 */

class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

const [node0, node1, node2, node3, node4] = [
    new Node(7, null, null), new Node(13, null, null),
    new Node(11, null, null), new Node(10, null, null),
    new Node(1, null, null),
];

node0.next = node1;
node1.next = node2;
node1.random = node0;
node2.next = node3;
node2.random = node4;
node3.next = node4;
node3.random = node2;
node4.random = node0;

// Solution 1 HashMap recursive
// Time: O(n) -> Make one pass over all list nodes  Space: O(n) --> use a hashMap to store old list nodes and new nodes
// 1. Track the visited node with Map()
// 2. Traverse the graph from head node
//  -- if head current node exists, return the node
//  -- if not, create a copy of the node and save (head, node) to Map()
// 3. Copy next and random pointer
    // cloned_node_for_current_node.next = copyRandomList(current_node.next);
    // cloned_node_for_current_node.random = copyRandomList(current_node.random);
const copyRandomList = (head) => {
    // HashMap saves old nodes as keys and new nodes as its values
    const visitedMap = new Map();

    const copyHelper = (head) => {
        if (!head) return null;
        // if current node has already been copied, return the cloned version of the node
        if (visitedMap.has(head)) return visitedMap.get(head);
        // Otherwise, create a new node with the value same as the old node (copy the node)
        const node = new Node(head.val, null, null);
        // Save the current node as key and copied node as value into the HashMap
        visitedMap.set(head, node);

        // Recursively copy the remaining linked list
        // node's next and random pointer
        node.next = copyHelper(head.next);
        node.random = copyHelper(head.random);

        return node;
    };

    return copyHelper(head);
};

const copyiedList = copyRandomList(node0);
console.log(copyiedList);

// Solution 2 Iterative
// Time: O(n)   Space: O(n)
const copyRandomList2 = (head) => {
    if (!head) return null;

    const visitedMap = new Map();
    // created a function to
    //  return the cloned node if exists (old node's value --> new node)
    //  create a new node, save it as value of old node's --> return the new Node
    const getClonedNode = (node) => {
        // if the node exists
        if (node) {
            // check if node is in the visitedMap
            if (visitedMap.has(node)) {
                return visitedMap.get(node);
            } else {
                const newNode = new Node(node.val, null, null);
                visitedMap.set(node, newNode);

                return visitedMap.get(node);
            }
        }

        return null;
    };

    // set two pointers -- to the oldNode and newNode
    let oldNode = head;
    let newNode = new Node (oldNode.val); // newNode currently only has value, next and random are null
    visitedMap.set(oldNode, newNode);
    // Iterate on the linked list until all nodes are cloned
    while (oldNode) {
        // Get the clones of the nodes referenced by random and next pointers
        newNode.random = getClonedNode(oldNode.random);
        newNode.next = getClonedNode(oldNode.next);
        // ------- newNode get the references of next and random---------///
        // Move one step ahead in the linked list
        oldNode = oldNode.next;
        newNode = newNode.next;
        // ----------Then next newNode doesn't next and random references---------//
    }

    return visitedMap.get(head)
    // after iteration, newNode is null
    // --> so we need to return the newHead through visitedMap
};


// Solution 3  Iterative with O(1) Space
// Time: O(n) Space: O(1)
const copyRandomList3 = (head) => {
    if (!head) return null;
    let oldNode = head;

    // Traverse the original list and clone the nodes as you go and place the cloned copy next to its original node
    while (oldNode) {
        const newNode = new Node(oldNode.val, null, null);
        newNode.next = oldNode.next;
        oldNode.next = newNode;
        oldNode = newNode.next;
    }

    oldNode = head; // Reset the pointer to the beginning of the list
    // Iterate the list, use the original nodes' random pointers to assign references to the random pointers for the cloned nodes
    while (oldNode) {
        const newNode = oldNode.next;
        if (oldNode.random) newNode.random = oldNode.random.next;
        oldNode = newNode.next;
    }

    let oldList = head;
    let newList = head.next;
    const newHead = head.next;
    // Correct the next pointers in oldList and newList
    // Connect oldList.next to the oldList node
    // Connect newList.next to the newList node
    // Move the two pointers
    while (oldList) {
        oldList.next = oldList.next.next;
        newList.next = (oldList.next) ? newList.next.next : null;
        oldList = oldList.next;
        newList = newList.next;
    }

    return newHead;
};
