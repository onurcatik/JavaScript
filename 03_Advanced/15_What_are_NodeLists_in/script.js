// Select all buttons with the class 'my-buttons'
let buttons = document.querySelectorAll('.my-buttons');

// Function to handle the button click and change background color
function changeBackgroundOnClick(event) {
    event.target.style.backgroundColor = 'tomato';
}

// Add click event listeners to all buttons in the NodeList
buttons.forEach(button => {
    button.addEventListener('click', changeBackgroundOnClick);
});

// Add new button functionality
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => {
    // Create a new button element
    const newButton = document.createElement('button');
    newButton.classList.add('my-buttons');
    newButton.textContent = `Button ${buttons.length + 1}`;
    
    // Append the new button to the body
    document.body.appendChild(newButton);

    // Update the NodeList after adding a new button
    buttons = document.querySelectorAll('.my-buttons');

    // Add the click event listener to the new button
    newButton.addEventListener('click', changeBackgroundOnClick);
});
