// Select the list and buttons
const fruitsList = document.getElementById('fruits');
const addItemBtn = document.getElementById('add-item');
const removeItemBtn = document.getElementById('remove-item');

// Function to add a new list item
function addCoconut() {
    // Check if Coconut already exists
    if (!document.getElementById('coconut')) {
        const newListItem = document.createElement('li');
        newListItem.textContent = 'Coconut';
        newListItem.id = 'coconut';
        newListItem.style.fontWeight = 'bold';
        newListItem.style.backgroundColor = 'lightgreen';
        newListItem.style.padding = '5px';
        fruitsList.appendChild(newListItem);
    } else {
        alert('Coconut is already in the list!');
    }
}

// Function to remove the list item
function removeCoconut() {
    const coconutItem = document.getElementById('coconut');
    if (coconutItem) {
        fruitsList.removeChild(coconutItem);
    } else {
        alert('Coconut is not in the list!');
    }
}

// Event listeners for buttons
addItemBtn.addEventListener('click', addCoconut);
removeItemBtn.addEventListener('click', removeCoconut);
