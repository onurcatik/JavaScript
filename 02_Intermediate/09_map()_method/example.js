const numbers = [1, 2, 3, 4, 5];

function square(element) {
  return Math.pow(element, 2);
}

const squares = numbers.map(square);

console.log("Square", squares);

//  -------------------------

function cube(element) {
  return Math.pow(element, 3);
}

const cubes = numbers.map(cube);

console.log("Cubes", cubes);

// ----------------------

const students = ["SpongeBob", "Patrick", "Squidward", "Sandy"];

function uppercase(element) {
  return element.toUpperCase();
}

const studentsUpper = students.map(uppercase);

console.log("UpperCase", studentsUpper);

// -----------------------

function lowercase(element) {
  return element.toLowerCase();
}

const studentsLower = students.map(lowercase);

console.log("LowerCase:", studentsLower);

// ------------------------

const dates = ["2024-01-10", "2025-02-20", "2026-03-30"];

function formatDate(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDate);

console.log(formattedDates);
