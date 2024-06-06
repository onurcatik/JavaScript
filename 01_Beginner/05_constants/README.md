# JavaScript Constants



## Defining Constants

To define a constant in JavaScript, use the `const` keyword. Constants must be initialized at the time of declaration. Here is an example of declaring a constant:

```javascript
const PI = 3.14159;
```

In the context of our example, we will use `const` to define the value of Pi.

## Example: Calculating the Circumference of a Circle

Let's create a simple program to calculate the circumference of a circle using both `let` and `const` keywords to understand their differences and benefits.

### Step-by-Step Implementation

1. **Declare Variables and Constants:**

    ```javascript
    const PI = 3.14159;  // Define Pi as a constant
    let radius;         // Declare radius, to be assigned later
    let circumference;  // Declare circumference, to be calculated
    ```

2. **Prompt for User Input:**

    ```javascript
    radius = window.prompt("Enter the radius of a circle:");
    radius = Number(radius);  // Convert the input string to a number
    ```

3. **Calculate the Circumference:**

    ```javascript
    circumference = 2 * PI * radius;
    ```

4. **Display the Result:**

    ```javascript
    console.log("The circumference is: " + circumference);
    ```

### Complete Code

Here is the complete code for the example described above:

```javascript
const PI = 3.14159;
let radius = window.prompt("Enter the radius of a circle:");
radius = Number(radius);
let circumference = 2 * PI * radius;
console.log("The circumference is: " + circumference + " cm");
```

### Using Constants for Security

Using `const` ensures that the value of `PI` cannot be changed accidentally or maliciously. If someone tries to reassign the value of `PI`, JavaScript will throw an error:

```javascript
try {
    PI = 420.69;
} catch (e) {
    console.error("Error: " + e.message);
}
```

This will output an error message indicating that reassignment to a constant variable is not allowed.

## Example with HTML Input

Next, we will enhance our program to accept user input through an HTML form. This approach is more user-friendly and avoids the use of the `window.prompt` method.

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Circumference Calculator</title>
</head>
<body>
    <h1>Enter the radius of a circle</h1>
    <label for="radius">Radius:</label>
    <input type="text" id="radius">
    <button id="submit">Submit</button>
    <h3 id="result"></h3>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript Code

```javascript
document.getElementById("submit").onclick = function() {
    const PI = 3.14159;
    let radius = document.getElementById("radius").value;
    radius = Number(radius);
    let circumference = 2 * PI * radius;
    document.getElementById("result").textContent = "The circumference is: " + circumference + " cm";
};
```

In this example, the program takes user input from a text box, calculates the circumference, and displays the result in an HTML element.

## Error Handling

While `const` prevents reassignment, it is also good practice to handle potential errors gracefully. For example, if a user enters a non-numeric value, we should notify them of the invalid input:

```javascript
document.getElementById("submit").onclick = function() {
    const PI = 3.14159;
    let radius = document.getElementById("radius").value;
    
    if (isNaN(radius)) {
        document.getElementById("result").textContent = "Please enter a valid number for the radius.";
        return;
    }
    
    radius = Number(radius);
    let circumference = 2 * PI * radius;
    document.getElementById("result").textContent = "The circumference is: " + circumference + " cm";
};
```

