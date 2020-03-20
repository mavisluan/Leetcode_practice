/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// https://leetcode.com/problems/merge-two-sorted-lists/discuss/273962/JavaScript-Solution-with-Youtube-Video-Explains

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head1 = new ListNode(1);
const [n2, n3] = [new ListNode(2), new ListNode(4)];
head1.next = n2;
n2.next = n3;

const head2 = new ListNode(1);
const [n4, n5] = [new ListNode(3), new ListNode(4)];
head2.next = n4;
n4.next = n5;

// Iterative
// Time: O(m + n)  Space: O(1)
/*
    1. Create a preHead Node
    2. Set a runner pointer pointing to the preHead Node
    3. While l1 and l2 exists (l1, l2 are pointers that point to list 1's and list 2's nodes)
        - compare l1.val with l2.val
        - set runner.next = the smaller Node
        - move the smallerNode's pointer forward
        - move runner forward
    4. Connect the last node
        - if (l1 === null) runner.next = l2
        - else runner.next = l1
    5. Return the real head
        - return preHead.next
 */
const mergeTwoLists1= (l1, l2) => {
    const preHead = new ListNode(-1);
    let runner = preHead;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            runner.next = l1;
            l1 = l1.next;
        } else {
            runner.next = l2;
            l2 = l2.next;
        }

        runner = runner.next;
    }

    // only one of l1 and l2 exists
    runner.next = l1 ? l1 : l2;

    return preHead.next;
};

console.log('mergeTwoSortedLists1', mergeTwoLists1(head1, head2));

// Recursive
// 1. compare two nodes' vals
// 2. Recursive call with (smallerNode.next, biggerNode) --> Keep comparing until one node is null
// 3. Return the smaller node
// Time: O(m+n) --> Each recursive call increments the pointer to l1 or l2 by one until one reach the end (null)
// Space: O(m+n) --> The first call doesn't return until the ends of both l1 and l2 have reached (m +n) stacks
const mergeTwoLists2 = function (l1, l2) {
    if (!l1 || !l2) return (l1 ? l1 : l2); // if (l1 === null) return l2; if (l2 === null) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists2(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists2(l1, l2.next);
        return l2;
    }
};

console.log('mergeTwoSortedLists2', mergeTwoLists2(head1, head2));


// // Time: O( m * n ) Space: O(1)
// const mergeTwoLists1 = (l1, l2) => {
//     let node = l1;
//     if (!l1) return l2;
//     if (!l2) return l1;
//     if (!l1 || !l2) return null;
//     // move node to the last node of l1
//     while (node.next) {
//         node = node.next;
//     }
//     // connect l1 with l2
//     node.next = l2;
//     node = l1;
//
//     while (node) {
//         let curr = node.next;
//
//         while (curr) {
//             if (node.val > curr.val) {
//                 [curr.val, node.val] = [node.val, curr.val];
//             }
//             curr = curr.next;
//         }
//         node = node.next;
//     }
//     return l1;
// };
//
