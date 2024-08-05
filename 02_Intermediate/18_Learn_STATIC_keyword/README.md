# Learn JavaScript STATIC ⚡

In JavaScript, the `static` keyword is used to define properties or methods that belong to the class itself, rather than to the instances of the class. This means that static members are accessed directly on the class and not on the objects created from the class.

## Static Properties and Methods

Static properties and methods are useful for defining utility functions and constants that are related to the class but do not require an instance of the class to be accessed.

### Example: Math Utility Class

Let's create a class called `MathUtil` with a static property and some static methods.

```javascript
class MathUtil {
    // Define a static property for Pi
    static Pi = 3.14159;

    // Static method to calculate diameter from radius
    static getDiameter(radius) {
        return radius * 2;
    }

    // Static method to calculate circumference from radius
    static getCircumference(radius) {
        return 2 * MathUtil.Pi * radius;
    }

    // Static method to calculate area from radius
    static getArea(radius) {
        return MathUtil.Pi * radius * radius;
    }
}

// Accessing static property
console.log(MathUtil.Pi); // Output: 3.14159

// Using static methods
console.log(MathUtil.getDiameter(10)); // Output: 20
console.log(MathUtil.getCircumference(10)); // Output: 62.8318
console.log(MathUtil.getArea(10)); // Output: 314.159
```

In this example:
- `MathUtil.Pi` is a static property that holds the value of Pi.
- `MathUtil.getDiameter(radius)` is a static method that returns the diameter given a radius.
- `MathUtil.getCircumference(radius)` is a static method that returns the circumference given a radius.
- `MathUtil.getArea(radius)` is a static method that returns the area given a radius.

### Example: User Class with Static and Instance Members

Let's create a `User` class that demonstrates the use of both static and instance members.

```javascript
class User {
    // Static property to keep track of the number of users
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    // Instance method
    sayHello() {
        console.log(`Hello, my username is ${this.username}`);
    }

    // Static method to get the user count
    static getUserCount() {
        console.log(`There are ${User.userCount} users online`);
    }
}

// Creating user instances
const user1 = new User('SpongeBob');
const user2 = new User('Patrick');
const user3 = new User('Sandy');

// Accessing instance method
user1.sayHello(); // Output: Hello, my username is SpongeBob
user2.sayHello(); // Output: Hello, my username is Patrick
user3.sayHello(); // Output: Hello, my username is Sandy

// Accessing static method
User.getUserCount(); // Output: There are 3 users online

// Attempting to access static property via instance (incorrect)
console.log(user1.userCount); // Output: undefined

// Accessing static property via class (correct)
console.log(User.userCount); // Output: 3
```

In this example:
- `User.userCount` is a static property that keeps track of the number of users created.
- The constructor increments the `userCount` each time a new `User` instance is created.
- `sayHello()` is an instance method that logs a greeting message with the user's username.
- `User.getUserCount()` is a static method that logs the total number of users.

