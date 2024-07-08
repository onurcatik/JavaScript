# JavaScript Temperature Conversion Program

This tutorial provides a comprehensive guide to creating a temperature conversion program using HTML, CSS, and JavaScript. The program will allow users to convert temperatures between Celsius and Fahrenheit. The following sections will cover the HTML structure, CSS styling, and JavaScript functionality required to build this program.

## HTML Structure

We will begin by creating the HTML file. This file will contain the basic structure of our program, including the input elements, radio buttons, and buttons required for the temperature conversion.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperature Conversion Program</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <form id="conversion-form">
        <h1>Temperature Conversion</h1>
        <input type="number" id="textbox" value="0">
        <br>
        <input type="radio" id="toFahrenheit" name="unit">
        <label for="toFahrenheit">Celsius to Fahrenheit</label>
        <br>
        <input type="radio" id="toCelsius" name="unit">
        <label for="toCelsius">Fahrenheit to Celsius</label>
        <br>
        <button type="button" onclick="convert()">Submit</button>
        <p id="result">Select a unit</p>
    </form>
    <script src="script.js"></script>
</body>
</html>
```

### Explanation

- The `<form>` element contains all the input elements and buttons required for the program.
- The `<input>` element with `type="number"` allows users to input a numeric value.
- Two radio buttons are provided for selecting the conversion direction (Celsius to Fahrenheit or Fahrenheit to Celsius).
- A `<button>` element is provided for submitting the conversion.
- A `<p>` element is used to display the conversion result.

## CSS Styling

Next, we will style the program using CSS. The CSS file will enhance the visual appearance of the HTML elements.

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: hsl(0, 0%, 95%);
    color: hsl(0, 0%, 10%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

form {
    background-color: white;
    text-align: center;
    max-width: 350px;
    margin: auto;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}

h1 {
    color: hsl(240, 100%, 50%);
}

#textbox {
    width: 50%;
    text-align: center;
    font-size: 2em;
    border: 2px solid hsl(0, 0%, 80%);
    border-radius: 4px;
    margin-bottom: 15px;
}

label {
    font-size: 1.5em;
    font-weight: bold;
}

button {
    margin-top: 15px;
    background-color: hsl(0, 100%, 50%);
    font-size: 1.5em;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: hsl(0, 100%, 40%);
}

#result {
    font-size: 1.75em;
    font-weight: bold;
}
```

### Explanation

- The `body` element is styled to center the form both vertically and horizontally.
- The `form` element is styled with a white background, centered text, and rounded corners.
- The `h1` element is given a blue color.
- The `#textbox` input element is styled to have a larger font size and centered text.
- The `label` elements are styled with larger and bold text.
- The `button` element is styled with a red background, white text, and rounded corners. The hover effect changes the background color to a darker red.
- The `#result` element is styled with larger and bold text.

## JavaScript Functionality

Finally, we will add the JavaScript functionality to perform the temperature conversion.

```javascript
// script.js
function convert() {
    const textbox = document.getElementById("textbox");
    const toFahrenheit = document.getElementById("toFahrenheit");
    const toCelsius = document.getElementById("toCelsius");
    const result = document.getElementById("result");

    let temp = parseFloat(textbox.value);

    if (toFahrenheit.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (toCelsius.checked) {
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "Select a unit";
    }
}
```

### Explanation

- The `convert` function retrieves the value from the text box and checks which radio button is selected.
- If the "Celsius to Fahrenheit" radio button is selected, the function converts the temperature to Fahrenheit using the formula: \( \text{temp} = \text{temp} \times \frac{9}{5} + 32 \).
- If the "Fahrenheit to Celsius" radio button is selected, the function converts the temperature to Celsius using the formula: \( \text{temp} = (\text{temp} - 32) \times \frac{5}{9} \).
- The result is displayed with one decimal point precision.

This completes our temperature conversion program. Ensure you have linked the CSS and JavaScript files correctly in your HTML file to see the full functionality and styling of the program.