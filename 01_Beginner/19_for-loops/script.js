// Reference to the ul element in the DOM
const numberList = document.getElementById('number-list');

// Loop to create list items
for (let i = 1; i <= 20; i++) {
    // Create a new li element
    const listItem = document.createElement('li');
    
    // Set the text content of the li element
    listItem.textContent = `Number: ${i}`;
    
    // Apply different styles based on whether the number is odd or even
    if (i % 2 === 0) {
        listItem.classList.add('even');
    } else {
        listItem.classList.add('odd');
    }
    
    // Append the li element to the ul element
    numberList.appendChild(listItem);
}
