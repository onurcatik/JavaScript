# How to Hide and Show HTML Elements Using JavaScript

In this tutorial, we will explore the functionality of hiding and showing HTML elements using JavaScript. We will focus on two main methods: manipulating the `display` property and toggling the `visibility` property. Both approaches offer different behaviors, and understanding their distinctions is crucial for effective web development.

### Prerequisites
- A basic understanding of HTML, CSS, and JavaScript.
- An image file (`car.jpg` in our example) that will be used as part of the demonstration.
  
### Goal
The goal of this tutorial is to learn how to toggle the visibility of an image element using JavaScript, allowing the user to hide or show the image by clicking a button.

### HTML Structure
We will start by creating a button and an image element. The button will toggle between hiding and showing the image.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hide and Show Elements</title>
    <style>
        #myButton {
            font-size: 2rem; /* Set the button font size */
        }
    </style>
</head>
<body>

    <button id="myButton">Hide</button> <!-- Button to toggle visibility -->
    <br>
    <img id="myIMG" src="car.jpg" alt="Car" width="400px"> <!-- Image to be toggled -->

    <script src="app.js"></script> <!-- JavaScript file -->

</body>
</html>
```

- The `button` element has an `id` of `myButton`, and its initial text is set to "Hide".
- The `img` element is assigned an `id` of `myIMG`, and we define its `src` attribute as `car.jpg` (ensure the image is in the correct directory).

### JavaScript Logic
The following JavaScript will be used to toggle the image’s visibility.

```javascript
// JavaScript file (app.js)

// Select the button and image elements by their IDs
const myButton = document.getElementById('myButton');
const myIMG = document.getElementById('myIMG');

// Add an event listener to the button
myButton.addEventListener('click', () => {
    // Check if the image is currently displayed
    if (myIMG.style.display === 'none') {
        // If the image is hidden, show it and change the button text
        myIMG.style.display = 'block';
        myButton.textContent = 'Hide';
    } else {
        // If the image is visible, hide it and change the button text
        myIMG.style.display = 'none';
        myButton.textContent = 'Show';
    }
});
```

### Code Explanation
- **Button and Image Selection**: 
   We use `document.getElementById` to select the button and image elements by their `id`.
  
- **Event Listener**: 
   We attach an event listener to the button, which triggers when the button is clicked. This event listener toggles between hiding and showing the image.
  
- **Toggling the `display` Property**: 
   - Initially, we check the `display` property of the image (`myIMG.style.display`). If it is set to `'none'`, the image is hidden, and we proceed to make it visible by setting `display` to `'block'`.
   - If the image is visible, we hide it by setting `display` to `'none'`.

- **Updating the Button Text**: 
   After each click, the button’s text content is updated. When the image is hidden, the button text changes to “Show”, and when the image is shown, it changes to “Hide”.

### Demonstrating `visibility`
The `display` property removes the element from the document flow, causing any elements below it to shift up. If you want to retain the layout space for the hidden element, you can use the `visibility` property instead of `display`.

```javascript
// Use visibility instead of display

myButton.addEventListener('click', () => {
    // Check if the image is currently visible
    if (myIMG.style.visibility === 'hidden') {
        // If the image is hidden, make it visible and change the button text
        myIMG.style.visibility = 'visible';
        myButton.textContent = 'Hide';
    } else {
        // If the image is visible, hide it but retain its layout space
        myIMG.style.visibility = 'hidden';
        myButton.textContent = 'Show';
    }
});
```

### Key Differences Between `display` and `visibility`
- **`display: none`**: The element is removed from the document layout, meaning it no longer occupies space on the page. When toggled back to `display: block`, the element reappears, and the surrounding layout may shift.
  
- **`visibility: hidden`**: The element remains in the layout and continues to occupy space. However, it is visually hidden from the user. When toggled to `visibility: visible`, the element becomes visible again without affecting the surrounding layout.

### Final Thoughts
Understanding the differences between `display` and `visibility` is critical when working with dynamic content in web development. Both properties are useful in different scenarios:

- Use `display` when you want to completely hide an element and remove it from the document flow.
- Use `visibility` when you need to hide an element while preserving the layout structure.

Both approaches provide a simple way to control the visibility of elements using JavaScript, allowing for dynamic user interactions on a webpage.

### Conclusion
In this tutorial, we demonstrated how to hide and show HTML elements using JavaScript by manipulating the `display` and `visibility` properties. The choice between these two methods depends on whether you want to retain the layout space of the hidden element or not. Understanding these fundamental properties is essential for creating interactive web applications.