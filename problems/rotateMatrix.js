// Rotate the matrix IN-PLACE by 90 degrees (clockwise).

// Solution1 Transpose and then reverse
// Time: O(n**2) Space: O(1)
const rotateMatrix1 = (matrix) => {
    const n = matrix.length;
    // Transpose matrix(Switch diagonally)
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    console.log('transpose', matrix);
    // Reverse each row
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            [matrix[i][j], matrix[i][n - j - 1]] = [matrix[i][n - j - 1], matrix[i][j]];
        }
    }
    console.log('reverse', matrix);
};


// Solution2 Rotate Four rectangles
// Time: O(n**2) Space: O(1)
// Rotate rectangles from outside to inside
const rotateMatrix2 = (matrix) => {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return;

    let n = matrix.length;
    let [top, bottom, left, right] = [0, n - 1, 0, n - 1];

    while (n > 1) {
        for (let i = 0; i < n - 1; i++) {
            let tmp = matrix[top][left + i];
            matrix[top][left + i] = matrix[bottom - i][left];
            matrix[bottom - i][left] = matrix[bottom][right - i];
            matrix[bottom][right - i] = matrix[top + i][right];
            matrix[top + i][right] = tmp;
        }
        top++;
        left++;
        bottom--;
        right--;
        n -= 2;
    }
    console.log('rotated', matrix);
};


const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const matrix2 = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
];

const matrix3 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

rotateMatrix2(matrix1);
rotateMatrix2(matrix2);
rotateMatrix2(matrix3);
