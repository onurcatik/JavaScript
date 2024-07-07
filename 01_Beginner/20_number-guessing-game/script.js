document.addEventListener("DOMContentLoaded", function() {
    const minimum = 1;
    const maximum = 100;
    const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let attempts = 0;

    document.getElementById("min").textContent = minimum;
    document.getElementById("max").textContent = maximum;

    const guessInput = document.getElementById("guessInput");
    const submitGuess = document.getElementById("submitGuess");
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    submitGuess.addEventListener("click", function() {
        const guess = Number(guessInput.value);
        attempts++;

        if (isNaN(guess)) {
            message.textContent = "Please enter a valid number.";
            return;
        }

        if (guess < minimum || guess > maximum) {
            message.textContent = `Please enter a number between ${minimum} and ${maximum}.`;
            return;
        }

        if (guess < answer) {
            message.textContent = "Too low. Try again.";
        } else if (guess > answer) {
            message.textContent = "Too high. Try again.";
        } else {
            message.textContent = `Correct! The answer was ${answer}. It took you ${attempts} attempts.`;
            guessInput.disabled = true;
            submitGuess.disabled = true;
        }

        attemptsDisplay.textContent = `Attempts: ${attempts}`;
        guessInput.value = '';
        guessInput.focus();
    });
});
