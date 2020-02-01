const { assert } = require('chai');
const { minMeetingRooms } = require('../Leetcode100/meetingRooms2');

const test = fn => {
    describe('MeetingRooms2', () => {
        it('Should return a number', () => {
            assert.typeOf(
                fn([
                    [0, 30],
                    [5, 10],
                    [15, 20],
                ]),
                'number'
            );
        });

        it('Should return 2 when 2 meetings overlap', () => {
            assert.equal(
                fn([
                    [0, 30],
                    [5, 10],
                    [15, 20],
                ]),
                2
            );
        });

        it('Should return one when meetings do not overlap', () => {
            assert.equal(
                fn([
                    [7, 10],
                    [2, 4],
                ]),
                1
            );
        });

        it('Should return two when two meetings overlap', () => {
            assert.equal(
                fn([
                    [2, 11],
                    [6, 16],
                    [11, 16],
                ]),
                2
            );
        });

        it('Should return two when two meetings overlap', () => {
            assert.equal(
                fn([
                    [9, 10],
                    [4, 9],
                    [4, 17],
                ]),
                2
            );
        });

        it('Should return 0 when intervals are empty', () => {
            assert.equal(fn([]), 0);
        });

        it('Should return 0 when intervals are empty', () => {
            assert.equal(fn(null), 0);
        });
    });
};

test(minMeetingRooms);
test(minMeetingRooms);
