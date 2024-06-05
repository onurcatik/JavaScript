# Accept JavaScript User Input

## Introduction

In this tutorial, we will explore two methods for accepting user input in JavaScript. The first method uses a `window.prompt`, which is straightforward but less flexible. The second method involves creating an HTML text box and handling the input via JavaScript, which is more professional and suitable for production use.

## Method 1: Using `window.prompt`

### Step-by-Step Guide

1. **Variable Declaration**
   First, declare a variable to hold the user input.
   ```javascript
   let username;
   ```

2. **Prompt for User Input**
   Use `window.prompt` to get input from the user.
   ```javascript
   username = window.prompt("What's your username?");
   ```

3. **Logging the Input**
   To verify the input, log it to the console.
   ```javascript
   console.log(username);
   ```

### Complete Code
```javascript
let username;
username = window.prompt("What's your username?");
console.log(username);
```

## Method 2: Using an HTML Text Box

### Step-by-Step Guide

1. **Create the HTML Structure**
   Add the following HTML to your document:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>User Input Example</title>
   </head>
   <body>
       <h1 id="myH1">Welcome</h1>
       <label for="myText">Username:</label>
       <input type="text" id="myText" />
       <button id="mySubmit">Submit</button>
       <script src="script.js"></script>
   </body>
   </html>
   ```

2. **JavaScript to Handle Input**
   Create a JavaScript file named `script.js` and add the following code:

   1. **Select the Button and Attach Event Listener**
      ```javascript
      document.getElementById('mySubmit').onclick = function() {
          // Code to execute when button is clicked
      };
      ```

   2. **Get Text Box Value and Update H1 Element**
      Within the event handler, get the value of the text box and update the H1 element.
      ```javascript
      let username;
      document.getElementById('mySubmit').onclick = function() {
          username = document.getElementById('myText').value;
          console.log(username);  // Log the username to the console

          // Update the H1 element with the user's name
          document.getElementById('myH1').textContent = `Hello, ${username}`;
      };
      ```

### Complete Code
**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Input Example</title>
</head>
<body>
    <h1 id="myH1">Welcome</h1>
    <label for="myText">Username:</label>
    <input type="text" id="myText" />
    <button id="mySubmit">Submit</button>
    <script src="script.js"></script>
</body>
</html>
```

**JavaScript (script.js):**
```javascript
let username;
document.getElementById('mySubmit').onclick = function() {
    username = document.getElementById('myText').value;
    console.log(username);  // Log the username to the console

    // Update the H1 element with the user's name
    document.getElementById('myH1').textContent = `Hello, ${username}`;
};
```

## Conclusion

We have demonstrated two methods for accepting user input in JavaScript. The `window.prompt` method is quick and easy for simple tasks or testing, while the HTML text box method offers more flexibility and control, making it more suitable for real-world applications. By following these steps, you can effectively capture and handle user input in your web applications.