## JavaScript Getters & Setters

### Introduction

In JavaScript, getters and setters are special methods that provide controlled access to an object's properties. Getters make properties readable, while setters make them writable. By using getters and setters, we can validate and modify values when reading or writing properties. This ensures data integrity and provides a layer of abstraction that can be very useful in maintaining the robustness of our code.

### Overview

**Getters**:
- Getters are used to access properties.
- They provide a way to retrieve a property value.

**Setters**:
- Setters are used to change properties.
- They provide a way to set a property value, with optional validation.

### Example: Rectangle Class

Let’s illustrate the use of getters and setters with a `Rectangle` class.

#### Step 1: Define the Rectangle Class

We start by defining a `Rectangle` class with a constructor that accepts `width` and `height` as parameters.

```javascript
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
}
```

#### Step 2: Add Setters for Validation

We want to ensure that `width` and `height` are positive numbers. We add setters to perform this validation.

```javascript
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }
}
```

#### Step 3: Add Getters for Access

We add getters to access the `width` and `height` properties.

```javascript
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }
}
```

#### Step 4: Additional Computed Properties

We can add a getter for the area of the rectangle, which is a computed property.

```javascript
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get area() {
        return this._width * this._height;
    }
}
```

### Example: Person Class

Let's create another example with a `Person` class to demonstrate validation of different types of data.

#### Step 1: Define the Person Class

We start by defining a `Person` class with a constructor that accepts `firstName`, `lastName`, and `age`.

```javascript
class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
}
```

#### Step 2: Add Setters for Validation

We add setters to validate that `firstName` and `lastName` are non-empty strings and that `age` is a non-negative number.

```javascript
class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === 'string' && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === 'string' && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge) {
        if (typeof newAge === 'number' && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("Age must be a non-negative number");
        }
    }
}
```

#### Step 3: Add Getters for Access

We add getters to access `firstName`, `lastName`, and `age` properties.

```javascript
class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === 'string' && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === 'string' && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge) {
        if (typeof newAge === 'number' && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("Age must be a non-negative number");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
```

### Example Usage

```javascript
const rectangle = new Rectangle(3, 4);
console.log(rectangle.width); // 3
console.log(rectangle.height); // 4
console.log(rectangle.area); // 12

rectangle.width = 5;
rectangle.height = 6;
console.log(rectangle.width); // 5
console.log(rectangle.height); // 6
console.log(rectangle.area); // 30

const person = new Person('SpongeBob', 'SquarePants', 30);
console.log(person.firstName); // SpongeBob
console.log(person.lastName); // SquarePants
console.log(person.age); // 30
console.log(person.fullName); // SpongeBob SquarePants

person.firstName = 'Patrick';
person.lastName = 'Star';
person.age = 35;
console.log(person.firstName); // Patrick
console.log(person.lastName); // Star
console.log(person.age); // 35
console.log(person.fullName); // Patrick Star
```

### Conclusion

By using getters and setters in JavaScript, we can enforce validation rules and encapsulate access to an object's properties. This practice helps in maintaining clean and reliable code, ensuring that objects are used correctly and consistently throughout an application.