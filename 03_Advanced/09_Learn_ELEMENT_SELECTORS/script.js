const firstFruit = document.querySelector('.fruits');
firstFruit.style.backgroundColor = 'yellow'

// ---------------------------

const fruits = document.querySelectorAll('.fruits');
fruits.forEach(fruit => {
    fruit.style.backgroundColor = 'yellow'
})