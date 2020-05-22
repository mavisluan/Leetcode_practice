/*
2. Add Two Numbers  Medium

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

// console.log('l1', l1)
// console.log('l2', l2)

// Solution
// Time: O(m + n) Space: O(max(m, n)) The length of the new list is at most max(m,n) + 1
const addTwoNumbers = (l1, l2) => {
    let carry = 0;
    let result = null;
    let [cur1, cur2, curR] = [l1, l2, null];
    while (cur1 || cur2 || carry > 0) {
        const n1 = (cur1 === null) ? 0 : cur1.val;
        const n2 = (cur2 === null) ? 0 : cur2.val;
        const sum = n1 + n2 + carry;
        carry = Math.floor(sum / 10);
        if (result === null) {
            result = new ListNode(sum % 10);
            curR = result;
        } else {
            curR.next = new ListNode(sum % 10);
            curR = curR.next;
        }
        cur1 = cur1 ? cur1.next : null;
        cur2 = cur2 ? cur2.next : null;
    }

    return result;
};

console.log('addTwoNumbers', addTwoNumbers(l1, l2));
