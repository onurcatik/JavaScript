# JavaScript ARROW FUNCTIONS 🎯

Arrow functions in JavaScript offer a concise way to write function expressions. They are particularly useful for simple functions that you only use once. In this tutorial, we will explore the syntax and usage of arrow functions, compare them with traditional function expressions, and demonstrate their application with practical examples.

## Syntax of Arrow Functions

The basic syntax of an arrow function is as follows:
```
(parameters) => { statements }
```
If the function has a single statement, the curly braces `{}` and the `return` keyword can be omitted:
```
(parameters) => statement
```

### Example 1: Basic Arrow Function

Let's start with a simple example to illustrate the syntax.

#### Traditional Function Declaration
```javascript
function hello() {
    console.log("Hello");
}

hello(); // Output: Hello
```

#### Arrow Function
We can rewrite the above function using an arrow function:
```javascript
const hello = () => console.log("Hello");

hello(); // Output: Hello
```

### Example 2: Arrow Function with Parameters

Arrow functions can accept parameters just like traditional functions.

#### Traditional Function Expression
```javascript
const greet = function(name) {
    console.log(`Hello, ${name}`);
};

greet("Alice"); // Output: Hello, Alice
```

#### Arrow Function
We can rewrite the above function using an arrow function:
```javascript
const greet = (name) => console.log(`Hello, ${name}`);

greet("Alice"); // Output: Hello, Alice
```

### Example 3: Arrow Function with Multiple Statements

When the function body contains multiple statements, you need to use curly braces `{}` and explicitly return the value.

#### Traditional Function Expression
```javascript
const greetUser = function(name, age) {
    console.log(`Hello, ${name}`);
    console.log(`You are ${age} years old`);
};

greetUser("Alice", 30); 
// Output:
// Hello, Alice
// You are 30 years old
```

#### Arrow Function
We can rewrite the above function using an arrow function:
```javascript
const greetUser = (name, age) => {
    console.log(`Hello, ${name}`);
    console.log(`You are ${age} years old`);
};

greetUser("Alice", 30); 
// Output:
// Hello, Alice
// You are 30 years old
```

## Using Arrow Functions with Higher-Order Functions

Arrow functions are particularly useful when working with higher-order functions like `setTimeout`, `map`, `filter`, and `reduce`.

### Example 4: `setTimeout` with Arrow Function

The `setTimeout` function accepts a callback and a delay in milliseconds.

#### Traditional Function Expression
```javascript
function sayHello() {
    console.log("Hello after 3 seconds");
}

setTimeout(sayHello, 3000);
```

#### Arrow Function
We can rewrite the above function using an arrow function:
```javascript
setTimeout(() => console.log("Hello after 3 seconds"), 3000);
```

### Example 5: `map` with Arrow Function

The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.

#### Traditional Function Expression
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(num) {
    return Math.pow(num, 2);
});

console.log(squares); // Output: [1, 4, 9, 16, 25, 36]
```

#### Arrow Function
We can rewrite the above function using an arrow function:
```javascript
const squares = numbers.map(num => Math.pow(num, 2));

console.log(squares); // Output: [1, 4, 9, 16, 25, 36]
```

### Example 6: `filter` with Arrow Function

The `filter` method creates a new array with all elements that pass the test implemented by the provided function.

#### Traditional Function Expression
```javascript
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6]
```

#### Arrow Function
We can rewrite the above function using an arrow function:
```javascript
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]
```

### Example 7: `reduce` with Arrow Function

The `reduce` method executes a reducer function on each element of the array, resulting in a single output value.

#### Traditional Function Expression
```javascript
const total = numbers.reduce(function(acc, num) {
    return acc + num;
}, 0);

console.log(total); // Output: 21
```

#### Arrow Function
We can rewrite the above function using an arrow function:
```javascript
const total = numbers.reduce((acc, num) => acc + num, 0);

console.log(total); // Output: 21
```

