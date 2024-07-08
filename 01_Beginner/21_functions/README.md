# Functions

## Introduction

In this tutorial, we will delve into JavaScript functions, a fundamental concept in programming. Functions in JavaScript are blocks of code designed to perform specific tasks. They allow for code reuse, which enhances the efficiency and readability of your code. We will explore how to declare functions, pass arguments, use return values, and apply conditional logic within functions.

## Function Declaration and Execution

A function in JavaScript is declared using the `function` keyword, followed by a unique function name, a set of parentheses `()`, and a set of curly braces `{}`. The code to be executed by the function is written inside the curly braces.

### Example: Basic Function

Let's create a simple function that prints "Happy Birthday" to the console:

```javascript
function happyBirthday() {
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday dear [Name]!");
    console.log("Happy Birthday to you!");
}
```

To execute the function, we need to call it by its name followed by parentheses:

```javascript
happyBirthday();
```

The above code will output:

```
Happy Birthday to you!
Happy Birthday to you!
Happy Birthday dear [Name]!
Happy Birthday to you!
```

## Passing Arguments to Functions

Functions can accept inputs known as arguments. These arguments are specified within the parentheses during function declaration and are used within the function.

### Example: Function with Parameters

We can modify our `happyBirthday` function to accept a `name` and `age` as parameters:

```javascript
function happyBirthday(name, age) {
    console.log(`Happy Birthday to you!`);
    console.log(`Happy Birthday to you!`);
    console.log(`Happy Birthday dear ${name}!`);
    console.log(`Happy Birthday to you!`);
    console.log(`You are ${age} years old!`);
}
```

When calling the function, we pass the arguments:

```javascript
happyBirthday("Alice", 25);
```

The output will be:

```
Happy Birthday to you!
Happy Birthday to you!
Happy Birthday dear Alice!
Happy Birthday to you!
You are 25 years old!
```

## Returning Values from Functions

A function can return a value back to the caller using the `return` keyword. This is useful when the function performs a calculation or a task that produces a result.

### Example: Function with Return Value

Let's create a function that adds two numbers and returns the result:

```javascript
function add(x, y) {
    return x + y;
}

let sum = add(5, 3);
console.log(sum); // Outputs: 8
```

## More Complex Examples

### Example: Arithmetic Functions

We can create multiple arithmetic functions such as subtract, multiply, and divide:

```javascript
function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Cannot divide by zero";
    }
    return x / y;
}

console.log(subtract(10, 5)); // Outputs: 5
console.log(multiply(4, 3));  // Outputs: 12
console.log(divide(10, 2));   // Outputs: 5
```

### Example: Checking Even or Odd

Let's create a function that checks if a number is even or odd:

```javascript
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(10)); // Outputs: true
console.log(isEven(7));  // Outputs: false
```

Alternatively, using the ternary operator for a more concise function:

```javascript
function isEven(number) {
    return number % 2 === 0 ? true : false;
}
```

### Example: Validating an Email Address

We can create a function to validate if a given string is a properly formatted email address:

```javascript
function isValidEmail(email) {
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("user@example.com")); // Outputs: true
console.log(isValidEmail("userexample.com"));  // Outputs: false
```

