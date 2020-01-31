const { assert } = require('chai');
const { canAttendMeetings, canAttendMeetings2, minMeetingRooms } = require('../Leetcode100/meetingRooms2');

const test = fn1 => {
    describe('MeetingRooms', () => {
        describe('MeetingRooms1', () => {
            it('Should return a boolean', () => {
                assert.typeOf(
                    fn1([
                        [0, 30],
                        [5, 10],
                        [15, 20],
                    ]),
                    'boolean'
                );
            });

            it('Should return false when meetings overlap', () => {
                assert.equal(
                    fn1([
                        [0, 30],
                        [5, 10],
                        [15, 20],
                    ]),
                    false
                );
            });

            it('Should return true when meetings do not overlap', () => {
                assert.equal(
                    fn1([
                        [7, 10],
                        [2, 4],
                    ]),
                    true
                );
            });

            it('Should return true when intervals are empty', () => {
                assert.equal(fn1([]), true);
            });
        });
    });
};

test(canAttendMeetings);
test(canAttendMeetings2);

describe('MeetingRooms2', () => {
    it('Should return a number', () => {
        assert.typeOf(
            minMeetingRooms([
                [0, 30],
                [5, 10],
                [15, 20],
            ]),
            'number'
        );
    });

    it('Should return 2 when 2 meetings overlap', () => {
        assert.equal(
            minMeetingRooms([
                [0, 30],
                [5, 10],
                [15, 20],
            ]),
            2
        );
    });

    it('Should return one when meetings do not overlap', () => {
        assert.equal(
            minMeetingRooms([
                [7, 10],
                [2, 4],
            ]),
            1
        );
    });

    it('Should return 0 when intervals are empty', () => {
        assert.equal(minMeetingRooms([]), 0);
    });

    it('Should return 0 when intervals are empty', () => {
        assert.equal(minMeetingRooms(null), 0);
    });
});
