const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What's your username? ", (username) => {
    console.log(`Hello, ${username}`);
    rl.close();
});
