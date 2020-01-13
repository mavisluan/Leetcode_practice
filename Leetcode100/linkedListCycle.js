/*
141. Linked List Cycle
Easy
Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed)
in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1
    3 -> 2 -> 0 -> - 4
         |___________|

Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

Input: head = [1,2], pos = 0
    1 -> 2
    |____|

Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
    1
Output: false
Explanation: There is no cycle in the linked list.
Follow up:

Can you solve it using O(1) (i.e. constant) memory?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val) {
    this.val = val;
     this.next = null;
}

const [node1, node2, node3, node4] = [new ListNode(3), new ListNode(2), new ListNode(0), new ListNode(-4)];
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

// console.log('node1', node1);
// console.log('node1.next', node1.next)
// console.log('node2.next', node2.next)
// console.log('node3.next', node3.next)
// console.log('node4.next', node2.next)

const [node5, node6] = [new ListNode(1), new ListNode(5)];
node5.next = node6;
node6.next = node5;

const node7 = new ListNode(1);

// Solution -> Two Pointers
// Time: O(n)  Space: O(1)
const hasCycle = function(head) {
    if (!head || !head.next ) return false;
    let [slow, fast] = [head, head];

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        // move the pointers first, then check
        // because the slow, fast start at the same location
        if (slow === fast) return true;
    }
    return false;
};


// console.log('hasCycle', hasCycle(node1)=== true);
// console.log('hasCycle', hasCycle(node5)=== true);
// console.log('hasCycle', hasCycle(node7)=== false);

module.exports= { ListNode, node1, node2, node3, node4, node5, node6, node7};
