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
// Time: O(n)  Space: O(n)
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
