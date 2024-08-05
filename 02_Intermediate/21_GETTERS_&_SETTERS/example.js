class Rectangle {
    constructor(width , height) {
        this._width = width;
        this._height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width= newWidth;
    } else {
        console.error("Width must be a positive number");
    }
}

set height(newHeight) {
    if(newHeight > 0){
        this._height = newHeight;
    } else {
        console.error("Height must be a positive number");
    }
}


get width() {
    return this._height
}

get height () {
    return this._width

}

get area () {
    return this._height * this._width
}



}

const rectangle = new Rectangle(3, 4);
console.log(rectangle.width); // 3
console.log(rectangle.height); // 4
console.log(rectangle.area); // 12

rectangle.width = 5;
rectangle.height = 6;
console.log(rectangle.width); // 5
console.log(rectangle.height); // 6
console.log(rectangle.area); // 30

//  ----------

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