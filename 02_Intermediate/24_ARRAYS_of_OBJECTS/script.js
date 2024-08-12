// Array of fruit objects
const fruits = [
    { name: 'Apple', color: 'Red', calories: 95 },
    { name: 'Orange', color: 'Orange', calories: 45 },
    { name: 'Banana', color: 'Yellow', calories: 105 },
    { name: 'Coconut', color: 'White', calories: 159 },
    { name: 'Pineapple', color: 'Yellow', calories: 37 }
];

// Function to display fruits in the list
function displayFruits(fruitsArray) {
    const fruitList = document.getElementById('fruit-list');
    fruitList.innerHTML = ''; // Clear previous list
    fruitsArray.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = `${fruit.name} - Color: ${fruit.color}, Calories: ${fruit.calories}`;
        fruitList.appendChild(li);
    });
}

// Display the initial list of fruits
displayFruits(fruits);

// Add event listener to add a new fruit
document.getElementById('add-fruit').addEventListener('click', () => {
    fruits.push({ name: 'Grapes', color: 'Purple', calories: 62 });
    displayFruits(fruits);
});

// Add event listener to remove the last fruit
document.getElementById('remove-last-fruit').addEventListener('click', () => {
    fruits.pop();
    displayFruits(fruits);
});

// Add event listener to filter yellow fruits
document.getElementById('filter-yellow-fruits').addEventListener('click', () => {
    const yellowFruits = fruits.filter(fruit => fruit.color === 'Yellow');
    displayFruits(yellowFruits);
});

document.getElementById('filter-red-fruits').addEventListener('click', () => {
    const redFruits = fruits.filter(fruit => fruit.color === 'Red'); 
    displayFruits(redFruits)
} )


