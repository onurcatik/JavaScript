## Build JavaScript Rock Paper Scissors

In this tutorial, we will create a fully functional "Rock, Paper, Scissors" game using JavaScript. The game allows a player to select an option, and the computer will randomly choose one as well. We will implement scoring and display results based on the choices made. Let's break down the development process into structured steps, including HTML for structure, CSS for styling, and JavaScript for functionality.

### HTML Structure

We start by defining the basic structure of our game using HTML. We will include buttons for player choices, and displays for showing the player's choice, computer's choice, and the result of each round.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Rock Paper Scissors</h1>
    <div class="choices">
        <button onclick="playGame('rock')">👊</button>
        <button onclick="playGame('paper')">✋</button>
        <button onclick="playGame('scissors')">✌️</button>
    </div>
    <div>
        <p>Player: <span id="playerDisplay">-</span></p>
        <p>Computer: <span id="computerDisplay">-</span></p>
        <p id="resultDisplay">It's a tie!</p>
    </div>
    <div class="score-display">
        <p>Player Score: <span id="playerScoreDisplay">0</span></p>
        <p>Computer Score: <span id="computerScoreDisplay">0</span></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### CSS Styling

Next, we apply CSS to style our game, making it visually appealing and user-friendly.

```css
body {
    font-family: Arial, sans-serif;
    font-weight: bold;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
}

h1 {
    font-size: 3.5rem;
    color: #333;
}

.choices {
    margin-bottom: 30px;
}

.choices button {
    font-size: 7.5rem;
    min-width: 160px;
    margin: 0 10px;
    border-radius: 50%;
    background-color: #3498db;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.5s ease;
}

.choices button:hover {
    background-color: #2980b9;
}

#playerDisplay, #computerDisplay {
    font-size: 2.5rem;
}

#resultDisplay {
    font-size: 5rem;
    margin: 30px 0;
}

.score-display {
    font-size: 2rem;
}

#playerScoreDisplay {
    color: green;
}

#computerScoreDisplay {
    color: red;
}

.green-text {
    color: green;
}

.red-text {
    color: red;
}
```

### JavaScript Functionality

Now, we will implement the game logic using JavaScript. The core functionality involves handling player choices, randomly selecting a choice for the computer, determining the result, and updating the scores accordingly.

```javascript
// Initialize variables
const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

let playerScore = 0;
let computerScore = 0;

// Play Game function
function playGame(playerChoice) {
    // Computer randomly chooses rock, paper, or scissors
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Display player and computer choices
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;

    // Determine the result
    let result = '';
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        playerScore++;
    } else {
        result = 'You lose!';
        computerScore++;
    }

    // Update result display
    resultDisplay.textContent = result;

    // Update score displays
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    // Add color to the result text based on the outcome
    resultDisplay.classList.remove('green-text', 'red-text');
    if (result === 'You win!') {
        resultDisplay.classList.add('green-text');
    } else if (result === 'You lose!') {
        resultDisplay.classList.add('red-text');
    }
}
```

### Explanation of Code Logic

1. **HTML Structure**:  
   We created buttons for player choices (rock, paper, scissors) and used `onclick` event handlers to invoke the `playGame` function with the corresponding choice as an argument.

2. **CSS Styling**:  
   We applied basic styles to center the content, enlarge the buttons, and added hover effects to change the background color when hovered. The font colors for the result display were set to change depending on the game's outcome (green for win, red for lose).

3. **JavaScript Functionality**:
    - The `choices` array stores the possible options: `'rock'`, `'paper'`, and `'scissors'`.
    - The `playGame` function handles the game logic. It:
        - Receives the player's choice as an argument.
        - Randomly selects a computer choice.
        - Compares both choices to determine the result.
        - Updates the score and result displays accordingly.
        - Adds green or red text styling to indicate if the player won or lost.

4. **Score Tracking**:  
   The game tracks both player and computer scores using variables. These scores are updated and displayed after every round.

### Conclusion

This implementation demonstrates a simple yet fully functional "Rock, Paper, Scissors" game using JavaScript. The game logic is modular, allowing for easy modifications, such as adding more choices or tweaking the game's rules. This project also introduces fundamental concepts like event handling, random number generation, and conditional logic in JavaScript.

With this foundation, you can further expand the game by implementing additional features like user interfaces or more advanced AI strategies for computer choices.