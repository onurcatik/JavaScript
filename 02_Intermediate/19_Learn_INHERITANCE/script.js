class Animal {
    constructor(name) {
        this.alive = true;
        this.name = name;
    }

    eat() {
        return `${this.name} is eating.`;
    }

    sleep() {
        return `${this.name} is sleeping.`;
    }
}

class Dog extends Animal {
    constructor() {
        super('Dog');
    }

    bark() {
        return `${this.name} is barking.`;
    }
}

class Cat extends Animal {
    constructor() {
        super('Cat');
    }

    meow() {
        return `${this.name} is meowing.`;
    }
}

class Bird extends Animal {
    constructor() {
        super('Bird');
    }

    fly() {
        return `${this.name} is flying.`;
    }
}

document.getElementById('showDetails').addEventListener('click', () => {
    const dog = new Dog();
    const cat = new Cat();
    const bird = new Bird();

    const details = `
        <p>${dog.name} details:</p>
        <ul>
            <li>${dog.eat()}</li>
            <li>${dog.sleep()}</li>
            <li>${dog.bark()}</li>
        </ul>
        <p>${cat.name} details:</p>
        <ul>
            <li>${cat.eat()}</li>
            <li>${cat.sleep()}</li>
            <li>${cat.meow()}</li>
        </ul>
        <p>${bird.name} details:</p>
        <ul>
            <li>${bird.eat()}</li>
            <li>${bird.sleep()}</li>
            <li>${bird.fly()}</li>
        </ul>
    `;

    document.getElementById('details').innerHTML = details;
});
