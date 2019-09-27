/*  79 Word Search
Given a 2D board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cell,
where "adjacent" cells are those horizontally or vertically neighboring.
The same letter cell may not be board more than once.

Example:

board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 */

// Solution: backtrack
// Time: O(n^2)  space: O(n) -- created a word array
const exist = (board, word) => {
    if (board.length === 0) return false;

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (existHelper(board,  word.split(''), 0, r, c)) {
                return true;
            }
        }
    }

    return false;
};


const existHelper = (board,  wordArray, idx, r, c) => {
    if (idx === wordArray.length) return true;
    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) return false; // out of range
    // looking for the start char
    if (board[r][c] === true || board[r][c] !== wordArray[idx]) return false; // if board element is used || not the char
    // if char is found, save the element value and set the element true
    let tmp = board[r][c];
    board[r][c] = true;

    // look for the next char at four directions
    // right
    let exist = existHelper(board,  wordArray, idx + 1, r, c + 1);
    if (exist) return true;
    // left
    exist = existHelper(board,  wordArray, idx + 1, r, c - 1);
    if (exist) return true;
    // up
    exist = existHelper(board,  wordArray, idx + 1, r - 1, c);
    if (exist) return true;
    // down
    exist = existHelper(board,  wordArray, idx + 1, r + 1, c);
    if (exist) return true;

    // if next char not found in four directions, set the element value back to tmp
    board[r][c] = tmp;
    return false;  // look for the start char again
};


const  board =
    [
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ];

const word1= 'ABCE';
const word2 ='SEE';
const word3 = 'ABCB';

// console.log('word1', exist(board, word1));
console.log('word2', exist(board, word2));
// console.log('word3', exist(board, word3));
