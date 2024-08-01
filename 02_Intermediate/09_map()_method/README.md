# JavaScript `map()` Method

The `map()` method in JavaScript is a powerful tool for transforming arrays. It accepts a callback function and applies this function to each element of an array, returning a new array containing the results. This is a key distinction from the `forEach()` method, which does not return a new array.

## Syntax

```javascript
array.map(callback(currentValue, index, array), thisArg)
```

- **callback**: Function that is called for every element of `array`. Each time `callback` executes, the returned value is added to the new array.
  - **currentValue**: The current element being processed in the array.
  - **index** (optional): The index of the current element being processed.
  - **array** (optional): The array `map` was called upon.
- **thisArg** (optional): Value to use as `this` when executing `callback`.

## Examples

### Example 1: Squaring Numbers

Let's create an array of numbers and use the `map()` method to square each number.

```javascript
const numbers = [1, 2, 3, 4, 5];

function square(element) {
    return Math.pow(element, 2);
}

const squares = numbers.map(square);

console.log(squares); // Output: [1, 4, 9, 16, 25]
```

### Example 2: Cubing Numbers

We can extend the previous example by creating a function to cube each number and then use the `map()` method.

```javascript
function cube(element) {
    return Math.pow(element, 3);
}

const cubes = numbers.map(cube);

console.log(cubes); // Output: [1, 8, 27, 64, 125]
```

### Example 3: Uppercasing Strings

We can also use the `map()` method to transform an array of strings. Here, we'll create an array of student names and convert each name to uppercase.

```javascript
const students = ['SpongeBob', 'Patrick', 'Squidward', 'Sandy'];

function uppercase(element) {
    return element.toUpperCase();
}

const studentsUpper = students.map(uppercase);

console.log(studentsUpper); // Output: ['SPONGEBOB', 'PATRICK', 'SQUIDWARD', 'SANDY']
```

### Example 4: Lowercasing Strings

Similarly, we can convert each name to lowercase.

```javascript
function lowercase(element) {
    return element.toLowerCase();
}

const studentsLower = students.map(lowercase);

console.log(studentsLower); // Output: ['spongebob', 'patrick', 'squidward', 'sandy']
```

### Example 5: Formatting Dates

In this example, we will use the `map()` method to reformat dates. Different regions may format dates differently, so we will rearrange the order of the dates using a callback function.

```javascript
const dates = ['2024-01-10', '2025-02-20', '2026-03-30'];

function formatDate(element) {
    const parts = element.split('-');
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDate);

console.log(formattedDates); // Output: ['01/10/2024', '02/20/2025', '03/30/2026']
```

## Key Differences Between `map()` and `forEach()`

- **Return Value**: The `map()` method returns a new array with the transformed elements, whereas the `forEach()` method does not return anything.
- **Immutability**: The `map()` method does not modify the original array, while the `forEach()` method can be used to mutate the original array if desired.

The `map()` method is particularly useful when you need to transform data while preserving the original array, making it an essential tool in functional programming.

