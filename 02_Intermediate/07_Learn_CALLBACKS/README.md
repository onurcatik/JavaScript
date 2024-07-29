# Learn JavaScript Callbacks in 7 Minutes

## Introduction

In JavaScript, a callback is a function passed as an argument to another function, allowing the latter to invoke the former at a specified point. Callbacks are fundamental for handling asynchronous operations such as reading files, making network requests, or interacting with databases. These operations can take an indeterminate amount of time, and callbacks help manage the flow of the program by ensuring certain functions execute only after these operations complete.

## Understanding Callbacks

A callback is a function that is passed as an argument to another function. This enables the asynchronous handling of tasks. When an asynchronous operation completes, the callback function is executed.

### Example 1: Basic Callback

Let's start with a simple example. We will create two functions: one to display the word "Hello" and another to display "Goodbye".

```javascript
function hello() {
    console.log("Hello");
}

function goodbye() {
    console.log("Goodbye");
}

// Invoking the functions
hello();
goodbye();
```

In this example, `hello` will be executed first, followed by `goodbye`. However, if the `hello` function takes time to process, JavaScript will not wait and will execute `goodbye` immediately.

### Simulating Asynchronous Behavior

To simulate a delay in the `hello` function, we use `setTimeout`.

```javascript
function hello() {
    setTimeout(() => {
        console.log("Hello");
    }, 3000); // 3 seconds delay
}

function goodbye() {
    console.log("Goodbye");
}

// Invoking the functions
hello();
goodbye();
```

Here, "Goodbye" will be logged before "Hello" due to the 3-second delay in `hello`.

## Implementing Callbacks

To ensure `goodbye` executes only after `hello` completes, we pass `goodbye` as a callback to `hello`.

```javascript
function hello(callback) {
    setTimeout(() => {
        console.log("Hello");
        callback();
    }, 3000); // 3 seconds delay
}

function goodbye() {
    console.log("Goodbye");
}

// Invoking the hello function with goodbye as a callback
hello(goodbye);
```

Now, "Goodbye" will be logged only after "Hello".

### Additional Examples with Callbacks

#### Example 2: Multiple Callbacks

Let's create another function `leave` and use it as a callback.

```javascript
function leave() {
    console.log("Leave");
}

// Invoking the hello function with leave as a callback
hello(leave);
```

Similarly, you can pass different functions as callbacks to `hello`:

```javascript
function wait() {
    console.log("Wait");
}

hello(wait);
```

### Example 3: Callbacks with Parameters

Callbacks can also receive parameters. Let's create a `sum` function that takes two numbers and a callback.

```javascript
function sum(x, y, callback) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

// Invoking the sum function
sum(1, 2, displayConsole); // Output: 3
```

In this example, `displayConsole` is called with the result of the sum.

### Example 4: Updating the DOM with Callbacks

Let's create a function to display the result on a web page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Callback Example</title>
</head>
<body>
    <h1 id="myH1"></h1>
    <script>
        function sum(x, y, callback) {
            let result = x + y;
            callback(result);
        }

        function displayPage(result) {
            document.getElementById("myH1").textContent = result;
        }

        // Invoking the sum function
        sum(1, 2, displayPage); // The result 3 will be displayed in the <h1> element
    </script>
</body>
</html>
```

Here, `displayPage` updates the text content of an HTML element with the result of the sum.

## Conclusion

Callbacks are a powerful feature in JavaScript, allowing for the asynchronous execution of functions. By passing functions as arguments, you can ensure specific code runs only after certain operations complete. This is crucial for tasks like file I/O, network requests, and database interactions, where the timing of operations is unpredictable.

By mastering callbacks, you can write more efficient and readable asynchronous code, enhancing the functionality and responsiveness of your JavaScript applications.