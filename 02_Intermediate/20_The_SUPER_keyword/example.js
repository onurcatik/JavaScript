class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move(speed) {
    console.log(`${this.name} moves at a speed of ${speed} mph.`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
}

const rabbit = new Rabbit("Rabbit", 1, 25);

console.log(rabbit);

class Lion extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`${this.name} can run.`);
    super.move(this.runSpeed);
  }
}

const lion = new Lion("Lion",1,100)
console.log(lion)
