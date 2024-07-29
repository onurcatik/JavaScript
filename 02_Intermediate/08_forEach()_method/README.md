# JavaScript forEach() Method in 8 Minutes! ➿

## Introduction

The `forEach()` method in JavaScript is a powerful tool for iterating over the elements of an array and applying a specified function to each element. This tutorial will provide a comprehensive overview of the `forEach()` method, demonstrating its usage with practical examples. We will critically address any inaccuracies and ensure the content adheres to rigorous and precise standards.

## Basic Usage

The `forEach()` method executes a provided function once for each array element. Let's start with a simple example:

### Example: Displaying Array Elements

```javascript
let numbers = [1, 2, 3, 4, 5];

function display(element) {
    console.log(element);
}

numbers.forEach(display);
```

In this example, we create an array `numbers` containing integers from 1 to 5. The `display` function takes an element as an argument and logs it to the console. The `forEach()` method calls the `display` function for each element in the array, resulting in the following output:

```
1
2
3
4
5
```

### Parameters Provided by `forEach()`

The callback function passed to `forEach()` receives three arguments:
1. `element` - The current element being processed in the array.
2. `index` - The index of the current element being processed.
3. `array` - The array `forEach()` was called upon.

### Example: Accessing Index and Array

```javascript
numbers.forEach(function(element, index, array) {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});
```

This will output:

```
Element: 1, Index: 0, Array: 1,2,3,4,5
Element: 2, Index: 1, Array: 1,2,3,4,5
Element: 3, Index: 2, Array: 1,2,3,4,5
Element: 4, Index: 3, Array: 1,2,3,4,5
Element: 5, Index: 4, Array: 1,2,3,4,5
```

## Manipulating Array Elements

### Doubling Each Element

We can use the `forEach()` method to modify each element of the array.

```javascript
function double(element, index, array) {
    array[index] = element * 2;
}

numbers.forEach(double);
console.log(numbers);
```

This will double each element in the `numbers` array, resulting in:

```
[2, 4, 6, 8, 10]
```

### Tripling Each Element

Similarly, we can triple each element:

```javascript
function triple(element, index, array) {
    array[index] = element * 3;
}

numbers.forEach(triple);
console.log(numbers);
```

This results in:

```
[6, 12, 18, 24, 30]
```

### Squaring Each Element

We can also square each element using the `Math.pow()` method:

```javascript
function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}

numbers.forEach(square);
console.log(numbers);
```

This will produce:

```
[36, 144, 324, 576, 900]
```

### Cubing Each Element

Lastly, we can cube each element:

```javascript
function cube(element, index, array) {
    array[index] = Math.pow(element, 3);
}

numbers.forEach(cube);
console.log(numbers);
```

This results in:

```
[216, 1728, 5832, 13824, 27000]
```

## Practical Example: Manipulating Strings

### Displaying Fruit Names

Let's apply the `forEach()` method to an array of strings:

```javascript
let fruits = ["apple", "orange", "banana", "coconut"];

function displayFruit(element) {
    console.log(element);
}

fruits.forEach(displayFruit);
```

The output will be:

```
apple
orange
banana
coconut
```

### Converting to Uppercase

We can convert all the fruit names to uppercase:

```javascript
function uppercase(element, index, array) {
    array[index] = element.toUpperCase();
}

fruits.forEach(uppercase);
console.log(fruits);
```

This will produce:

```
["APPLE", "ORANGE", "BANANA", "COCONUT"]
```

### Converting to Lowercase

Similarly, we can convert them to lowercase:

```javascript
function lowercase(element, index, array) {
    array[index] = element.toLowerCase();
}

fruits.forEach(lowercase);
console.log(fruits);
```

This results in:

```
["apple", "orange", "banana", "coconut"]
```

### Capitalizing the First Letter

We can capitalize the first letter of each fruit name:

```javascript
function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

fruits.forEach(capitalize);
console.log(fruits);
```

This will produce:

```
["Apple", "Orange", "Banana", "Coconut"]
```

## Conclusion

The `forEach()` method is a versatile and powerful tool for iterating over array elements and applying functions to them. Understanding how to utilize this method effectively can significantly enhance your ability to manipulate and process arrays in JavaScript.

By carefully structuring your callback functions and leveraging the parameters provided by `forEach()`, you can perform a wide range of operations on array elements, from simple displays to complex transformations. This tutorial has covered the essential concepts and provided practical examples to illustrate the method's utility in real-world scenarios.