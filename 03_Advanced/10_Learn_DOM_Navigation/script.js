const fruitList = document.getElementById("fruits")

const firstFruit = fruitList.firstElementChild;
firstFruit.style.backgroundColor = 'yellow'

const lastFruit = fruitList.lastElementChild
lastFruit.style.backgroundColor = 'green'

const allLists= document.querySelectorAll("ul")

allLists.forEach(list => {
    const firstChild=list.firstElementChild
    const lastChild=list.lastElementChild

    firstChild.style.backgroundColor= 'yellow'
    lastChild.style.backgroundColor='green'
})

const apple =document.getElementById('apple')

const nextSibling = apple.nextElementSibling;
nextSibling.style.backgroundColor = 'orange'

const prevSibling= apple.previousSibling

// --------------------

let sibling = apple.nextElementSibling
while(sibling){
    sibling.style.backgroundColor = 'lightblue'

    sibling = sibling.nextElementSibling
}
// -------------------

// const apple = document.getElementById('apple');

// const parent = apple.parentElement;
// parent.style.backgroundColor= 'lightgray'

// ----------------------

// Select the vegetables list
const vegetableList = document.getElementById('vegetables');

// Access all children (list items)
const allVegetables = Array.from(vegetableList.children);

// Iterate over children and highlight each
allVegetables.forEach(vegetable => {
    vegetable.style.backgroundColor = 'lightgreen'; // Highlights all vegetables
});