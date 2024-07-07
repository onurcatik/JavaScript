# Number Guessing Game

## Setting Up the Game

### Step 1: Define the Range

First, we need to define the minimum and maximum numbers for our guessing range.

```javascript
const minimum = 1; // Minimum number
const maximum = 100; // Maximum number
```

### Step 2: Generate a Random Number

We need to generate a random number between the defined minimum and maximum values. The `Math.random()` function generates a random number between 0 (inclusive) and 1 (exclusive). We can use this to generate a random number within our range.

```javascript
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(answer); // For testing purposes
```

### Step 3: Initialize Game Variables

We need variables to keep track of the number of attempts, the user's guess, and whether the game is still running.

```javascript
let attempts = 0;
let guess;
let running = true;
```

## Implementing the Game Logic

### Step 4: Accept User Input

We will use the `window.prompt` method to accept user input. The input will be a string, so we need to convert it to a number for comparison.

```javascript
while (running) {
    guess = Number(window.prompt(`Guess a number between ${minimum} and ${maximum}`));
    
    // Check if the input is a valid number
    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
        continue;
    }

    // Check if the guess is within the range
    if (guess < minimum || guess > maximum) {
        window.alert(`Please enter a number between ${minimum} and ${maximum}.`);
        continue;
    }

    // Increment the number of attempts
    attempts++;

    // Compare the guess with the answer
    if (guess < answer) {
        window.alert("Too low. Try again.");
    } else if (guess > answer) {
        window.alert("Too high. Try again.");
    } else {
        window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`);
        running = false; // Exit the game loop
    }
}
```

### Explanation

1. **User Input**: The `window.prompt` method prompts the user to enter a guess.
2. **Validation**: The `isNaN` function checks if the input is a valid number. If not, an alert is shown, and the loop continues.
3. **Range Check**: The input is checked to ensure it falls within the specified range. If not, an alert is shown, and the loop continues.
4. **Increment Attempts**: The number of attempts is incremented each time a valid guess is made.
5. **Comparison**: The guess is compared with the answer. Depending on whether the guess is too low, too high, or correct, appropriate feedback is given, and the game loop is either continued or exited.

## Complete Code

Here is the complete code for the number guessing game:

```javascript
const minimum = 1;
const maximum = 100;

const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(answer); // For testing purposes

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = Number(window.prompt(`Guess a number between ${minimum} and ${maximum}`));
    
    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
        continue;
    }

    if (guess < minimum || guess > maximum) {
        window.alert(`Please enter a number between ${minimum} and ${maximum}.`);
        continue;
    }

    attempts++;

    if (guess < answer) {
        window.alert("Too low. Try again.");
    } else if (guess > answer) {
        window.alert("Too high. Try again.");
    } else {
        window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`);
        running = false;
    }
}
```

