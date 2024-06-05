# Variables

In programming, a variable serves as a container that holds a value, much like how the variable \( x \) in algebra represents an unknown value. In JavaScript, variables allow us to store and manipulate data effectively. This tutorial will cover variable declaration, assignment, and the basic data types in JavaScript.

## 1. Variable Declaration and Assignment

In JavaScript, creating a variable involves two main steps: declaration and assignment. Declaration introduces the variable to the program, and assignment gives it a value. We can declare variables using `let`, `const`, or `var`. However, `let` and `const` are preferred due to their block scope and improved security.

### Declaration

To declare a variable, we use the `let` keyword followed by a unique variable name:

```javascript
let x;
```

### Assignment

To assign a value to a variable, we use the assignment operator `=`:

```javascript
x = 100;
```

We can also declare and assign a variable in one step:

```javascript
let x = 100;
```

## 2. JavaScript Data Types

JavaScript supports several basic data types. In this section, we will explore numbers, strings, and booleans.

### Numbers

Numbers in JavaScript can be integers or floating-point values. We can perform arithmetic operations on these values.

```javascript
let age = 25; // Integer
let price = 10.99; // Floating-point
let gpa = 2.1; // Floating-point
```

Displaying these variables using `console.log`:

```javascript
console.log(age); // 25
console.log(price); // 10.99
console.log(gpa); // 2.1
```

We can use template literals to embed variables within strings:

```javascript
console.log(`You are ${age} years old.`);
console.log(`The price is $${price}.`);
console.log(`Your GPA is ${gpa}.`);
```

### Strings

Strings are sequences of characters enclosed in single or double quotes.

```javascript
let firstName = "John";
let favoriteFood = "Pizza";
let email = "john.doe@example.com";
```

Displaying strings and their types:

```javascript
console.log(firstName); // John
console.log(`Your name is ${firstName}.`);
console.log(`Your favorite food is ${favoriteFood}.`);
console.log(`Your email is ${email}.`);
console.log(typeof firstName); // string
```

### Booleans

Booleans represent logical values, either `true` or `false`.

```javascript
let isOnline = true;
let isStudent = false;
```

Displaying booleans and their types:

```javascript
console.log(isOnline); // true
console.log(`Is online: ${isOnline}`);
console.log(typeof isOnline); // boolean
console.log(isStudent); // false
console.log(`Is student: ${isStudent}`);
console.log(typeof isStudent); // boolean
```

Booleans are often used in conditional statements to control the flow of a program:

```javascript
if (isOnline) {
  console.log("User is online.");
} else {
  console.log("User is offline.");
}
```

## 3. Using Variables in HTML

To display JavaScript variables within an HTML document, we can manipulate the DOM (Document Object Model).

### HTML Setup

Create an HTML file with three paragraph elements:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Variables</title>
</head>
<body>
    <p id="p1"></p>
    <p id="p2"></p>
    <p id="p3"></p>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript Code

In your `script.js` file, create variables and update the HTML content:

```javascript
let fullName = "John Doe";
let age = 25;
let isStudent = false;

// Update the HTML content
document.getElementById("p1").textContent = `Your name is ${fullName}.`;
document.getElementById("p2").textContent = `You are ${age} years old.`;
document.getElementById("p3").textContent = `Enrolled in school: ${isStudent}.`;
```

By running this setup, the variables `fullName`, `age`, and `isStudent` will be displayed within the respective paragraph elements on your web page.
