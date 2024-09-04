// Select the box and button elements
const myBox = document.getElementById('myBox');
const myButton = document.getElementById('myButton');

// Mouse over event: changes the background and text content
myBox.addEventListener('mouseover', () => {
    myBox.style.backgroundColor = 'yellow';
    myBox.textContent = "Don't do it!";
});

// Mouse out event: reverts the background and text content
myBox.addEventListener('mouseout', () => {
    myBox.style.backgroundColor = 'lightgreen';
    myBox.textContent = 'Hover or Click Me';
});

// Click event: changes the background and text content
myBox.addEventListener('click', () => {
    myBox.style.backgroundColor = 'tomato';
    myBox.textContent = 'Ouch!';
});

// Button click event: changes the box content and color
myButton.addEventListener('click', () => {
    myBox.style.backgroundColor = 'blue';
    myBox.textContent = 'Changed by Button!';
});
