const person1 = {
  name: "Onur",
  faveFood: "Et",
  sayHello: function () {
    console.log(`Hi, I am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.faveFood}`);
  },
};

person1.sayHello()
person1.eat()

//  --------------------

const person2 = {
    name : "Mehmet",
    faveFood : "Pizza",
    sayHello : () => {
        console.log(`Hi, I am ${this.name}`);
    },
    eat : () => {

        console.log(`${this.name} is eating ${this.faveFood}`);

    }
}

person2.sayHello()
person2.eat()

//  ----------------------

const person3 = {
    name : "Ahmet",
    faveFood : "Kebap",
    sayHello : function() {
        console.log(`Hi, I am ${this.name}`);

    },
    eat : function() {
        console.log(`${this.name} is eating ${this.faveFood}`);
    }
}

person3.sayHello()
person3.eat()


