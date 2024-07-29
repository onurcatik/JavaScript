# 2D Arrays in JavaScript

In this tutorial, we will explore the concept of 2D arrays in JavaScript. A 2D array, also known as a multi-dimensional array, stores data in a matrix format consisting of rows and columns. This structure is particularly useful for applications such as games (e.g., tic-tac-toe, chess, Sudoku), spreadsheets, and image representation.

## Understanding 2D Arrays

A 2D array is an array of arrays, where each inner array represents a row in the matrix. Each element within the inner arrays represents a column.

### Example of a 2D Array

Consider the following 2D array:

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

In this example, the matrix consists of three rows and three columns. The structure can be visualized as follows:

```
1 2 3
4 5 6
7 8 9
```

### Creating a 2D Array

To create a 2D array in JavaScript, you define an array where each element is another array:

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

### Accessing Elements in a 2D Array

To access an individual element within the 2D array, you need to use two indices: the first index for the row and the second index for the column. Note that array indices start at 0.

For example, to access the element at the first row and first column:

```javascript
console.log(matrix[0][0]); // Output: 1
```

To change the value of an element, you use the same indexing method:

```javascript
matrix[0][0] = 'X';
console.log(matrix[0][0]); // Output: X
```

### Iterating Through a 2D Array

You can iterate through each element of a 2D array using nested loops. Here is an example that prints each element of the matrix:

```javascript
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

Alternatively, you can use the `for...of` loop to achieve the same result:

```javascript
for (const row of matrix) {
    for (const value of row) {
        console.log(value);
    }
}
```

### Modifying a 2D Array

You can modify elements within a 2D array to create patterns or play games such as tic-tac-toe. Below is an example where we modify the matrix to simulate a few moves in tic-tac-toe:

```javascript
matrix[0][0] = 'X'; // First row, first column
matrix[0][1] = 'O'; // First row, second column
matrix[0][2] = 'X'; // First row, third column
matrix[1][0] = 'O'; // Second row, first column
matrix[1][1] = 'X'; // Second row, second column
matrix[1][2] = 'O'; // Second row, third column
matrix[2][0] = 'X'; // Third row, first column
matrix[2][1] = 'O'; // Third row, second column
matrix[2][2] = 'X'; // Third row, third column
```

The resulting matrix will look like this:

```
X O X
O X O
X O X
```

### Non-Uniform 2D Arrays

The inner arrays of a 2D array do not need to have the same length. You can have non-uniform 2D arrays:

```javascript
const nonUniformMatrix = [
    [1, 2, 3, 'Z'],
    [4, 5],
    [7, 8, 9]
];
```

### Example: Representing a Telephone Number Pad

Here is an example of a 2D array representing a telephone number pad:

```javascript
const phonePad = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#']
];
```

You can iterate through this matrix similarly to previous examples to access or modify the elements.

## Conclusion

2D arrays in JavaScript provide a powerful way to store and manipulate data in a matrix format. They are essential for applications requiring grid-based data representation, such as games, spreadsheets, and image processing. Understanding how to create, access, and modify 2D arrays will enhance your ability to develop complex and interactive web applications.

This tutorial has covered the basics of creating and using 2D arrays in JavaScript. Future lessons will delve deeper into practical applications, including game development.