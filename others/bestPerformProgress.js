/*
Give an array of students and an array of students' scores.
Find out the best performance of an individual student.
The lowest score's index has to be less than the higher score's index.

["Mary", "Steven", "Steven", "Mary", "Steven"]
[19,      70,        99,       80,     100]

 result: 61

 ["M", "S", "J", "M", "S", "B"]
 [100, 500, 380, 99, 20, 50;
 result: 0

 ["M", "S", "J", "M", "S", "B", "M"]
 [ 20, 100,  80, 100,  20, 50, 10]
 result: 80
 */

const findBestProgress = (students, scores) => {
    const map = {};
    let result = 0;
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const score = scores[i];
        if (student in map) {
            let [lowestScore, maxDiff] = map[student];
            maxDiff = Math.max(maxDiff, score - lowestScore);
            lowestScore = Math.min(lowestScore, score);
            map[student] = [lowestScore, maxDiff]
        } else {
            map[student] = [score, 0];
        }
    }

    for (let student in map) {
        result = Math.max(map[student][1], result)
    }
    return result;
};

const students1 = ["Mary", "Steven", "Steven", "Mary", "Steven"];
const scores1 = [19, 70, 99, 80, 100];
const students2 = ["M", "S", "J", "M", "S", "B"];
const scores2 = [100, 500, 380, 99, 20, 50];
const students3 = ["M", "S", "J", "M", "S", "B", "M"];
const scores3 = [20, 100, 80, 100, 20, 50, 10];

console.log('findBestProgress', findBestProgress(students1, scores1));
console.log('findBestProgress', findBestProgress(students2, scores2));
console.log('findBestProgress', findBestProgress(students3, scores3));
