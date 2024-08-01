# JavaScript FUNCTION EXPRESSIONS in 7 Minutes!

## Introduction

In JavaScript, function expressions provide a flexible way to define functions. Unlike function declarations, which define a block of reusable code that performs a specific task, function expressions allow functions to be assigned to variables, passed as arguments, or used as return values from other functions.

## Function Expressions vs. Function Declarations

A function declaration creates a function with a name that can be invoked anywhere in the code. Here is an example of a function declaration:

```javascript
function hello() {
    console.log("Hello");
}
```

In contrast, a function expression defines a function as an expression, which can be stored in a variable:

```javascript
const hello = function() {
    console.log("Hello");
};
```

To use the function stored in a variable, invoke it using the variable name followed by parentheses:

```javascript
hello(); // Output: Hello
```

## Function Expressions in Action

### Using `setTimeout` with Function Expressions

The `setTimeout` function in JavaScript allows you to execute a function after a specified delay. It takes two parameters: a callback function and the delay in milliseconds.

```javascript
setTimeout(function() {
    console.log("Hello after 3 seconds");
}, 3000);
```

Here, we pass a function expression as the callback to `setTimeout`. After 3 seconds, "Hello after 3 seconds" will be logged to the console.

### Using Function Expressions with Array Methods

JavaScript allows passing entire functions as arguments to methods like `map`, `filter`, and `reduce`. This practice can enhance code readability and maintainability by avoiding the need for separate named functions.

#### `map` Method

The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
});
console.log(squares); // Output: [1, 4, 9, 16, 25, 36]
```

Here, we use a function expression to square each number in the array.

#### `filter` Method

The `filter` method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const evenNumbers = numbers.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4, 6]

const oddNumbers = numbers.filter(function(element) {
    return element % 2 !== 0;
});
console.log(oddNumbers); // Output: [1, 3, 5]
```

In these examples, function expressions are used to filter even and odd numbers from the array.

#### `reduce` Method

The `reduce` method executes a reducer function on each element of the array, resulting in a single output value.

```javascript
const sum = numbers.reduce(function(accumulator, element) {
    return accumulator + element;
}, 0);
console.log(sum); // Output: 21
```

Here, a function expression is used to sum all elements of the array.

## Benefits of Function Expressions

1. **No Need for Function Names**: Function expressions eliminate the need to name functions when they are only used once.
2. **Anonymous Functions**: Function expressions can be anonymous, meaning they don't require a name.
3. **Higher-Order Functions**: Function expressions are commonly used in higher-order functions, which take other functions as arguments or return them as results.
4. **Asynchronous Operations**: Function expressions are useful in asynchronous operations such as event handling and callbacks.

## Conclusion

Function expressions in JavaScript offer a powerful and flexible way to define functions. By allowing functions to be treated as values, they enable more concise and readable code. Understanding how to use function expressions is essential for writing efficient and effective JavaScript.

In the next topic, we will discuss Arrow functions, which provide a shorter syntax for writing function expressions. Stay tuned for more advanced JavaScript concepts.

```javascript
// Example of using function expressions with map, filter, and reduce
const numbers = [1, 2, 3, 4, 5, 6];

// Squaring numbers
const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
});
console.log(squares); // Output: [1, 4, 9, 16, 25, 36]

// Filtering even numbers
const evenNumbers = numbers.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4, 6]

// Filtering odd numbers
const oddNumbers = numbers.filter(function(element) {
    return element % 2 !== 0;
});
console.log(oddNumbers); // Output: [1, 3, 5]

// Summing numbers
const sum = numbers.reduce(function(accumulator, element) {
    return accumulator + element;
}, 0);
console.log(sum); // Output: 21
```