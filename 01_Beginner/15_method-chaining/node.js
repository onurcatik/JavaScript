const readline = require('readline');

// Set up the readline interface for terminal input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Enter your username: ', (input) => {
    console.log(`Original input: "${input}"`);

    // Trim whitespace and format the username
    let username = input.trim();
    console.log(`After trim: "${username}"`);

    let formattedUsername = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
    console.log(`Formatted Username: "${formattedUsername}"`);

    // Close the readline interface
    rl.close();
});
