// Function expression assigned to a variable
const greet = function() {
    document.getElementById('greeting').textContent = "Hello, World!";
};

// Function expression used as a callback in setTimeout
setTimeout(function() {
    greet();
}, 5000);

// Function expression used with the map method
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
});

// Displaying squares in the HTML
const squaresList = document.getElementById('squaresList');
squares.forEach(function(square) {
    const listItem = document.createElement('li');
    listItem.textContent = square;
    squaresList.appendChild(listItem);
});

// Adding event listener to the button
document.getElementById('greetButton').addEventListener('click', function() {
    greet();
});
