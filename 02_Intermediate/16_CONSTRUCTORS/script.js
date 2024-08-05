// Define the Car constructor
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function() {
        console.log(`You drive the ${this.model}.`);
    };
}

// Create instances of Car
const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");
const car4 = new Car("Tofaş" , "Şahin", 1990 , "black" )

// Function to display car properties
function displayCar(car) {
    const carContainer = document.getElementById('car-container');
    const carDiv = document.createElement('div');
    carDiv.className = 'car';
    carDiv.innerHTML = `
        <p>Make: ${car.make}</p>
        <p>Model: ${car.model}</p>
        <p>Year: ${car.year}</p>
        <p>Color: ${car.color}</p>
    `;
    carContainer.appendChild(carDiv);
}

// Display all car instances
displayCar(car1);
displayCar(car2);
displayCar(car3);
displayCar(car4)

// Log car driving messages
car1.drive();   // Output: You drive the Mustang.
car2.drive();   // Output: You drive the Camaro.
car3.drive();   // Output: You drive the Charger.
