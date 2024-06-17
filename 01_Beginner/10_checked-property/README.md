## Understanding the `checked` Property in JavaScript

The `checked` property in JavaScript is an essential feature when working with forms that include checkboxes or radio buttons. This property allows developers to determine and control whether a checkbox or radio button is selected. In this tutorial, we will explore the `checked` property in detail and provide code snippets to demonstrate its use.

### HTML Structure

First, let's create the HTML structure that includes a checkbox, radio buttons, and a submit button.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checked Property Example</title>
</head>
<body>
    <label for="myCheckbox">Subscribe</label>
    <input type="checkbox" id="myCheckbox"><br><br>

    <label for="visaBtn">Visa</label>
    <input type="radio" id="visaBtn" name="card"><br>
    <label for="masterCardBtn">MasterCard</label>
    <input type="radio" id="masterCardBtn" name="card"><br>
    <label for="paypalBtn">PayPal</label>
    <input type="radio" id="paypalBtn" name="card"><br><br>

    <button id="mySubmit" type="submit">Submit</button>

    <p id="subResult"></p>
    <p id="paymentResult"></p>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript Logic

Now, let's write the JavaScript logic to handle the interactions with the checkbox and radio buttons.

```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    // Get elements by their IDs
    const myCheckbox = document.getElementById('myCheckbox');
    const visaBtn = document.getElementById('visaBtn');
    const masterCardBtn = document.getElementById('masterCardBtn');
    const paypalBtn = document.getElementById('paypalBtn');
    const mySubmit = document.getElementById('mySubmit');
    const subResult = document.getElementById('subResult');
    const paymentResult = document.getElementById('paymentResult');

    // Add click event listener to the submit button
    mySubmit.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        
        // Check the state of the checkbox
        if (myCheckbox.checked) {
            subResult.textContent = 'You are subscribed';
        } else {
            subResult.textContent = 'You are not subscribed';
        }

        // Check the state of the radio buttons
        if (visaBtn.checked) {
            paymentResult.textContent = 'You are paying with Visa';
        } else if (masterCardBtn.checked) {
            paymentResult.textContent = 'You are paying with MasterCard';
        } else if (paypalBtn.checked) {
            paymentResult.textContent = 'You are paying with PayPal';
        } else {
            paymentResult.textContent = 'You must select a payment type';
        }
    });
});
```

### Explanation

1. **HTML Structure**:
    - We created a checkbox with the label "Subscribe" and assigned it the ID `myCheckbox`.
    - Three radio buttons are created for Visa, MasterCard, and PayPal, each with unique IDs (`visaBtn`, `masterCardBtn`, and `paypalBtn`) but the same `name` attribute (`card`). This ensures they are part of the same group, allowing only one to be selected at a time.
    - A submit button with the ID `mySubmit` is added to trigger the check logic.
    - Two paragraphs with IDs `subResult` and `paymentResult` will display the results based on user selections.

2. **JavaScript Logic**:
    - The script begins by waiting for the DOM to load using `DOMContentLoaded`.
    - All relevant elements are accessed using `getElementById`.
    - An event listener is added to the submit button to handle the click event. The default form submission is prevented using `event.preventDefault()`.
    - The `checked` property of the checkbox and each radio button is examined using `if` statements. The results are displayed in the respective paragraphs based on the selections.

