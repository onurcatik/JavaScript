class User {
    // Static property to keep track of the number of users
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    // Instance method
    sayHello() {
        console.log(`Hello, my username is ${this.username}`);
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online`);
    }
}

// Creating user instances
const user1 = new User('SpongeBob');
const user2 = new User('Patrick');
const user3 = new User('Sandy');

// Accessing instance method
user1.sayHello(); // Output: Hello, my username is SpongeBob
user2.sayHello(); // Output: Hello, my username is Patrick
user3.sayHello(); // Output: Hello, my username is Sandy

// Accessing static method
User.getUserCount(); // Output: There are 3 users online

// Attempting to access static property via instance (incorrect)
console.log(user1.userCount); // Output: undefined

// Accessing static property via class (correct)
console.log(User.userCount); // Output: 3