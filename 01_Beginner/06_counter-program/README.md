## JavaScript Counter Program


### HTML Structure

We start by creating an `index.html` file. This file will include the necessary elements: a label to display the count and three buttons to control the count.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter Program</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="button-container">
        <label id="count-label">0</label>
        <br>
        <button id="decrease-button" class="buttons">Decrease</button>
        <button id="reset-button" class="buttons">Reset</button>
        <button id="increase-button" class="buttons">Increase</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### CSS Styling

Next, we style the HTML elements using CSS. Create a file named `styles.css` and add the following styles:

```css
/* Styling for the count label */
#count-label {
    display: block;
    text-align: center;
    font-size: 10em;
    font-family: Helvetica, Arial, sans-serif;
    margin-bottom: 20px;
}

/* Center the button container */
#button-container {
    text-align: center;
    margin-top: 50px;
}

/* Styling for the buttons */
.buttons {
    padding: 10px 20px;
    font-size: 1.5em;
    color: white;
    background-color: hsl(210, 50%, 50%);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.25s;
}

/* Hover effect for buttons */
.buttons:hover {
    background-color: hsl(210, 50%, 40%);
}
```

### JavaScript Functionality

Finally, we add functionality to our buttons using JavaScript. Create a file named `script.js` and add the following code:

```javascript
// Selecting HTML elements by their IDs
const decreaseButton = document.getElementById('decrease-button');
const resetButton = document.getElementById('reset-button');
const increaseButton = document.getElementById('increase-button');
const countLabel = document.getElementById('count-label');

// Initial count value
let count = 0;

// Function to update the count label
function updateCountLabel() {
    countLabel.textContent = count;
}

// Increase count
increaseButton.onclick = function() {
    count++;
    updateCountLabel();
};

// Decrease count
decreaseButton.onclick = function() {
    count--;
    updateCountLabel();
};

// Reset count
resetButton.onclick = function() {
    count = 0;
    updateCountLabel();
};
```

### Conclusion

This tutorial has demonstrated how to create a simple counter program using HTML, CSS, and JavaScript. The program includes a label to display the count and buttons to increase, decrease, and reset the count. By following these steps, you will have a functional counter application that can be further customized and expanded upon.

### Summary

- **HTML**: Defines the structure of the counter with a label and buttons.
- **CSS**: Provides styling for the label and buttons.
- **JavaScript**: Implements the logic to increase, decrease, and reset the count value.

### Full Code

Here is the complete code for all files:

#### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter Program</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="button-container">
        <label id="count-label">0</label>
        <br>
        <button id="decrease-button" class="buttons">Decrease</button>
        <button id="reset-button" class="buttons">Reset</button>
        <button id="increase-button" class="buttons">Increase</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

#### `styles.css`

```css
#count-label {
    display: block;
    text-align: center;
    font-size: 10em;
    font-family: Helvetica, Arial, sans-serif;
    margin-bottom: 20px;
}

#button-container {
    text-align: center;
    margin-top: 50px;
}

.buttons {
    padding: 10px 20px;
    font-size: 1.5em;
    color: white;
    background-color: hsl(210, 50%, 50%);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.25s;
}

.buttons:hover {
    background-color: hsl(210, 50%, 40%);
}
```

#### `script.js`

```javascript
const decreaseButton = document.getElementById('decrease-button');
const resetButton = document.getElementById('reset-button');
const increaseButton = document.getElementById('increase-button');
const countLabel = document.getElementById('count-label');

let count = 0;

function updateCountLabel() {
    countLabel.textContent = count;
}

increaseButton.onclick = function() {
    count++;
    updateCountLabel();
};

decreaseButton.onclick = function() {
    count--;
    updateCountLabel();
};

resetButton.onclick = function() {
    count = 0;
    updateCountLabel();
};
```
