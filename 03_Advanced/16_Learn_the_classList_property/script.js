// Single Button Manipulation
const myButton = document.getElementById('myButton');

// Add 'enabled' class on load
myButton.classList.add('enabled');

// Add 'hover' class on mouse over
myButton.addEventListener('mouseover', () => {
    myButton.classList.add('hover');
});

// Remove 'hover' class on mouse out
myButton.addEventListener('mouseout', () => {
    myButton.classList.remove('hover');
});

// Replace 'enabled' class with 'disabled' on click
myButton.addEventListener('click', () => {
    if (!myButton.classList.contains('disabled')) {
        myButton.classList.replace('enabled', 'disabled');
        myButton.textContent = 'Button Disabled';
    }
});

// Multiple Buttons Manipulation
const buttons = document.querySelectorAll('.myButton');

// Add 'enabled' class to all buttons
buttons.forEach(button => {
    button.classList.add('enabled');
});

// Add hover effect to all buttons
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('hover');
    });

    button.addEventListener('mouseout', () => {
        button.classList.remove('hover');
    });

    // Replace 'enabled' class with 'disabled' on click
    button.addEventListener('click', () => {
        if (!button.classList.contains('disabled')) {
            button.classList.replace('enabled', 'disabled');
            button.textContent = 'Button Disabled';
        }
    });
});
