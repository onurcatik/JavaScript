// Define the Address class
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

// Define the Person class
class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

// Create instances of Person
const person1 = new Person("SpongeBob SquarePants", 30, "124 Conch Street", "Bikini Bottom", "International Waters");

// Function to display person information
function displayPersonInfo(person) {
    const personInfoDiv = document.getElementById('person-info');
    personInfoDiv.innerHTML = `
        <div class="info-item"><strong>Name:</strong> ${person.name}</div>
        <div class="info-item"><strong>Age:</strong> ${person.age}</div>
        <div class="info-item"><strong>Address:</strong></div>
        <div class="info-item">Street: ${person.address.street}</div>
        <div class="info-item">City: ${person.address.city}</div>
        <div class="info-item">Country: ${person.address.country}</div>
    `;
}

// Display information for person1
displayPersonInfo(person1);
