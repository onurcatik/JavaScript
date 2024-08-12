// JavaScript Closure for Counter
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

// Initialize the counter using the closure
const counter = createCounter();

// Get references to HTML elements
const counterDisplay = document.getElementById('counterDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

// Update the display
function updateDisplay() {
    counterDisplay.textContent = counter.getCount();
}

// Add event listeners to the buttons
incrementBtn.addEventListener('click', function() {
    counter.increment();
    updateDisplay();
});

decrementBtn.addEventListener('click', function() {
    counter.decrement();
    updateDisplay();
});

// Initialize the display
updateDisplay();
