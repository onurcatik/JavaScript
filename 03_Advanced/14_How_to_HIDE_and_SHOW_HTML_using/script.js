// Select the button and image elements
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
