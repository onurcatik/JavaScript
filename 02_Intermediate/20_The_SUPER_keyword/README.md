# The JavaScript `super` Keyword

In JavaScript, the `super` keyword plays a crucial role in class inheritance, allowing derived classes to call and interact with their parent class's constructor and methods. This tutorial will delve into the functionality of the `super` keyword, illustrating its usage with practical examples. The content aims to maintain a serious and scientific tone, ensuring clarity and precision in explaining the concepts.

## Overview

The `super` keyword is used within derived classes to:
1. Call the constructor of the parent class.
2. Access the properties and methods of the parent class.

This keyword facilitates the inheritance mechanism in JavaScript, promoting code reusability and adherence to the DRY (Don't Repeat Yourself) principle.

## Example: Inheritance with the `super` Keyword

### Step 1: Define the Parent Class

Let's start by defining a parent class `Animal` and then create three child classes: `Rabbit`, `Fish`, and `Hawk`.

```javascript
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

### Step 2: Define Child Classes

Each child class will extend the `Animal` class. We will provide a constructor for each child class and use the `super` keyword to call the parent constructor.

```javascript
class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
}
```

### Step 3: Create Instances

We will now create instances of each child class to illustrate how the `super` keyword works in practice.

```javascript
const rabbit = new Rabbit('Rabbit', 1, 25);
const fish = new Fish('Fish', 2, 12);
const hawk = new Hawk('Hawk', 3, 50);

console.log(rabbit); // Rabbit { name: 'Rabbit', age: 1, runSpeed: 25 }
console.log(fish);   // Fish { name: 'Fish', age: 2, swimSpeed: 12 }
console.log(hawk);   // Hawk { name: 'Hawk', age: 3, flySpeed: 50 }
```

### Step 4: Add Methods to the Parent Class

Next, we add a method to the parent class `Animal` that can be extended by the child classes.

```javascript
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`${this.name} moves at a speed of ${speed} mph.`);
    }
}
```

### Step 5: Extend Methods in Child Classes

Each child class will have its own specific method that extends the parent method using the `super` keyword.

```javascript
class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        console.log(`${this.name} can run.`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`${this.name} can swim.`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`${this.name} can fly.`);
        super.move(this.flySpeed);
    }
}
```

### Step 6: Test the Methods

Let's invoke the methods on our instances and observe the output.

```javascript
const rabbit = new Rabbit('Rabbit', 1, 25);
const fish = new Fish('Fish', 2, 12);
const hawk = new Hawk('Hawk', 3, 50);

rabbit.run(); // Output: Rabbit can run. Rabbit moves at a speed of 25 mph.
fish.swim();  // Output: Fish can swim. Fish moves at a speed of 12 mph.
hawk.fly();   // Output: Hawk can fly. Hawk moves at a speed of 50 mph.
```

