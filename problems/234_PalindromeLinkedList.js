/**
 * 234. Palindrome Linked List  -- Easy
Given a singly linked list, determine if it is a palindrome.
Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
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
// Solution 1:  Convert SLL into an array and then validate the array
// Time: O(N) Space: O(N)
const isPalindrome = (head) => {
  if (!head) return true;
  const stack = [];
  let runner = head;
  while (runner) {
    stack.push(runner.val);
    runner = runner.next;
  }

  let [s, e] = [0, stack.length - 1];
  while (s < e) {
    if (stack[s] !== stack[e]) return false;
    s++;
    e--;
  }

  return true;
};

// Big thanks to FanHaoFighting's solution
// Solution 2 Recursion -- Use recursive to get the value from end to beginning of the node , meanwhile another node cur from begining to end, compare the values during the process .
// Time: O(N)   Space: O(N)
const isPalindromeRecursion = (head) => {
  let cur = head;
  const travel = (node) => {
    if (!node) {
      return true;
    }
    // preBoolean carries the result of the last fun call
    const preBoolean = travel(node.next); // move to the next node
    const curBoolean = cur.val === node.val;
    cur = cur.next;
    return preBoolean && curBoolean;
  };
  return travel(head);
};


/* Big thanks to adam1's solution
Solution 3 Iterate throught the SLL and add prev property to each node, then compare
Time: O(N)  Space: O(1)
Steps:

Create a previous pointer ('prev') on the first run.
Run through the linked list again, comparing the front to the back.
If one value from the left side doesn't match it's counterpart on the right, return false. Else, return true.
*/
const isPalindromeAddPrevPointer = (head) => {
  if (!head) return true;
  let [prev, first] = [head, head];

  while (first.next) {
    first = first.next;
    first.prev = prev;
    prev = prev.next;
  }
  // after iteration, prev and first are at the end of the SLL

  first = head; // move first to the beginning of the SLL
  while (first.next && prev.prev) {
    if (first.val !== prev.val) return false;
    first = first.next;
    prev = prev.prev;
  }

  return true;
};


/**
1. Find the end of the first half.
2. Reverse the second half.
3. Determine whether or not there is a palindrome.
4. Restore the list.
5. Return the result.
 */
// Time: O(N)  Space: O(1)
const findFirstHalfEnd = (head) => {
  let [slow, fast] = [head, head];
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow; // slow stops in the middle of the SLL (end of first half list)
};

const reverseList = (head) => {
  let [prev, curr] = [null, head];
  while (curr) {
    const { next } = curr;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev; // prev is the new head of the reversed list (start of the second list)
};

const isPalindromeReverseList = (head) => {
  if (!head || !head.next) return true;

  const firstHalfEnd = findFirstHalfEnd(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);

  let first = head;
  let last = secondHalfStart;
  let result = true;
  // validate Palindrome
  while (first && last) {
    if (first.val !== last.val) result = false;
    first = first.next;
    last = last.next;
  }

  firstHalfEnd.next = reverseList(secondHalfStart); // restore the second half of list
  return result;
};
