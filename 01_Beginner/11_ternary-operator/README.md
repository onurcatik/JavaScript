# JavaScript Ternary Operator


## Syntax and Usage

The ternary operator uses the following syntax:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

- `condition`: An expression that evaluates to `true` or `false`.
- `expressionIfTrue`: The expression that executes if the condition is `true`.
- `expressionIfFalse`: The expression that executes if the condition is `false`.

### Example 1: Age Verification

Consider the scenario where you want to check if a user is an adult or a minor based on their age:

```javascript
let age = 21;
let message = age >= 18 ? "You're an adult." : "You're a minor.";
console.log(message); // Output: "You're an adult."
```

In this example:
- The condition `age >= 18` checks if the user's age is 18 or older.
- If the condition is `true`, the message "You're an adult." is assigned to the `message` variable.
- If the condition is `false`, the message "You're a minor." is assigned instead.

### Example 2: Greeting Based on Time

Next, consider a scenario where you want to display a greeting based on the time of day:

```javascript
let time = 16; // 16:00 hours (4 PM)
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting); // Output: "Good afternoon"
```

In this example:
- The condition `time < 12` checks if the time is before noon.
- If the condition is `true`, the greeting "Good morning" is assigned to the `greeting` variable.
- If the condition is `false`, the greeting "Good afternoon" is assigned instead.

### Example 3: Student Status

Another example is determining a message based on a boolean value representing student status:

```javascript
let isStudent = true;
let message = isStudent ? "You are a student." : "You are not a student.";
console.log(message); // Output: "You are a student."
```

In this example:
- The condition `isStudent` checks the boolean value of `isStudent`.
- If the condition is `true`, the message "You are a student." is assigned to the `message` variable.
- If the condition is `false`, the message "You are not a student." is assigned instead.

### Example 4: Discount Calculation

Consider a scenario where a discount is applied based on the purchase amount:

```javascript
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
let total = purchaseAmount - (purchaseAmount * discount / 100);
console.log(`Your total is $${total.toFixed(2)}`); // Output: "Your total is $112.50"
```

In this example:
- The condition `purchaseAmount >= 100` checks if the purchase amount is 100 or more.
- If the condition is `true`, a 10% discount is applied.
- If the condition is `false`, no discount is applied.
- The total amount is then calculated and displayed using a template literal.

## Conclusion

The ternary operator in JavaScript provides a concise and readable way to execute conditional logic. It is especially useful for simple conditions where using an `if-else` statement would be verbose. By mastering the ternary operator, you can write cleaner and more efficient code.

## Code Snippets

### Age Verification

```javascript
let age = 21;
let message = age >= 18 ? "You're an adult." : "You're a minor.";
console.log(message);
```

### Greeting Based on Time

```javascript
let time = 16;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting);
```

### Student Status

```javascript
let isStudent = true;
let message = isStudent ? "You are a student." : "You are not a student.";
console.log(message);
```

### Discount Calculation

```javascript
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
let total = purchaseAmount - (purchaseAmount * discount / 100);
console.log(`Your total is $${total.toFixed(2)}`);
```