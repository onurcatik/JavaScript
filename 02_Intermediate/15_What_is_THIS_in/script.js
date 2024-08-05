const person1 = {
    name: "SpongeBob",
    faveFood: "Crabby Patties",
    sayHello: function() {
        document.getElementById('person1Output').textContent = `Hi, I am ${this.name}`;
    },
    eat: function() {
        document.getElementById('person1Output').textContent = `${this.name} is eating ${this.faveFood}`;
    }
};

const person2 = {
    name: "Patrick",
    faveFood: "Pizza",
    sayHello: function() {
        document.getElementById('person2Output').textContent = `Hi, I am ${this.name}`;
    },
    eat: function() {
        document.getElementById('person2Output').textContent = `${this.name} is eating ${this.faveFood}`;
    }
};

const person3 = {
    name : "Onur",
    faveFood:"Döner",
    sayHello: function() {
        document.getElementById("person3Output").textContent = `Hi, I am ${this.name}`;
        },
        eat: function() {
            document.getElementById('person3Output').textContent = `${this.name} is eating ${this.faveFood}`;
        }
    }



// Example of `this` in the global context
console.log(this); // Output: Window object

// Example of `this` in an arrow function
const arrowFunctionExample = () => {
    console.log(this); // Output: Window object
};

arrowFunctionExample();
