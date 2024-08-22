// mathUtils.js

// Exporting a constant for Pi
export const PI = 3.14159;

// Exporting a function to calculate the circumference of a circle
export function getCircumference(radius) {
    return 2 * PI * radius;
}

// Exporting a function to calculate the area of a circle
export function getArea(radius) {
    return PI * radius * radius;
}

// Exporting a function to calculate the volume of a sphere
export function getVolume(radius) {
    return (4/3) * PI * Math.pow(radius, 3);
}
