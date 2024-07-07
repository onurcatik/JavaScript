function checkEquality() {
    const userInput = document.getElementById('userInput').value;
    const numberValue = 3.14;

    let result = "";
    if (userInput == numberValue) {
        result = "== Equality: The values are considered equal.";
    } else {
        result = "== Equality: The values are not considered equal.";
    }

 
    if (userInput === numberValue) {
        result += "\n=== Strict Equality: The values and types are considered equal.";
    } else {
        result += "\n=== Strict Equality: The values or types are not considered equal.";
    }

    document.getElementById('result').innerText = result;
}


