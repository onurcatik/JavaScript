# If Statements in JavaScript

## Basic Structure of `if` Statements

An `if` statement in JavaScript evaluates a condition inside parentheses. If the condition is true, the code block inside the curly braces is executed. If the condition is false, the code block is skipped.

### Syntax

```javascript
if (condition) {
    // code to execute if condition is true
}
```

### Example

Let's consider a simple example where we check a user's age to determine if they are old enough to enter a website.

```javascript
let age = 25;

if (age >= 18) {
    console.log("You are old enough to enter this site.");
}
```

In this example, the condition `age >= 18` is true, so the message "You are old enough to enter this site." will be logged to the console.

## Adding an `else` Clause

The `else` clause allows you to specify an alternative block of code to be executed if the condition is false.

### Syntax

```javascript
if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}
```

### Example

Let's extend our previous example to handle the case where the user is not old enough to enter the site.

```javascript
let age = 13;

if (age >= 18) {
    console.log("You are old enough to enter this site.");
} else {
    console.log("You must be 18+ to enter this site.");
}
```

In this example, the condition `age >= 18` is false, so the message "You must be 18+ to enter this site." will be logged to the console.

## Using `else if` for Multiple Conditions

The `else if` clause allows you to check multiple conditions. If the first condition is false, the next condition is checked, and so on.

### Syntax

```javascript
if (condition1) {
    // code to execute if condition1 is true
} else if (condition2) {
    // code to execute if condition2 is true
} else {
    // code to execute if none of the conditions are true
}
```

### Example

Let's check the time of day and display an appropriate greeting.

```javascript
let time = 9; // time in hours (24-hour format)

if (time < 12) {
    console.log("Good morning.");
} else if (time < 18) {
    console.log("Good afternoon.");
} else {
    console.log("Good evening.");
}
```

In this example, since `time` is less than 12, the message "Good morning." will be logged to the console.

## Working with Boolean Variables

You can use Boolean variables directly in `if` statements without explicitly comparing them to `true` or `false`.

### Example

Let's use a Boolean variable to check if a user is a student.

```javascript
let isStudent = true;

if (isStudent) {
    console.log("You are a student.");
} else {
    console.log("You are not a student.");
}
```

In this example, since `isStudent` is `true`, the message "You are a student." will be logged to the console.

## Nested `if` Statements

You can nest `if` statements inside other `if` statements to check multiple conditions in a hierarchical manner.

### Example

Let's check if a person is old enough to drive and if they have a driver's license.

```javascript
let age = 18;
let hasLicense = true;

if (age >= 16) {
    console.log("You are old enough to drive.");
    if (hasLicense) {
        console.log("You have your license.");
    } else {
        console.log("You do not have your license yet.");
    }
} else {
    console.log("You must be 16+ to have a license.");
}
```

In this example, since `age` is 18 and `hasLicense` is `true`, the messages "You are old enough to drive." and "You have your license." will be logged to the console.

## Example Project: Age Verification Form

Let's create a simple HTML form where users can enter their age and see a message based on the entered value. We'll use the concepts we've learned about `if`, `else if`, and `else` statements.

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Age Verification</title>
</head>
<body>
    <label for="ageInput">Enter your age:</label>
    <input type="text" id="ageInput">
    <button id="submitButton">Submit</button>
    <p id="result"></p>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript

```javascript
document.getElementById('submitButton').onclick = function() {
    const ageInput = document.getElementById('ageInput');
    const result = document.getElementById('result');
    let age = Number(ageInput.value);

    if (isNaN(age)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    if (age < 0) {
        result.textContent = "Your age can't be below zero.";
    } else if (age === 0) {
        result.textContent = "You can't enter, you were just born.";
    } else if (age < 18) {
        result.textContent = "You must be 18+ to enter this site.";
    } else if (age >= 100) {
        result.textContent = "You are too old to enter this site.";
    } else {
        result.textContent = "You are old enough to enter this site.";
    }
};
```

In this example:
- We use `document.getElementById` to get references to the input field, button, and result paragraph.
- The `onclick` event handler for the button retrieves the age entered by the user and converts it to a number.
- We check if the input is a valid number using `isNaN`.
- We use a series of `if`, `else if`, and `else` statements to determine the appropriate message to display based on the entered age.
- The result is displayed in the paragraph with the id `result`.

This example demonstrates the practical use of `if` statements to create dynamic, interactive web applications.

By following this tutorial, you should have a solid understanding of how to use `if` statements in JavaScript to control the flow of your code based on various conditions.