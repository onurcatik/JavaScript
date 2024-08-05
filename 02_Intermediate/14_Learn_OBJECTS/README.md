# JavaScript OBJECTS  🧍

In this tutorial, we will explore objects in JavaScript. An object is a collection of related properties and methods. Properties are attributes of an object, such as a name or age, while methods are functions that an object can perform. This tutorial will guide you through creating and working with objects, demonstrating their utility with examples.

## Creating an Object

We start by defining an object using the `const` keyword. Although it's not necessary to use `const`, it helps ensure that the object reference cannot be reassigned.

```javascript
const person1 = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    isEmployed: true
};
```

In this example, `person1` has four properties: `firstName`, `lastName`, `age`, and `isEmployed`. Each property is defined using key-value pairs.

## Accessing Object Properties

To access an object's properties, use the dot notation.

```javascript
console.log(person1.firstName); // Output: SpongeBob
console.log(person1.lastName);  // Output: SquarePants
console.log(person1.age);       // Output: 30
console.log(person1.isEmployed); // Output: true
```

## Creating Multiple Objects

If you need multiple objects, ensure they have unique identifiers.

```javascript
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false
};

console.log(person2.firstName); // Output: Patrick
console.log(person2.lastName);  // Output: Star
console.log(person2.age);       // Output: 42
console.log(person2.isEmployed); // Output: false
```

## Adding Methods to Objects

Methods are functions associated with an object. They define behaviors the object can perform.

```javascript
person1.sayHello = function() {
    console.log("Hi, I'm SpongeBob");
};

person2.sayHello = function() {
    console.log("Hey, I'm Patrick");
};

person1.sayHello(); // Output: Hi, I'm SpongeBob
person2.sayHello(); // Output: Hey, I'm Patrick
```

## Using Arrow Functions as Methods

You can use arrow functions for methods, which can make the syntax more concise.

```javascript
person1.eat = () => {
    console.log("I am eating a Krabby Patty");
};

person2.eat = () => {
    console.log("I am eating roast beef, chicken, and pizza");
};

person1.eat(); // Output: I am eating a Krabby Patty
person2.eat(); // Output: I am eating roast beef, chicken, and pizza
```

## Summary

JavaScript objects are a powerful way to group related properties and methods, representing real-world entities such as people, products, or places. Properties are key-value pairs that store data, while methods are functions that define behaviors.

Here is the complete code used in this tutorial:

```javascript
const person1 = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    isEmployed: true,
    sayHello: function() {
        console.log("Hi, I'm SpongeBob");
    },
    eat: () => {
        console.log("I am eating a Krabby Patty");
    }
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function() {
        console.log("Hey, I'm Patrick");
    },
    eat: () => {
        console.log("I am eating roast beef, chicken, and pizza");
    }
};

console.log(person1.firstName); // Output: SpongeBob
console.log(person1.lastName);  // Output: SquarePants
console.log(person1.age);       // Output: 30
console.log(person1.isEmployed); // Output: true

console.log(person2.firstName); // Output: Patrick
console.log(person2.lastName);  // Output: Star
console.log(person2.age);       // Output: 42
console.log(person2.isEmployed); // Output: false

person1.sayHello(); // Output: Hi, I'm SpongeBob
person2.sayHello(); // Output: Hey, I'm Patrick

person1.eat(); // Output: I am eating a Krabby Patty
person2.eat(); // Output: I am eating roast beef, chicken, and pizza
```
