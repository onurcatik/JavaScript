document.addEventListener('DOMContentLoaded', () => {
    const greetButton = document.getElementById('greetButton');
    const greetMessage = document.getElementById('greetMessage');
    const originalArraySpan = document.getElementById('originalArray');
    const squaresArraySpan = document.getElementById('squaresArray');
    const evenArraySpan = document.getElementById('evenArray');
    const timeoutMessage = document.getElementById('timeout');

    greetButton.addEventListener('click', () => {
        greetMessage.textContent = "Hello, welcome to learning arrow functions!";
    });

    const numbers = [1, 2, 3, 4, 5, 6];
    originalArraySpan.textContent = numbers.join(', ');

    const squares = numbers.map(num => num * num);
    squaresArraySpan.textContent = squares.join(', ');

    const evenNumbers = numbers.filter(num => num % 2 === 0);
    evenArraySpan.textContent = evenNumbers.join(', ');

    setTimeout(() => {
        console.log("3 Saniye");
        timeoutMessage.textContent = "3 Saniye";
    }, 3000);
});
