let fruits = ["apple", "orange", "banana"];

function displayArray() {
    const arrayOutput = document.getElementById("array-output");
    arrayOutput.innerHTML = `Fruits: ${fruits.join(", ")}`;
}

function addElement() {
    const newFruit = prompt("Enter a new fruit:");
    if (newFruit) {
        fruits.push(newFruit);
        displayArray();
    }
}

function removeElement() {
    fruits.pop();
    displayArray();
}

function sortArray() {
    fruits.sort();
    displayArray();
}

function reverseArray() {
    fruits.reverse();
    displayArray();
}

// Initial display of the array
displayArray();
