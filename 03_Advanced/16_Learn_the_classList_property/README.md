# Learn the JavaScript `classList` Property

In this tutorial, we will explore the `classList` property in JavaScript, which provides a powerful API for interacting with the CSS classes of HTML elements. The `classList` property allows you to dynamically add, remove, toggle, replace, and check for CSS classes, making it highly versatile for creating dynamic user interfaces.

## Understanding the `classList` Property

The `classList` property of an element represents the collection of all classes that are applied to that element. By accessing this property, you can manipulate an element's classes through several methods:

1. `add()`: Adds a class to the element.
2. `remove()`: Removes a class from the element.
3. `toggle()`: Toggles a class on the element (adds it if it’s missing, removes it if it exists).
4. `replace()`: Replaces one class with another.
5. `contains()`: Checks whether the element has a specific class.

These methods enable you to modify the behavior and appearance of elements in a highly dynamic manner, which can be used to create reusable and interactive UI components.

### Example Setup

We'll start by creating a simple HTML document that includes a button. This button will be the element we manipulate using the `classList` property.

#### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>classList Example</title>
    <style>
        #myButton {
            font-size: 4rem;
            margin: 10px;
            border: none;
            border-radius: 5px;
            padding: 10px 15px;
        }
        .enabled {
            background-color: hsl(220, 100%, 50%);
            color: white;
        }
        .hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            font-weight: bold;
        }
        .disabled {
            background-color: hsl(0, 0%, 60%);
            color: hsl(0, 0%, 80%);
        }
    </style>
</head>
<body>

    <button id="myButton">My Button</button>

    <script src="app.js"></script>
</body>
</html>
```

In this HTML, we define a button with the ID `myButton`. We also define three CSS classes:

- `.enabled`: Applies a blue background and white text to the button.
- `.hover`: Adds a box shadow and bold text.
- `.disabled`: Applies a gray background with lighter gray text.

### Adding and Removing Classes Dynamically

We will use JavaScript to dynamically add and remove classes from this button. First, let's select the button element and add the `enabled` class to it.

#### Adding a Class

```javascript
// Select the button element
const myButton = document.getElementById('myButton');

// Add the 'enabled' class to the button
myButton.classList.add('enabled');
```

This code selects the button with the `getElementById()` method and then adds the `enabled` class to it using `classList.add()`.

#### Removing a Class

To remove the `enabled` class, you can use the `remove()` method.

```javascript
// Remove the 'enabled' class from the button
myButton.classList.remove('enabled');
```

This will remove the blue background and white text from the button.

### Adding Hover Effects Dynamically

We can also add hover effects by using the `hover` class dynamically with event listeners. Let's apply the `hover` class when the user hovers over the button and remove it when they move the cursor away.

#### Adding Event Listeners for Hover

```javascript
// Add event listeners for mouse over and mouse out
myButton.addEventListener('mouseover', () => {
    myButton.classList.add('hover');
});

myButton.addEventListener('mouseout', () => {
    myButton.classList.remove('hover');
});
```

In this example, the `mouseover` event adds the `hover` class when the user hovers over the button, and the `mouseout` event removes it when the cursor leaves the button.

### Toggling Classes

The `toggle()` method allows you to toggle a class on and off with a single method call. This can be particularly useful when you want to add or remove a class based on a single action, such as clicking a button.

#### Example of Class Toggling

```javascript
// Toggle the 'hover' class on mouse over and mouse out
myButton.addEventListener('mouseover', () => {
    myButton.classList.toggle('hover');
});

myButton.addEventListener('mouseout', () => {
    myButton.classList.toggle('hover');
});
```

This code will toggle the `hover` class on mouse over and mouse out, achieving the same effect as before but using the `toggle()` method for brevity.

### Replacing Classes

The `replace()` method allows you to replace one class with another. This is useful when you want to change the state of an element, such as switching between "enabled" and "disabled."

#### Example of Class Replacement

```javascript
// Replace 'enabled' with 'disabled' on button click
myButton.addEventListener('click', () => {
    myButton.classList.replace('enabled', 'disabled');
});
```

In this case, clicking the button will replace the `enabled` class with the `disabled` class, changing the button's appearance to a disabled state.

### Checking for Classes with `contains()`

The `contains()` method checks if an element has a specific class and returns `true` or `false`. This can be used in conditions to determine the current state of an element.

#### Example of Checking Class

```javascript
// Check if the button has the 'disabled' class and change its text content
myButton.addEventListener('click', () => {
    if (myButton.classList.contains('disabled')) {
        myButton.textContent = 'Button Disabled';
    } else {
        myButton.textContent = 'Button Enabled';
    }
});
```

Here, when the button is clicked, we check if it contains the `disabled` class. If it does, the text of the button is changed to "Button Disabled."

### Working with Multiple Elements

We can also use the `classList` property with multiple elements by selecting them with `querySelectorAll()` and using the `forEach()` method.

#### Example with Multiple Buttons

```html
<button class="myButton">Button 1</button>
<button class="myButton">Button 2</button>
<button class="myButton">Button 3</button>
<button class="myButton">Button 4</button>
```

```javascript
// Select all buttons with the 'myButton' class
const buttons = document.querySelectorAll('.myButton');

// Apply the 'enabled' class to all buttons
buttons.forEach(button => {
    button.classList.add('enabled');
});

// Add hover and click events to each button
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('hover');
    });
    button.addEventListener('mouseout', () => {
        button.classList.remove('hover');
    });
    button.addEventListener('click', () => {
        button.classList.replace('enabled', 'disabled');
        if (button.classList.contains('disabled')) {
            button.textContent = 'Button Disabled';
        }
    });
});
```

This code dynamically applies the `enabled` class to all buttons, adds hover effects, and handles the click event to replace the `enabled` class with `disabled`.

## Conclusion

The `classList` property in JavaScript is a powerful tool for manipulating the CSS classes of elements. By using methods like `add()`, `remove()`, `toggle()`, `replace()`, and `contains()`, you can create dynamic, interactive web pages that respond to user actions.

This approach not only simplifies the management of CSS classes but also allows for the reuse of styles across multiple elements, improving both the maintainability and scalability of your code.