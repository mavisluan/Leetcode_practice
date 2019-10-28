/*
621 Task Scheduler
Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters
represent different tasks. Tasks could be done without original order. Each task could be done in one interval.
For each interval, CPU could finish one task or just be idle.
However, there is a non-negative cooling interval n that means between two same tasks,
there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.
Example:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 */

// ["A","A","A","B","B","B"]   { A: 3, B: 3}   freq(A) = k = 3   n = 2  count: A, B = 2 ( freq(A) = 3 freq(B) = 3)
// A -> B -> / -> A -> B -> / -> A -> B
// |__2 + 1__|   |__2 + 1__|     count: 1 + 1
// (_______k - 1 groups____)
// ans = (k - 1) * ( n + 1) + count
// Edge case: if the tasks.length > ans, return tasks.length ( no idle task is needed)
// The result is influenced by char's most frequency, n and the number of chars with the same most frequency

// Solution 1: Array of charCode
// create an array with 26 zeros (each char correspond to arr[index], index = currentCharCode - 'A'.charCodeAt)
// [ 0, 0, 0 .......0]
// [ A, B, C .......Z]

// Time: O(n) Space: O(1)
function leastInterval(tasks, n) {

    const arr = new Array(26).fill(0);
    for (let t of tasks) {
        arr[t.charCodeAt(0) - 'A'.charCodeAt(0)]++; // count char's frequency
    }

    arr.sort((a, b) => a - b);  // after sorting, the most frequent char is in the end (index 25)

    let i = 25;
    while (i >= 0 && arr[i] === arr[25]) {
        i--;
    }

    return Math.max(
        // case 1
        // AB...AB... = (arr[25] - 1) * (n + 1)
        // AB...AB...AB = (arr[25] - 1) * (n + 1) + (25 - i)
        (arr[25] - 1) * (n + 1) + (25 - i),
                //freq(A)               // count
        // case 2
        // e.g. (ABC)(ABD)(ABEF)
        tasks.length,
    );
}


// console.log('leastInterval', leastInterval(["A","A","A","B","B","B"], 2))

// Solution 2 hashMap
// Time: O(n) Space: O(n)
const leastInterval2 = (tasks, n) => {
    if (n === 0) return tasks.length;

    const map = {}; // count and record each task's frequency
    for (let t of tasks) {
        map[t] = map[t] + 1 || 1;
    }

    let max = 0; // task max frequency
    for (let t in map) {
        max = Math.max(max, map[t]);
    }

    let count = 0; // count the number of tasks with the same max frequency
    for (let t in map){
        if (map[t] === max) count ++;
    }

    return Math.max(
        // case 1
        // AB...AB... = (max - 1) * (n + 1)
        // AB...AB...AB = (max - 1) * (n + 1) + count
        (max - 1) * (n+1) + count,
        // case 2
        // e.g. (ABC)(ABD)(ABEF)
        tasks.length,
    )
};

console.log('leastInterval', leastInterval2(["A","A","A","B","B","B"], 2))
