let numbers = [1, 2, 3, 4, 5];

function display(element) {
  console.log(element);
}

numbers.forEach(display);

numbers.forEach(function (element, index, array) {
  console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});

//  ----------------------

function double(element, index, array) {
  array[index] = element * 2;
}

numbers.forEach(double);
console.log(numbers);

// ---------------------------

function triple(element, index, array) {
  array[index] = element * 3;
}

numbers.forEach(triple);
console.log(numbers);

// ------------------------------

function square(element, index, array) {
  array[index] = element * element;
}

numbers.forEach(square);
console.log(numbers);


// -------------------------------

let fruits = ["apple", "orange" , "banana", "coconut"]

function displayFruit(element) {
    console.log(element);
}

fruits.forEach(displayFruit);

function uppercase(element,index,array){
    array[index] = element.toUpperCase()
}

fruits.forEach(uppercase)
console.log(fruits)

// -----------------------------------

function lowercase(element, index, array) {
    array[index] = element.toLowerCase()

}

fruits.forEach(lowercase)
console.log(fruits)
