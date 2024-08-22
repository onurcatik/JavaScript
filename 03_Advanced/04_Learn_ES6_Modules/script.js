// script.js

import { getCircumference, getArea, getVolume } from './utils.js';

document.getElementById('calculateButton').addEventListener('click', () => {
    const radius = parseFloat(document.getElementById('radiusInput').value);

    if (isNaN(radius) || radius <= 0) {
        alert('Please enter a valid positive number for the radius.');
        return;
    }

    const circumference = getCircumference(radius).toFixed(2);
    const area = getArea(radius).toFixed(2);
    const volume = getVolume(radius).toFixed(2);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Circumference: ${circumference} cm</p>
        <p>Area: ${area} cm²</p>
        <p>Volume: ${volume} cm³</p>
    `;
});
