// main.js

// Importing specific members from the mathUtils module
import { PI, getCircumference, getArea, getVolume } from './mathUtils.js';

// Using the imported constant and functions
console.log(`Value of PI: ${PI}`);

const radius = 10;

const circumference = getCircumference(radius);
console.log(`Circumference of circle: ${circumference.toFixed(2)} cm`);

const area = getArea(radius);
console.log(`Area of circle: ${area.toFixed(2)} cm²`);

const volume = getVolume(radius);
console.log(`Volume of sphere: ${volume.toFixed(2)} cm³`);
