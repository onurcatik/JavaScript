// Define the first person object
const person1 = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    isEmployed: true,
    sayHello: function() {
        return "Hi, I'm SpongeBob";
    },
    eat: function() {
        return "I am eating a Krabby Patty";
    }
};

// Define the second person object
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function() {
        return "Hey, I'm Patrick";
    },
    eat: function() {
        return "I am eating roast beef, chicken, and pizza";
    }
};

const person3 = {
    firstName: "Onur",
    lastName: "Çatık",
    age :  27,
    isEmployed : false,
    sayHello : function() {
        return "Hi , Onur Çatık"
    },

    eat : function() {
        return "I am eating toast"
    }
            
        
}

// Function to display person information
function displayPersonInfo(person) {
    return `
        <div class="person-info">
            <p>Name: ${person.firstName} ${person.lastName}</p>
            <p>Age: ${person.age}</p>
            <p>Employed: ${person.isEmployed}</p>
            <p>Greeting: ${person.sayHello()}</p>
            <p>Eating: ${person.eat()}</p>
        </div>
    `;
}

// Get the output element
const output = document.getElementById('output');

// Display the information of both person1 and person2
output.innerHTML = `
    ${displayPersonInfo(person1)}
    ${displayPersonInfo(person2)}
    ${displayPersonInfo(person3)}
`;
