# Learn JavaScript NESTED OBJECTS

## Introduction
Nested objects in JavaScript are objects that exist inside other objects. They allow you to represent more complex data structures. This capability is essential for modeling real-world entities that have hierarchical relationships. For instance, a `person` object could contain an `address` object as well as a `contactInfo` object.

## Definition
Nested objects are simply objects within objects. This allows for the creation of complex data structures.

## Example Use Cases
- A `person` object containing an `address` object.
- A `shoppingCart` object where each item (e.g., keyboard, mouse, monitor) is an object with its own properties and methods.

## Basic Example

Here is a basic example of how to create and work with nested objects:

### Creating a Nested Object

```javascript
const person = {
    fullName: "SpongeBob SquarePants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch Street",
        city: "Bikini Bottom",
        country: "International Waters"
    }
};
```

### Accessing Nested Object Properties

You can access the properties of nested objects using the dot notation:

```javascript
console.log(person.fullName); // SpongeBob SquarePants
console.log(person.age); // 30
console.log(person.isStudent); // true
console.log(person.hobbies); // ["karate", "jellyfishing", "cooking"]

console.log(person.address); // { street: "124 Conch Street", city: "Bikini Bottom", country: "International Waters" }
console.log(person.address.street); // 124 Conch Street
console.log(person.address.city); // Bikini Bottom
console.log(person.address.country); // International Waters
```

### Accessing Elements in an Array within an Object

To access individual elements in an array within an object:

```javascript
console.log(person.hobbies[0]); // karate
console.log(person.hobbies[1]); // jellyfishing
console.log(person.hobbies[2]); // cooking
```

### Looping through Nested Object Properties

To loop through the properties of a nested object, you can use a `for...in` loop:

```javascript
for (const property in person.address) {
    console.log(`${property}: ${person.address[property]}`);
}
// Output:
// street: 124 Conch Street
// city: Bikini Bottom
// country: International Waters
```

## Advanced Example: Using Classes with Nested Objects

### Creating Classes

Let's create a more complex example using ES6 classes:

```javascript
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
```

### Instantiating Objects

Now, we can create instances of our `Person` class, which include nested `Address` objects:

```javascript
const person1 = new Person("SpongeBob", 30, "124 Conch Street", "Bikini Bottom", "International Waters");
const person2 = new Person("Patrick", 37, "128 Conch Street", "Bikini Bottom", "International Waters");
const person3 = new Person("Squidward", 45, "126 Conch Street", "Bikini Bottom", "International Waters");

console.log(person1.name); // SpongeBob
console.log(person1.age); // 30
console.log(person1.address.street); // 124 Conch Street
console.log(person1.address.city); // Bikini Bottom
console.log(person1.address.country); // International Waters

console.log(person3.name); // Squidward
console.log(person3.age); // 45
console.log(person3.address.street); // 126 Conch Street
console.log(person3.address.city); // Bikini Bottom
console.log(person3.address.country); // International Waters
```

## Summary

Nested objects are a powerful feature in JavaScript that allows for the creation of complex and hierarchical data structures. By using nested objects, you can model real-world entities more accurately and manage related data more efficiently.

### Key Points
- Nested objects are objects within other objects.
- Use dot notation to access properties of nested objects.
- Loop through nested object properties using `for...in` loops.
- Utilize ES6 classes to create structured and reusable nested objects.

Understanding and using nested objects effectively will enhance your ability to work with complex data in JavaScript, enabling you to build more sophisticated and maintainable applications.