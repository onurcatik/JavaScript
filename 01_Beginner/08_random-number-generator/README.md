# Random Number Generator



## Generating a Random Number

To generate a random number in JavaScript, we use the `Math.random` method. This method returns a floating-point number between 0 (inclusive) and 1 (exclusive).

## Example:
```javascript
let randomNum = Math.random();
console.log(randomNum);  // Outputs a random number between 0 and 1
```

## Generating an Integer in a Specific Range

Often, we need a random integer within a specific range. For example, rolling a six-sided die requires a random number between 1 and 6.

1. **Generate a Random Number Between 0 and 1:**
   ```javascript
   let randomNum = Math.random();
   ```

2. **Scale the Random Number:**
   Multiply by the desired range (e.g., 6 for a six-sided die).
   ```javascript
   randomNum = randomNum * 6;
   ```

3. **Remove the Decimal Portion:**
   Use `Math.floor` to round down to the nearest integer.
   ```javascript
   randomNum = Math.floor(randomNum);
   ```

4. **Adjust the Range:**
   Since `Math.random() * 6` produces a number between 0 and 5, add 1 to shift the range to 1-6.
   ```javascript
   randomNum = Math.floor(Math.random() * 6) + 1;
   ```

## Complete Example:
```javascript
let randomNum = Math.floor(Math.random() * 6) + 1;
console.log(randomNum);  // Outputs a random integer between 1 and 6
```

## Generating a Random Number in a Custom Range

To generate a random number within any given range (e.g., 50 to 100):

1. **Define the Range:**
   ```javascript
   const min = 50;
   const max = 100;
   ```

2. **Scale and Adjust:**
   ```javascript
   let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
   ```
   This formula ensures the random number is between `min` and `max` (inclusive).

## Complete Example:
```javascript
const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);  // Outputs a random integer between 50 and 100
```

## Building a Random Number Generator Application

We will now create a simple web application to generate random numbers on button click. The application will include an HTML button, a label to display the result, and CSS for basic styling.

## HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Number Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <button id="myButton">Roll</button>
    <br>
    <label id="label1"></label>
    <label id="label2"></label>
    <label id="label3"></label>

    <script src="script.js"></script>
</body>
</html>
```

## CSS (styles.css):
```css
body {
    font-family: Verdana, sans-serif;
    text-align: center;
}

#myButton {
    font-size: 3em;
    padding: 5px 25px;
    border-radius: 5px;
}

label {
    font-size: 3em;
    display: block;
    margin: 10px 0;
}
```

## JavaScript (script.js):
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');
    const label1 = document.getElementById('label1');
    const label2 = document.getElementById('label2');
    const label3 = document.getElementById('label3');
    const min = 1;
    const max = 6;

    myButton.onclick = () => {
        let randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
        let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
        let randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;

        label1.textContent = randomNum1;
        label2.textContent = randomNum2;
        label3.textContent = randomNum3;
    };
});
```

