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

var canAttendMeetings = function(intervals) {
    const size = intervals.length;

    if (size <= 1) return true;

    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < size; i ++) {
        for ( let j = i + 1; j < size; j ++) {
            if (intervals[i][1] > intervals[j][1] && intervals[j][0] > intervals[i][1]) return false;

            if (intervals[i][1] > intervals[j][0]) return false;
        }
    }

    return true;
};
