try {
    console.log(x);
} catch(error) {
    console.error("An error occurred:", error)

};

console.log("You have reached the end of the program.");

// ----------------

try {
    console.log("Hello World");
} catch(error) {
    console.error("An error occurred:", error)
} finally {
    console.log("This always executes.");
}

console.log("You have reached the end of the program.");

// -----------------

function divide(a,b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a/b
}

try {
    console.log(divide(10,0))
} catch(error) {
    console.error("An error occurred:", error.message)
} finally {
    console.log("This always executes.");
}
