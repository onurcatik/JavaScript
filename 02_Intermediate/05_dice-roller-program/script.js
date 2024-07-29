function rollDice() {
    const numOfDice = document.getElementById('num-of-dice').value;
    const diceResult = document.getElementById('dice-result');
    const diceImages = document.getElementById('dice-images');

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice-images/zar${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
