# Building a JavaScript Stopwatch: A Detailed Guide

In this tutorial, we will develop a stopwatch application using JavaScript, HTML, and CSS. This guide will cover every step, from setting up the HTML structure to implementing the necessary JavaScript functionality, ensuring that the application is both functional and visually appealing. The goal is to create a stopwatch that tracks hours, minutes, seconds, and milliseconds, and allows the user to start, stop, and reset the timer.

## HTML Structure

We begin by constructing the basic structure of our stopwatch in HTML. This will include the heading, the container for the stopwatch, the display for the time, and the control buttons.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Stopwatch</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 id="myH1">Stopwatch</h1>
    <div id="container">
        <div id="display">00:00:00:00</div>
        <div id="controls">
            <button id="startBtn" onclick="start()">Start</button>
            <button id="stopBtn" onclick="stop()">Stop</button>
            <button id="resetBtn" onclick="reset()">Reset</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### Explanation:
- **Heading (`h1`)**: The heading element (`h1`) with the ID `myH1` displays the title "Stopwatch".
- **Container (`div#container`)**: This div contains two sections: `display` and `controls`.
  - **Display (`div#display`)**: This section shows the current time of the stopwatch, starting with "00:00:00:00" as the initial placeholder.
  - **Controls (`div#controls`)**: This section includes three buttons: Start, Stop, and Reset, each with respective `onclick` event handlers.

## CSS Styling

Next, we style the application using CSS. The goal is to create a clean and user-friendly interface.

```css
/* General body styling */
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: hsl(210, 36%, 90%);
    font-family: Arial, sans-serif;
}

/* Heading styling */
#myH1 {
    font-size: 4rem;
    color: hsl(0, 0%, 25%);
}

/* Container styling */
#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid hsl(0, 0%, 25%);
    border-radius: 50px;
    padding: 30px;
    background-color: white;
}

/* Display styling */
#display {
    font-size: 5rem;
    font-family: monospace;
    font-weight: bold;
    color: hsl(0, 0%, 30%);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
    margin-bottom: 25px;
}

/* Controls styling */
#controls button {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px 20px;
    margin: 5px;
    min-width: 125px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    transition: background-color 0.5s ease;
}

/* Start button */
#startBtn {
    background-color: hsl(120, 60%, 50%);
}

#startBtn:hover {
    background-color: hsl(120, 60%, 40%);
}

/* Stop button */
#stopBtn {
    background-color: hsl(0, 60%, 50%);
}

#stopBtn:hover {
    background-color: hsl(0, 60%, 40%);
}

/* Reset button */
#resetBtn {
    background-color: hsl(240, 60%, 50%);
}

#resetBtn:hover {
    background-color: hsl(240, 60%, 40%);
}
```

### Explanation:
- **Flexbox Layout**: The `body` and `container` elements utilize Flexbox to center and organize content vertically.
- **Styling Elements**: The `display` is styled with a bold, large monospace font to give it a digital clock appearance, with a slight 3D effect using text-shadow.
- **Button Interaction**: Buttons change color smoothly when hovered, providing a more dynamic user experience.

## JavaScript Functionality

Finally, we implement the JavaScript logic to handle the start, stop, and reset functionalities of the stopwatch.

```javascript
// Variable declarations
const display = document.getElementById('display');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// Start function
function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

// Stop function
function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

// Reset function
function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = '00:00:00:00';
}

// Update function
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}
```

### Explanation:
- **Variables**:
  - `timer`: Stores the ID returned by `setInterval` to manage the timing.
  - `startTime`, `elapsedTime`: Track the starting time and elapsed time.
  - `isRunning`: Boolean to ensure the stopwatch starts or stops appropriately.
- **Functions**:
  - **start()**: Initializes the stopwatch, calculating the correct `startTime` and starting the update cycle using `setInterval`.
  - **stop()**: Stops the stopwatch by clearing the interval and updating the `elapsedTime`.
  - **reset()**: Resets all timing variables and clears the display.
  - **update()**: Updates the display with the correct time by calculating hours, minutes, seconds, and milliseconds from `elapsedTime`.

