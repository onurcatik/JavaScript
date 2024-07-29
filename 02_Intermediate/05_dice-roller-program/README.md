# JavaScript Dice Roller Program 🎲

In this tutorial, we will create a dice roller program using JavaScript, HTML, and CSS. The program will allow users to specify the number of dice to roll and display the corresponding dice images and values. This project involves creating the necessary HTML structure, applying CSS for styling, and writing JavaScript for the logic and interactivity.

## HTML Structure

First, we will create the HTML structure for our dice roller program. We will include a container for our program, an input field for specifying the number of dice, a button to trigger the dice roll, and sections to display the dice results and images.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice Roller</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="container">
        <h1>Dice Roller</h1>
        <label for="num-of-dice">Number of Dice:</label>
        <input type="number" id="num-of-dice" value="1" min="1">
        <button onclick="rollDice()">Roll Dice</button>
        <div id="dice-result"></div>
        <div id="dice-images"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## CSS Styling

Next, we will add CSS to style our program. We will style the container, button, input field, and the dice result and images sections.

```css
/* styles.css */
#container {
    font-family: Arial, sans-serif;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
}

button {
    font-size: 1.5rem;
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    background-color: hsl(220, 100%, 50%);
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: hsl(220, 100%, 60%);
}

button:active {
    background-color: hsl(220, 100%, 70%);
}

input[type="number"] {
    font-size: 2rem;
    width: 150px;
    text-align: center;
    font-weight: bold;
}

#dice-result {
    margin: 25px;
}

#dice-images img {
    width: 150px;
    margin: 5px;
}
```

## JavaScript Logic

Finally, we will implement the JavaScript logic to handle the dice rolling functionality. This includes defining the `rollDice` function, generating random numbers for the dice rolls, and updating the HTML to display the results and images.

```javascript
// script.js
function rollDice() {
    const numOfDice = document.getElementById('num-of-dice').value;
    const diceResult = document.getElementById('dice-result');
    const diceImages = document.getElementById('dice-images');

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice-images/dice${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
```

## Conclusion

This tutorial has demonstrated how to create a dice roller program using JavaScript, HTML, and CSS. By following these steps, you have learned how to structure the HTML, style it with CSS, and implement the logic using JavaScript. This program allows users to specify the number of dice to roll and displays the corresponding dice images and values.

Feel free to expand on this project by adding more features, such as customizing the appearance of the dice or adding animations for rolling the dice. The possibilities are endless, and this project serves as a solid foundation for further enhancements.