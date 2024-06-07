# Math Object

## Accessing Mathematical Constants

The Math object includes several mathematical constants that can be accessed directly. Two important constants are `Math.PI` and `Math.E`.

```javascript
console.log(Math.PI); // Outputs: 3.141592653589793
console.log(Math.E);  // Outputs: 2.718281828459045
```

## Rounding Numbers

The Math object provides several methods for rounding numbers, each serving a different purpose:

- `Math.round()`: Rounds to the nearest integer.
- `Math.floor()`: Rounds down to the nearest integer.
- `Math.ceil()`: Rounds up to the nearest integer.
- `Math.trunc()`: Truncates the decimal part, returning only the integer part.

```javascript
let x = 3.21;
console.log(Math.round(x)); // Outputs: 3

x = 3.99;
console.log(Math.floor(x)); // Outputs: 3

x = 3.21;
console.log(Math.ceil(x)); // Outputs: 4

x = 3.21;
console.log(Math.trunc(x)); // Outputs: 3
```

## Exponentiation and Roots

For exponentiation, use `Math.pow()`, and for square roots, use `Math.sqrt()`:

```javascript
let base = 3;
let exponent = 2;
console.log(Math.pow(base, exponent)); // Outputs: 9

let number = 81;
console.log(Math.sqrt(number)); // Outputs: 9
```

## Logarithmic Functions

The natural logarithm (base e) of a number can be found using `Math.log()`:

```javascript
let num = 10;
console.log(Math.log(num)); // Outputs: 2.302585092994046
```

## Trigonometric Functions

The Math object includes several trigonometric functions such as `Math.sin()`, `Math.cos()`, and `Math.tan()` which take an angle in radians as an argument:

```javascript
let angleInRadians = 45 * (Math.PI / 180); // Converting degrees to radians
console.log(Math.sin(angleInRadians)); // Outputs: 0.7071067811865475
console.log(Math.cos(angleInRadians)); // Outputs: 0.7071067811865476
console.log(Math.tan(angleInRadians)); // Outputs: 1.0
```

## Absolute Value and Sign

To find the absolute value of a number, use `Math.abs()`, and to determine the sign of a number, use `Math.sign()`:

```javascript
let negativeNumber = -3.21;
console.log(Math.abs(negativeNumber)); // Outputs: 3.21
console.log(Math.sign(negativeNumber)); // Outputs: -1

let positiveNumber = 3.21;
console.log(Math.sign(positiveNumber)); // Outputs: 1

let zero = 0;
console.log(Math.sign(zero)); // Outputs: 0
```

## Finding Maximum and Minimum Values

To find the maximum or minimum value among a set of values, use `Math.max()` and `Math.min()`:

```javascript
let a = 1, b = 2, c = 3;
console.log(Math.max(a, b, c)); // Outputs: 3
console.log(Math.min(a, b, c)); // Outputs: 1
```

