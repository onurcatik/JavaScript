document.getElementById("divisionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the input values
    const dividendInput = document.getElementById("dividend").value;
    const divisorInput = document.getElementById("divisor").value;
    const resultElement = document.getElementById("result");
    const errorMessageElement = document.getElementById("errorMessage");

    // Clear previous results and error messages
    resultElement.textContent = "";
    errorMessageElement.textContent = "";

    try {
        // Convert inputs to numbers
        const dividend = Number(dividendInput);
        const divisor = Number(divisorInput);

        // Validate inputs
        if (isNaN(dividend) || isNaN(divisor)) {
            throw new Error("Both dividend and divisor must be numbers.");
        }

        if (divisor === 0) {
            throw new Error("Division by zero is not allowed.");
        }

        // Perform division
        const result = dividend / divisor;
        resultElement.textContent = `Result: ${result}`;
    } catch (error) {
        // Display error message
        errorMessageElement.textContent = `Error: ${error.message}`;
    } finally {
        console.log("Division operation completed.");
    }
});
