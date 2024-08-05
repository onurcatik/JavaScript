class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        return `${this.name} moves at a speed of ${speed} mph.`;
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run() {
        const output = `${this.name} can run.\n${super.move(this.runSpeed)}`;
        return output;
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        const output = `${this.name} can swim.\n${super.move(this.swimSpeed)}`;
        return output;
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        const output = `${this.name} can fly.\n${super.move(this.flySpeed)}`;
        return output;
    }
}

class Lion extends Animal {
    constructor(name,age,runSpeed){
        super(name,age)
        this.runSpeed = runSpeed
    }
    run() {
        const output = `${this.name} can run.\n${super.move(this.runSpeed)}`;
        return output;
    }
}

// Create instances
const rabbit = new Rabbit('Rabbit', 1, 25);
const fish = new Fish('Fish', 2, 12);
const hawk = new Hawk('Hawk', 3, 50);
const lion = new Lion('Lion',5,125)

// Output elements
const outputElement = document.getElementById('output');

// Event listeners for buttons
document.getElementById('runRabbit').addEventListener('click', () => {
    outputElement.textContent = rabbit.run();
});

document.getElementById('swimFish').addEventListener('click', () => {
    outputElement.textContent = fish.swim();
});

document.getElementById('flyHawk').addEventListener('click', () => {
    outputElement.textContent = hawk.fly();
});

document.getElementById('lion').addEventListener('click',() => {
    outputElement.textContent = lion.run();
});
