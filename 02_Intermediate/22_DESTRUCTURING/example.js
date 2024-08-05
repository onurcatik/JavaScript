let a = 1;
let b = 2;


[a, b] = [b, a];

console.log(a); 
console.log(b);


//  --------------

const colors = ["red", "green", "blue" , "black",  "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors); // ['white', 'green', 'blue', 'black', 'red']

//  ----------------

const colors2 = ['red', 'green', 'blue', 'black', 'white'];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor); // 'red'
console.log(secondColor); // 'green'
console.log(thirdColor); // 'blue'
console.log(extraColors); // ['black', 'white']

//  ---------------

function displayPerson({ firstName, lastName, age, job = 'Unemployed' }) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

const person1 = {
    firstName: 'SpongeBob',
    lastName: 'SquarePants',
    age: 30,
    job: 'Fry Cook'
};

const person2 = {
    firstName: 'Patrick',
    lastName: 'Star',
    age: 34
};

displayPerson(person1); 
// Name: SpongeBob SquarePants
// Age: 30
// Job: Fry Cook

displayPerson(person2); 
// Name: Patrick Star
// Age: 34
// Job: Unemployed