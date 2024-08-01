const prices = [5, 30, 10, 25, 15, 20];

function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}

const total = prices.reduce(sum, 0);

console.log(`The total is $${total.toFixed(2)}`);

// --------------------------

const grades = [75, 50, 90, 80, 65, 95];

function getMax(accumulator, currentValue) {
  return Math.max(accumulator, currentValue);
}

const maximum = grades.reduce(getMax, 0);

console.log(`The maximum score is ${maximum}`);

// --------------------------

function getMin(accumulator, currentValue) {
    return Math.min(accumulator , currentValue)
}
const min = grades.reduce(getMin,grades[0])

console.log(`The minimum score is ${min}`);