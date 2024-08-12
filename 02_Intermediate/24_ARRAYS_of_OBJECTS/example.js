const fruits = [
    { name: 'Apple', color: 'Red', calories: 95 },
    { name: 'Orange', color: 'Orange', calories: 45 },
    { name: 'Banana', color: 'Yellow', calories: 105 },
    { name: 'Coconut', color: 'White', calories: 159 },
    { name: 'Pineapple', color: 'Yellow', calories: 37 }
];

console.log(fruits[0].name)
console.log(fruits[1].color)
console.log(fruits[2].calories)

// ----------------------------

fruits.push({name : 'Grapes', color: 'Purple' , calories : 62})
console.log(fruits)

fruits.pop();
console.log(fruits)

//  --------------------------

fruits.splice(1, 2 )
console.log(fruits)

// ---------------------------

fruits.forEach(fruits => console.log(fruits.name))

const fruitNames = fruits.map(fruits => fruits.name)
console.log(fruitNames)

// -----------------------------

const yellowFruits = fruits.filter(fruits => fruits.color === "Yellow")
console.log(yellowFruits)

// ------------------------------

const maxCalorieFruit = fruits.reduce((max, fruit) => {
    return (fruit.calories > max.calories) ? fruit : max;
});
console.log(maxCalorieFruit)

// ------------------------------

const minCalorieFruit = fruits.reduce((min , fruit) => {
    return (fruit.calories < min.calories) ? fruit : min 
})

console.log(minCalorieFruit)