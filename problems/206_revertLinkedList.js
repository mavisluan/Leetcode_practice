/*
206. Reverse Linked List --Easy
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head = new ListNode(1);
const [n2, n3, n4, n5] = [new ListNode(2), new ListNode(3), new ListNode(4), new ListNode(5)];
head.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

console.log('head', head);

// Solution1 Iterative
// Time: O(n) Space: O(1)
const revertLinkedList = (head) => {
    let [prev, curr] = [head, head.next];

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};

// console.log('revertLinkedList', revertLinkedList(head));

// Solution2 Recursive
// Time:O(n)  Space: O(n)
const revertLinkedList2 = (head) => {
    if (!head || !head.next) return head;

    const prev = revertLinkedList2(head.next);
    head.next.next = head;
    head.next = null;

    return prev;
};

console.log('revertLinkedList2', revertLinkedList2(head));
