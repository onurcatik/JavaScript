document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const numberLabel = document.getElementById('numberLabel');

    generateButton.addEventListener('click', () => {
        const min = 1;
        const max = 100;
        const randomNumber = generateRandomNumber(min, max);
        numberLabel.textContent = randomNumber;
    });

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
