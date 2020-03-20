/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Note: Do not modify the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1
    3 -> 2 -> 0 -> - 4
         |___________|

Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

Input: head = [1,2], pos = 0
    1 -> 2
    |____|

Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
    1
Output: no cycle
Explanation: There is no cycle in the linked list.

Follow-up:
Can you solve it without using extra space?
 */

const{ ListNode, node1, node2, node3, node4, node5, node6, node7} = require('./linkedListCycle');
// console.log('node1', node1);

// Solution  Two Pointers
// Time: O(n)  Space: O(1)
const detectCycle = function(head) {
    console.log('detecting');
    if (!head || !head.next ) return null;
    let [slow, fast, runner] = [head, head, head];

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        // move the pointers first, then check
        // because the slow, fast start at the same location
        if (slow === fast) {
            while (runner !== slow) {
                // when slow and fast meet
                // fast runs twice of the slow's distance
                runner = runner.next;
                slow = slow.next;
            }

            return runner;
        }
    }
    return null;
};


// Solution 2 Hashtable
// Time: O(n)  Space: O(n)
const detectCycle2 = (head) => {
    const seen = new Set();

    while (head) {
        if (seen.has(head)) return head;
        seen.add(head);
        head = head.next;
    }

    return null;
};

console.log('detectCycle', detectCycle2(node1) === node2);
console.log('detectCycle', detectCycle2(node5) === node5);
console.log('detectCycle', detectCycle2(node7) === null);
