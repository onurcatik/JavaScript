document.getElementById('convertButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const outputDiv = document.getElementById('output');
    let message = "";

    // Convert user input to a number
    const numberValue = Number(userInput);
    if (isNaN(numberValue)) {
        message += `The input "${userInput}" is not a valid number.<br>`;
    } else {
        message += `The number value is: ${numberValue}.<br>`;
    }

    // Convert user input to a boolean
    const booleanValue = Boolean(userInput);
    message += `The boolean value is: ${booleanValue}.<br>`;

    // Convert user input to a string (though it is already a string)
    const stringValue = String(userInput);
    message += `The string value is: "${stringValue}".<br>`;

    // Display the results
    outputDiv.innerHTML = message;
});
