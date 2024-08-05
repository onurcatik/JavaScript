# Learn JavaScript INHERITANCE  🐇

Inheritance in JavaScript allows a new class to inherit properties and methods from an existing class. This relationship between two classes is known as a parent-child relationship, where the child class inherits attributes from the parent class. This concept is similar to a family tree, where a child inherits genes from a parent. Inheritance promotes code reusability, allowing us to avoid repeating the same properties and methods across multiple classes. In this tutorial, we will explore inheritance through a detailed example.

## Example

Let's begin by creating an `Animal` class. This class will have a property `alive`, and two methods: `eat` and `sleep`. All animals will start as being alive, and they should be able to eat and sleep.

### Animal Class

```javascript
class Animal {
  constructor() {
    this.alive = true;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}
```

In this example, the `Animal` class is the parent class. We will create child classes that inherit the properties and methods of the `Animal` class.

### Rabbit Class

```javascript
class Rabbit extends Animal {
  constructor() {
    super();
    this.name = 'Rabbit';
  }

  run() {
    console.log(`${this.name} is running`);
  }
}
```

### Fish Class

```javascript
class Fish extends Animal {
  constructor() {
    super();
    this.name = 'Fish';
  }

  swim() {
    console.log(`${this.name} is swimming`);
  }
}
```

### Hawk Class

```javascript
class Hawk extends Animal {
  constructor() {
    super();
    this.name = 'Hawk';
  }

  fly() {
    console.log(`${this.name} is flying`);
  }
}
```

In these examples, the `Rabbit`, `Fish`, and `Hawk` classes inherit the properties and methods from the `Animal` class using the `extends` keyword. The `super()` function is called to inherit the constructor of the parent class.

### Testing the Inheritance

Now, let's create objects for each of the child classes and test if they have access to the properties and methods of the parent class.

```javascript
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive); // true
rabbit.eat();              // Rabbit is eating
rabbit.sleep();            // Rabbit is sleeping
rabbit.run();              // Rabbit is running

console.log(fish.alive);   // true
fish.eat();                // Fish is eating
fish.sleep();              // Fish is sleeping
fish.swim();               // Fish is swimming

console.log(hawk.alive);   // true
hawk.eat();                // Hawk is eating
hawk.sleep();              // Hawk is sleeping
hawk.fly();                // Hawk is flying
```

In this test, each object of `Rabbit`, `Fish`, and `Hawk` classes can access the `alive` property and the `eat` and `sleep` methods from the `Animal` class. Additionally, each class has its own unique methods (`run`, `swim`, and `fly` respectively).

### Ensuring Unique Methods

The unique methods are specific to their respective classes. For instance, a rabbit can run, but a fish cannot. Similarly, a fish can swim, but a rabbit cannot.

```javascript
console.log(typeof rabbit.run); // function
console.log(typeof fish.run);   // undefined

console.log(typeof fish.swim);  // function
console.log(typeof hawk.swim);  // undefined

console.log(typeof hawk.fly);   // function
console.log(typeof rabbit.fly); // undefined
```

### Conclusion

Inheritance in JavaScript allows us to create a new class that inherits properties and methods from an existing class, promoting code reusability and adhering to the DRY (Don't Repeat Yourself) principle. By using inheritance, we can write cleaner, more efficient code.

In summary:
- A new class can inherit properties and methods from an existing class.
- The `extends` keyword is used to create a parent-child relationship.
- The `super()` function is used to call the constructor of the parent class.
- Inheritance helps us avoid repeating code and promotes code reusability.

This tutorial provides a foundational understanding of inheritance in JavaScript, enabling you to create more efficient and organized code.