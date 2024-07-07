# While Loops

## Basic Syntax

A `while` loop in JavaScript has the following syntax:

```javascript
while (condition) {
    // code block to be executed
}
```

The `condition` is evaluated before each iteration of the loop. If the condition is `true`, the code block inside the loop will execute. This process continues until the condition evaluates to `false`.

### Example: Basic While Loop

Consider a simple example where we repeatedly prompt the user to enter a username until a valid one is provided.

```javascript
let username = "";

while (username === "") {
    username = prompt("Enter your name:");
}

console.log("Hello, " + username);
```

In this example:
- The loop continues to prompt the user to enter their name as long as the `username` variable is an empty string.
- Once the user provides a non-empty name, the loop terminates, and a greeting message is displayed.

### Preventing Infinite Loops

An infinite loop occurs when the loop's condition never evaluates to `false`. This can cause your program to become unresponsive or crash. To avoid infinite loops, ensure that the condition will eventually be met, allowing the loop to terminate.

#### Example: Infinite Loop (Incorrect)

```javascript
let username = "";

while (username === "") {
    console.log("You didn't enter your name.");
}
```

This code will run indefinitely because `username` is never updated inside the loop, and the condition `username === ""` always remains `true`.

### Correcting the Infinite Loop

To correct this, update the `username` variable within the loop:

```javascript
let username = "";

while (username === "") {
    username = prompt("Enter your name:");
}

console.log("Hello, " + username);
```

Now, the loop will terminate once the user provides a non-empty name.

### Handling Null Values

When using `prompt()`, clicking the cancel button returns `null`. You might want to handle this case to prevent unexpected behavior.

#### Example: Handling Null

```javascript
let username = "";

while (username === "" || username === null) {
    username = prompt("Enter your name:");
}

console.log("Hello, " + username);
```

In this code:
- The loop continues if the `username` is either an empty string or `null`.
- The loop terminates when the user provides a valid name.

## Do...While Loop

A `do...while` loop is a variation of the `while` loop that guarantees the code block executes at least once before the condition is evaluated.

### Syntax

```javascript
do {
    // code block to be executed
} while (condition);
```

### Example: Do...While Loop

Using the previous example with a `do...while` loop:

```javascript
let username;

do {
    username = prompt("Enter your name:");
} while (username === "" || username === null);

console.log("Hello, " + username);
```

In this case:
- The code block inside the `do` section runs once before checking the condition.
- The loop continues to prompt the user until a valid name is provided.

## Advanced Example: User Authentication

Let's implement a simple authentication system using a `while` loop. The user will be prompted to enter a username and password until they provide valid credentials.

```javascript
let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = prompt("Enter your username:");
    password = prompt("Enter your password:");

    if (username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in.");
    } else {
        console.log("Invalid credentials, please try again.");
    }
}
```

### Explanation

- The loop continues as long as `loggedIn` is `false`.
- The user is prompted to enter a username and password.
- If the credentials match the predefined values, `loggedIn` is set to `true`, and the loop terminates.
- If the credentials are incorrect, the loop continues, prompting the user again.

### Do...While Variation

We can achieve the same functionality using a `do...while` loop:

```javascript
let loggedIn;
let username;
let password;

do {
    username = prompt("Enter your username:");
    password = prompt("Enter your password:");

    if (username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in.");
    } else {
        loggedIn = false;
        console.log("Invalid credentials, please try again.");
    }
} while (!loggedIn);
```

This variation ensures that the authentication prompts are shown at least once, even if `loggedIn` is initially `true`.

## Conclusion

In summary:
- A `while` loop repeats code as long as a specified condition is `true`.
- To avoid infinite loops, ensure the condition will eventually become `false`.
- A `do...while` loop guarantees the code block executes at least once before the condition is evaluated.
