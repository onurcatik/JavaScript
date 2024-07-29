let fruits = ["apple", "orange", "banana"]
console.log(fruits)

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[0] = "coconut";
console.log(fruits);


// -------------------

fruits.push("coconut");
console.log(fruits);

// -------------------

fruits.pop();
console.log(fruits);

// -------------------

fruits.unshift("mango");
console.log(fruits);

// -------------------

fruits.shift();
console.log(fruits)

// -------------------

let index = fruits.indexOf("orange")
console.log(index)


// -------------------

for(let i=0 ; i < fruits.length ; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit)
}

// -------------------

fruits.sort(); 
console.log(fruits);

// -------------------

fruits.reverse();
console.log(fruits);




