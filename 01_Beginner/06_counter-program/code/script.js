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
