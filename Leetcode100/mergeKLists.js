/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head1 = new ListNode(1);
const [n2, n3] = [new ListNode(4), new ListNode(5)];
head1.next = n2;
n2.next = n3;

const head2 = new ListNode(1);
const [n4, n5] = [new ListNode(3), new ListNode(4)];
head2.next = n4;
n4.next = n5;

const head3 = new ListNode(2);
const n6 = new ListNode(6);
head3.next = n6;

const lists = [head1, head2, head3];


// Solution 1: MergeTwoLists
// while there are more than one list in the lists
    // 1. shift two lists -> compare -> mergeTwoLists into one list
    // 2. push the mergedLists into the lists

// Time: O(n) Space: O(1)
const mergeTwoLists = (l1, l2) => {
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

    runner.next = l1 ? l1 : l2;

    return preHead.next;
};

const mergeKLists = (lists) => {
    if (lists.length === 0) return null;

    // priority queue
    while (lists.length > 1) {
        const [l1, l2] = [lists.shift(), lists.shift()];
        const mergedList = mergeTwoLists(l1, l2);
        lists.push(mergedList);
    }

    return lists[0];
};


console.log('mergeKLists', mergeKLists(lists));
console.log('mergeKLists', mergeKLists([[], []]));
console.log('mergeKLists',  mergeKLists([]));
