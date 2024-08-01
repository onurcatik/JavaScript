function hello()  {
    console.log("Hello")
}

hello()

//  ----------------------------

setTimeout (function() {
    console.log("3 Seconds")
}, 3000)

// ---------------------

const numbers = [1, 2, 3, 4, 5, 6]; 

const squares = numbers.map(function(element) {
    return Math.pow(element,2)
});

console.log(squares)

//  --------------------

const evenNumbers = numbers.filter(function(element) {
    return element % 2 === 0; 
})

console.log(evenNumbers)

//  --------------------

const oddNumbers = numbers.filter(function(element) {
    return element % 2 !== 0;
})

console.log(oddNumbers)

//  -----------------------------

const sum = numbers.reduce(function(accumulator , element){
    return accumulator+ element
}, 0)

console.log(sum);