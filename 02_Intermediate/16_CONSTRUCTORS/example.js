function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function () {
      console.log(`You drive the ${this.model}.`);
    };
    this.output = function () {
      console.log(`The car is a ${this.year} ${this.make} ${this.model} in ${this.color}.`);
    };
  }
  
  const car1 = new Car("Ford", "Mustang", 2024, "red");
  const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
  const car3 = new Car("Dodge", "Charger", 2026, "silver");
  
  car1.drive();
  car1.output();
  
  car2.drive();
  car2.output();
  
  car3.drive();
  car3.output();
  

//  -----------------------

function Car2(a, b, c, d) {
    this.make = a;
    this.model = b;
    this.year = c;
    this.color = d;
    this.drive2 = function() {
        console.log(`${this.year} ${this.make} ${this.model} in ${this.color}`);
    };
}

const car4 = new Car2("Ford", "Mustang", 2024, "red");
const car5 = new Car2("Chevrolet", "Camaro", 2025, "blue");
const car6 = new Car2("Dodge", "Charger", 2026, "silver");

car4.drive2();
car5.drive2();
car6.drive2();


