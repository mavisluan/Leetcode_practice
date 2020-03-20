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
const minMeetingRooms = function(intervals) {
    if (intervals === null) return 0;
    const size = intervals.length;
    if (size <= 1) return size;

    let counter = 1;
    const [starts, ends] = [[], []];

    intervals.forEach(int => {
        starts.push(int[0]);
        ends.push(int[1]);
    });

    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let [s, e] = [1, 0];

    while (s < size && e < size) {
        if (starts[s] < ends[e]) {
            counter++;
        } else {
            e++;
        }

        s++;
    }

    return counter;
};

module.exports = {
    minMeetingRooms,
};
