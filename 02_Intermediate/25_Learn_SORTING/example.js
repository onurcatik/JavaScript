const fruits = ['Banana', 'Apple', 'Mango', 'Cherry'];
fruits.sort();
console.log(fruits)

// -------------------

const numbers = [1, 10, 2, 21, 3];
numbers.sort();
console.log(numbers)

numbers.sort((a, b) => a - b)
console.log(numbers)

numbers.sort((a, b )=> b -a )
console.log(numbers)

//  ---------------------

const people = [
    { name: 'SpongeBob', age: 30, GPA: 3.0 },
    { name: 'Patrick', age: 37, GPA: 1.5 },
    { name: 'Squidward', age: 51, GPA: 2.5 },
    { name: 'Sandy', age: 27, GPA: 4.0 }
];

people.sort((a,b) => a.age - b.age);
console.log(people)

people.sort((a,b) => a.GPA - b.GPA)
console.log(people)

people.sort((a,b) => a.name.localeCompare(b.name))
console.log(people)