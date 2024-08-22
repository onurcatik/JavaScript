# Build a JavaScript Compound Interest Calculator

This tutorial will guide you through the process of building a compound interest calculator using JavaScript, HTML, and CSS. The project will involve creating a user interface (UI) with HTML and CSS, followed by implementing the compound interest calculation logic in JavaScript. The final product will allow users to input a principal amount, an interest rate, and a number of years to see the future value of their investment or loan.

## Table of Contents

1. Introduction
2. HTML Structure
3. CSS Styling
4. JavaScript Functionality
5. Error Handling and Validation
6. Conclusion

## 1. Introduction

In this tutorial, we will build a compound interest calculator that calculates the future value of an investment or loan based on the principal amount, interest rate, and duration in years. The project is designed for beginners to practice basic web development skills, including HTML form creation, CSS styling, and JavaScript logic implementation.

## 2. HTML Structure

We start by creating the structure of our compound interest calculator using HTML. The form will consist of input fields for the principal amount, interest rate, and number of years, along with a button to trigger the calculation and a section to display the result.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compound Interest Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Interest Calculator</h1>
    <form id="interest-form">
        <label for="principal">Principal Amount:</label>
        <input type="number" id="principal" required>

        <label for="rate">Interest Rate (%):</label>
        <input type="number" id="rate" required>

        <label for="years">Years:</label>
        <input type="number" id="years" required>

        <button type="button" onclick="calculate()">Submit</button>
    </form>

    <p id="total">Total: <span id="total-amount">$0.00</span></p>

    <script src="script.js"></script>
</body>
</html>
```

### Explanation:
- **`<form>`**: Contains the input fields for principal, rate, and years, along with a submit button.
- **`<label>`**: Labels for the corresponding input fields.
- **`<input>`**: Input fields for entering the values. The type is set to `number` to restrict inputs to numeric values.
- **`<button>`**: Triggers the calculation function in JavaScript.
- **`<p>`**: Displays the total calculated amount.

## 3. CSS Styling

Next, we style the calculator to make it visually appealing using CSS.

```css
body {
    font-family: Arial, sans-serif;
    background-color: hsl(0, 0%, 95%);
    color: hsl(0, 0%, 30%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

h1 {
    font-size: 3em;
    text-align: center;
    margin-bottom: 20px;
}

form {
    background-color: #ffffff;
    max-width: 350px;
    margin: auto;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 5px;
}

input {
    width: 50%;
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 15px;
    padding: 5px;
    border: 2px solid hsl(0, 0%, 90%);
    border-radius: 5px;
}

button {
    background-color: hsl(120, 50%, 40%);
    color: white;
    font-size: 1.5em;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
}

button:hover {
    background-color: hsl(120, 50%, 30%);
}

#total {
    font-size: 2em;
    margin-top: 20px;
}

#total-amount {
    color: hsl(120, 50%, 35%);
    font-weight: bold;
}
```

### Explanation:
- **`body`**: Sets the overall layout, including background color, font, and centering of content.
- **`h1`**: Styles the main heading.
- **`form`**: Styles the form with padding, margin, border radius, and a box shadow to give it a card-like appearance.
- **`label`**: Increases the size and boldness of labels.
- **`input`**: Centers the text within input fields and adds padding, border, and rounded corners.
- **`button`**: Styles the submit button with a green background, white text, and rounded corners. The hover effect darkens the background color when the user hovers over the button.
- **`#total`** and **`#total-amount`**: Style the output section where the calculated total will be displayed.

## 4. JavaScript Functionality

Now, let's implement the functionality to calculate compound interest using JavaScript.

```javascript
function calculate() {
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const yearsInput = document.getElementById('years');
    const totalAmount = document.getElementById('total-amount');

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value) / 100;
    let years = Number(yearsInput.value);

    // Input validation to avoid negative or non-numeric values
    if (principal < 0 || isNaN(principal)) principal = 0;
    if (rate < 0 || isNaN(rate)) rate = 0;
    if (years < 0 || isNaN(years)) years = 0;

    // Compound Interest Formula: A = P(1 + r/n)^(nt)
    const result = principal * Math.pow(1 + rate, years);

    // Display the result, formatted as currency
    totalAmount.textContent = result.toLocaleString(undefined, {
        style: 'currency',
        currency: 'USD',
    });

    // Reset invalid inputs to zero
    if (principal === 0) principalInput.value = 0;
    if (rate === 0) rateInput.value = 0;
    if (years === 0) yearsInput.value = 0;
}
```

### Explanation:
- **`calculate()`**: The main function that handles the calculation of compound interest.
- **`document.getElementById()`**: Retrieves the values from the input fields.
- **`Number()`**: Converts the input values to numbers.
- **`isNaN()`**: Checks if the value is not a number.
- **`Math.pow()`**: Applies the compound interest formula.
- **`toLocaleString()`**: Formats the result as a currency string based on the user's locale.

## 5. Error Handling and Validation

We add error handling to ensure that the input values are valid. The following checks are implemented:
- Negative values are reset to zero.
- Non-numeric values are reset to zero.
- The `isNaN()` function is used to identify invalid inputs, and `Number()` casting ensures that the values are treated as numbers.

This error handling mechanism ensures the calculator behaves predictably even with incorrect input, preventing unexpected results or errors.
