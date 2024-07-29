const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);
console.log(matrix[0][0]);

// -----------------

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// -----------------

for (const row of matrix) {
    for (const value of row) {
        console.log(value);
    }
}

// -----------------

matrix[0][0] = 'X'; // First row, first column
matrix[0][1] = 'O'; // First row, second column
matrix[0][2] = 'X'; // First row, third column
matrix[1][0] = 'O'; // Second row, first column
matrix[1][1] = 'X'; // Second row, second column
matrix[1][2] = 'O'; // Second row, third column
matrix[2][0] = 'X'; // Third row, first column
matrix[2][1] = 'O'; // Third row, second column
matrix[2][2] = 'X'; // Third row, third column



 
