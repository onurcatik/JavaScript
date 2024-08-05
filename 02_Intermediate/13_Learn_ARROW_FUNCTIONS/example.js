const hello = () => console.log("Hello");

hello();

//  ---------------------------

const greet = (name) => console.log(`Hello, ${name}`);

greet("Onur");

// ----------------------------

const greetUser = (name, age) => {
  console.log(`Hello, ${name}`);
  console.log(`You are ${age} years old`);
};

greetUser("Alice", 30);

//  ---------------------------

setTimeout(() => console.log("Hello after 3 seconds"), 3000);

//  --------------------------

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((num) => Math.pow(num, 2));

console.log(squares);

// -------------------------------

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

// -------------------------------

const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total);
