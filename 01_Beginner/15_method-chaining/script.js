document.getElementById('formatButton').addEventListener('click', function() {

    let username = document.getElementById('usernameInput').value;
    console.log(`Original input: "${username}"`);

    username = username.trim();
    console.log(`After trim: "${username}"`);

    let formattedUsername = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
    console.log(`Formatted Username: "${formattedUsername}"`);

    
    document.getElementById('formattedUsername').textContent = `Formatted Username: ${formattedUsername}`;
});
