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

class Rabbit extends Animal {
    constructor() {
        super();
        this.name = "Rabbit";
    }

    run() {
        console.log(`${this.name} is running`);
    }
}

class Fish extends Animal {
    constructor() {
        super();
        this.name = "Fish";
    }

    swim() {
        console.log(`${this.name} is swimming`);
    }
}

class Hawk extends Animal {
    constructor() {
        super();
        this.name = "Hawk";
    }

    fly() {
        console.log(`${this.name} is flying`);
    }
}


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