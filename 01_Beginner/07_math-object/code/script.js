document.getElementById('calculateButton').addEventListener('click', () => {
    // Displaying mathematical constants
    document.getElementById('piValue').textContent = Math.PI;
    document.getElementById('eValue').textContent = Math.E;

    // Rounding examples
    let x = 3.21;
    document.getElementById('roundValue').textContent = Math.round(x);

    x = 3.99;
    document.getElementById('floorValue').textContent = Math.floor(x);

    x = 3.21;
    document.getElementById('ceilValue').textContent = Math.ceil(x);

    document.getElementById('truncValue').textContent = Math.trunc(x);

    // Exponentiation and roots
    document.getElementById('powValue').textContent = Math.pow(3, 2);
    document.getElementById('sqrtValue').textContent = Math.sqrt(81);

    // Logarithmic function
    document.getElementById('logValue').textContent = Math.log(10);

    // Trigonometric functions
    let angleInRadians = 45 * (Math.PI / 180); // Converting degrees to radians
    document.getElementById('sinValue').textContent = Math.sin(angleInRadians).toFixed(2);
    document.getElementById('cosValue').textContent = Math.cos(angleInRadians).toFixed(2);
    document.getElementById('tanValue').textContent = Math.tan(angleInRadians).toFixed(2);

    // Absolute value and sign
    let negativeNumber = -3.21;
    document.getElementById('absValue').textContent = Math.abs(negativeNumber);
    document.getElementById('signValue').textContent = Math.sign(negativeNumber);

    // Finding maximum and minimum values
    let a = 1, b = 2, c = 3;
    document.getElementById('maxValue').textContent = Math.max(a, b, c);
    document.getElementById('minValue').textContent = Math.min(a, b, c);
});
