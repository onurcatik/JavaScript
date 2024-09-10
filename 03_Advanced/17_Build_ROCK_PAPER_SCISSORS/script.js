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
