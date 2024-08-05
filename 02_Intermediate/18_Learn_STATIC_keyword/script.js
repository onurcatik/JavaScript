class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    sayHello() {
        return `Hello, my username is ${this.username}`; // True
    }

    static getUserCount() {
        return `Total Users: ${User.userCount}`;
    }
}

function addUser() {
    const username = prompt('Enter username:');
    if (username) {
        const user = new User(username);
        const userElement = document.createElement('p');
        userElement.textContent = user.sayHello();
        document.getElementById('userList').appendChild(userElement);
        document.getElementById('userCount').textContent = User.getUserCount();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userCount').textContent = User.getUserCount();
});
