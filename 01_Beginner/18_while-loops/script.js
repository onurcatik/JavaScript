document.getElementById('login-button').addEventListener('click', function() {
    const correctUsername = 'admin';
    const correctPassword = 'admin';
    let loggedIn = false;
    let attempts = 0;

    while (!loggedIn && attempts < 3) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const messageElement = document.getElementById('message');

        if (username === correctUsername && password === correctPassword) {
            loggedIn = true;
            messageElement.style.color = 'green';
            messageElement.textContent = 'You are logged in.';
        } else {
            attempts++;
            messageElement.textContent = 'Invalid credentials, please try again.';
            if (attempts >= 3) {
                messageElement.textContent = 'Too many attempts. Please try again later.';
                document.getElementById('login-button').disabled = true;
            }
        }
    }
});
