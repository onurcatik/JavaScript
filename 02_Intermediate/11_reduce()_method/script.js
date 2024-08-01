// Array of scores
const scores = [85, 90, 78, 96, 88, 76, 95, 89];

// Reducer function to calculate the sum of scores
function sumScores(accumulator, currentValue) {
    return accumulator + currentValue;
}

// Using reduce to calculate the sum of scores
const total = scores.reduce(sumScores, 0);

// Calculating the average score
const average = total / scores.length;

// Displaying the average score
document.getElementById('result').textContent = `The average score is ${average.toFixed(2)}`;
