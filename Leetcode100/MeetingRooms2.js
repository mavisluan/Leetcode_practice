/* eslint-disable no-plusplus */
/*
253. Meeting Rooms II    Medium
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1

 */

/*
252. Meeting Rooms
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: [[7,10],[2,4]]
Output: true
 */
// Solution 1: Bruce force
//  Time: O(n^2) Space: O(1)
// Since it's not sorted,
// consider two cases: 1)  a[0] >= b[0]   2) a[0] >= b[0]

const overLap = (interval1, interval2) =>
    // If the earliest end time is bigger than the latest start time, overLap is true
    Math.max(interval1[0], interval2[0]) < Math.min(interval1[1], interval2[1]);

const canAttendMeetings = function(intervals) {
    if (intervals === null || intervals.length <= 1) return true;
    const size = intervals.length;

    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if (overLap(intervals[i], intervals[j])) return false;
        }
    }

    return true;
};

// Solution2 Sorting
// Time: O(n Logn) Space: O(1)
// 1. Sort the intervals array by meeting's starting time (intervals[i][0])
// 2. If the first meeting's end time > the next meeting's start time --> return false
const canAttendMeetings2 = function(intervals) {
    if (intervals === null || intervals.length <= 1) return true;
    const size = intervals.length;

    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < size - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0]) return false;
    }

    return true;
};

module.exports = {
    canAttendMeetings,
    canAttendMeetings2,
};
