document.addEventListener('DOMContentLoaded', () => {
    const user = {
        name: 'John Doe',
        age: 28,
        occupation: 'Software Developer'
    };

    // Destructuring the user object
    const { name, age, occupation } = user;

    // Assigning destructured values to HTML elements
    document.getElementById('name').textContent = `Name: ${name}`;
    document.getElementById('age').textContent = `Age: ${age}`;
    document.getElementById('occupation').textContent = `Occupation: ${occupation}`;
});
