const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' }
];

function transformUser(user) {
    return {
        name: user.name.toUpperCase(),
        email: user.email.toLowerCase()
    };
}

const transformedUsers = users.map(transformUser);

function displayUsers(userArray) {
    const userList = document.getElementById('userList');
    userArray.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
            <div>Name: ${user.name}</div>
            <div>Email: <span>${user.email}</span></div>
        `;
        userList.appendChild(userDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayUsers(transformedUsers);
});
