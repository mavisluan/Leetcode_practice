/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/*
1046. Last Stone Weight - Easy
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)


Example 1:

Input: [2,7,4,1,8,1]
Output: 1
Explanation:
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

Note:

1 <= stones.length <= 30
1 <= stones[i] <= 1000 */
/**
 * @param {number[]} stones
 * @return {number}
 */
// Solution 1 Sort + Recursion
// Time: O(N^2 logN) - recursive call N * sort N logN
// Space: O(N) - recursive call stack
const lastStoneWeight = (stones) => {
  if (stones.length === 1) return stones[0];
  stones.sort((a, b) => a - b); // Time: O(N logN)
  const bigger = stones.pop();
  const smaller = stones[stones.length - 1];
  stones[stones.length - 1] = bigger - smaller;
  return lastStoneWeight(stones);
};

// Solution 2 Sort + Iteration
// Time: O(N^2)
// Space: O(1) - O(N)  Modify the input
const lastStoneWeightIteration = (stones) => {
  stones.sort((a, b) => a - b); // O(N logN)

  while (stones.length > 1) { // O(N)
    const diff = stones.pop() - stones.pop();

    if (diff > 0) {
      let idx = 0;
      // find the nearest smaller num's index to diff
      while (diff > stones[idx]) { // O(N)
        idx++;
      }
      stones.splice(idx, 0, diff); // insert diff
    }
  }

  return stones.length ? stones[0] : 0;
};

// Solution 3 Heap/ Priority Queue (heapq is a binary heap, with O(log N) push and O(log N) pop . )
/* Time: O(N logN)
-- Converting an array into a Heap takes O(N)
-- the main loop iterates up to N-1 times.
  It's doing up to three O(log N) operation each time
  -- Two removes and one opitional add (drop constant 3)
  N * (O logN)

  Space: Python: O(1)  or  Java: O(N)
  In Python, converting a list to a heap is done in-place, requireing O(1) space complexity.
  Modifying the input has its pros and cons; it saves space, but it means that other functions can't use the same array.

  In Java, it's O(N) to create PriorityQueue.
*/
/**
 * Pseudocode using a max Heap
  define function last_stone_weight(stones):
    heap = a new Max-Heap
    add all stones to heap
    while heap contains more than 1 stone:
        heavy_stone_1 = remove max from heap
        heavy_stone_2 = remove max from heap
        if heavy_stone_1 is heavier than heavy_stone_2:
            new_stone = heavy_stone_1 - heavy_stone_2
            add new_stone to heap
    if heap is empty:
        return 0
    return last stone on heap
 */
/*
Note
 * While most programming languages have a Heap/ Priority Queue data structure, some,
 such as Python and Java, only have Min-Heap. Just as the name suggests,
 this is a Heap that instead of always returning the maximum item,
 it returns the minimum.
There are two solutions to this problem:

Multiply all numbers going into the heap by -1, and then multiply them by -1 to restore them when they come out.
Pass a comparator in (language-dependent).
 */
/* Python solution
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:

        # Make all the stones negative. We want to do this *in place*, to keep the
        # space complexity of this algorithm at O(1).
        for i in range(len(stones)):
            stones[i] *= -1

        # Heapify all the stones.
        heapq.heapify(stones)  // O(N)

        # While there is more than one stone left, remove the two
        # largest, smash them together, and insert the result
        # back into the heap if it is non-zero.
        while len(stones) > 1: Time: O(N - 1)
            stone_1 = heapq.heappop(stones)  // Time: O(log N)
            stone_2 = heapq.heappop(stones) // Time: O(log N)
            if stone_1 != stone_2:
                heapq.heappush(stones, stone_1 - stone_2) // Time: O(log N)

        # Check if there is a stone left to return. Convert it back
        # to positive.
        return -heapq.heappop(stones) if stones else 0

*/

// JavaScript PriorityQueue -- Reference Max04's solution
class PriorityQueue {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);
    let currentNodeIdx = this.heap.length - 1;
    let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    while (this.heap[currentNodeParentIdx] && value > this.heap[currentNodeParentIdx]) {
		  const parent = this.heap[currentNodeParentIdx];
		  this.heap[currentNodeParentIdx] = value;
		  this.heap[currentNodeIdx] = parent;
		  currentNodeIdx = currentNodeParentIdx;
		  currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    }
  }

  remove() {
	  if (this.heap.length < 3) {
      const toReturn = this.heap.pop();
      this.heap[0] = null;
      return toReturn;
	  }
	  const toRemove = this.heap[1];
	  this.heap[1] = this.heap.pop();
	  let currentIdx = 1;
	  let [left, right] = [2 * currentIdx, 2 * currentIdx + 1];
	  let currentChildIdx = this.heap[right]
		  && this.heap[right] >= this.heap[left] ? right : left;
	  while (this.heap[currentChildIdx] && this.heap[currentIdx] < this.heap[currentChildIdx]) {
      const currentNode = this.heap[currentIdx];
      const currentChildNode = this.heap[currentChildIdx];
      this.heap[currentChildIdx] = currentNode;
      this.heap[currentIdx] = currentChildNode;
		 currentIdx = currentChildIdx;
      [left, right] = [2 * currentIdx, 2 * currentIdx + 1];
      currentChildIdx = this.heap[right]
		  && this.heap[right] >= this.heap[left] ? right : left;
	  }
	  return toRemove;
  }
}

const lastStoneWeightHeap = (stones) => {
  const pq = new PriorityQueue();
  for (let i = 0; i < stones.length; i++) {
    pq.insert(stones[i]);
  }
  while (pq.heap.length > 2) {
    const x = pq.remove();
    const y = pq.remove();
    if (x !== y) {
      const max = Math.max(x, y);
      const min = Math.min(x, y);
      const z = max - min;
      pq.insert(z);
    }
  }
  return pq.remove();
};
