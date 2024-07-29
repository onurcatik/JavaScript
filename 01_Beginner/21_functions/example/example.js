function happyBirthday() {
  console.log("Happy Birthday to you");
  console.log("Happy birthday to you");
  console.log("Happy Birthday [Name]");
}

happyBirthday();

// --------------------------

function happyBirthday(name, age) {
  console.log("Happy Birthday to you");
  console.log("Happy birthday to you");
  console.log("Happy Birthday:", name);
  console.log("Your are age", age);
}

happyBirthday("Alice", 25);

// --------------------------

function add(x, y) {
  return x + y;
}

let sum = add(22, 5);
console.log(sum);

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return "You can't divide by zero";
  }
  return x / y;
}

console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));

// --------------

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(5));

// ----------------

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

console.log(isEven(8));

// ----------------

function isValidEmail(email) {
    return email.includes("@") ? true : false;
}

console.log(isValidEmail("user@gmail.com"))
console.log(isValidEmail("usergmail.com"))