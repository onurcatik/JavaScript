// Select the button element
const myButton = document.getElementById('myButton');

// Add the 'enabled' class to the button
myButton.classList.add('enabled');

// ------------------

myButton.classList.remove('enabled')

// ------------------

myButton.addEventListener('mouseover', () => {
    myButton.classList.add('hover');
})

myButton.addEventListener('mouseout', () => {
    myButton.classList.remove('hover')
})


myButton.addEventListener('mouseover', () => {
    myButton.classList.toggle('hover');
});

myButton.addEventListener('mouseout', () => {
    myButton.classList.toggle('hover');
});


myButton.addEventListener('click', () => {
    if (myButton.classList.contains('disabled')) {
        myButton.textContent = 'Button Disabled';
    } else {
        myButton.textContent = 'Button Enabled';
    }
});

myButton.addEventListener('click', () => {
    myButton.classList.replace('enabled', 'disabled');
});
