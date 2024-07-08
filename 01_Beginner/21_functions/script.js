function generateMessage() {
    const name = document.getElementById('name').value;
    const age = document.getElementById("age").value;
    const messageDiv = document.getElementById("message");

    if (name && age) {
        messageDiv.innerHTML = createBirthdayMessage(name, age);
    } else {
        messageDiv.innerHTML == "Enter Name and age:"
    }
}

function createBirthdayMessage(name, age) {
    return `
    <p>Happy Birthday to you!</p>
    <p>Happy Birthday to you!</p>
    <p>Happy Birthday dear ${name}!</p>
    <p>Happy Birthday to you!</p>
    <p>You are ${age} years old!</p>
    `;
}  
