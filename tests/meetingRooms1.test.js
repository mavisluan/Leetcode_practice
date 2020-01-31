const { assert } = require('chai');
const { canAttendMeetings, canAttendMeetings2, canAttendMeetings3 } = require('../Leetcode100/meetingRooms1');

const test = fn => {
    describe('MeetingRooms', () => {
        describe('MeetingRooms1', () => {
            it('Should return a boolean', () => {
                assert.typeOf(
                    fn([
                        [0, 30],
                        [5, 10],
                        [15, 20],
                    ]),
                    'boolean'
                );
            });

            it('Should return false when meetings overlap', () => {
                assert.equal(
                    fn([
                        [0, 30],
                        [5, 10],
                        [15, 20],
                    ]),
                    false
                );
            });

            it('Should return true when meetings do not overlap', () => {
                assert.equal(
                    fn([
                        [7, 10],
                        [2, 4],
                    ]),
                    true
                );
            });

            it('Should return true when intervals are empty', () => {
                assert.equal(fn([]), true);
            });
        });
    });
};

test(canAttendMeetings);
test(canAttendMeetings2);
test(canAttendMeetings3);
