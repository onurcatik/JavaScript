# Building a Digital Clock with JavaScript, HTML, and CSS

## Introduction

In this tutorial, we will develop a digital clock using JavaScript, HTML, and CSS. This guide will walk you through each step, ensuring you have a clear understanding of how to build a functional and visually appealing clock. We will critically address any inaccuracies in the approach to ensure your implementation follows best practices.

## HTML Structure

The HTML structure for this project is minimal yet effective. We will create a container to hold our clock and style it using CSS.

### HTML Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="clock-container">
        <div id="clock">00:00:00 AM</div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### Explanation
- **`clock-container`**: This div centers the clock on the screen.
- **`clock`**: This div holds the clock’s time, initially set to "00:00:00 AM".

## CSS Styling

We will use CSS to center the clock on the page and style it to look modern and sleek.

### CSS Code
```css
/* Reset default margin */
body {
    margin: 0;
    font-family: monospace;
    background: url('central-park.jpg') center/cover no-repeat fixed;
    color: white;
}

/* Centering the clock container */
#clock-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Clock styles */
#clock {
    font-size: 6.5rem;
    font-weight: bold;
    text-align: center;
    backdrop-filter: blur(5px);
    background-color: hsla(0, 0%, 100%, 0.1);
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
}
```

### Explanation
- **`body`**: We reset the margin and set the background to an image of Central Park, ensuring it covers the entire viewport without repeating.
- **`#clock-container`**: Flexbox is used to center the clock horizontally and vertically within the viewport.
- **`#clock`**: The clock is styled with a large, bold monospace font. The `backdrop-filter` creates a blur effect, and the background color is set with low opacity to create a frosted glass effect.

## JavaScript Functionality

The JavaScript part is where the clock functionality is implemented. The clock will update every second to show the current time, including AM/PM.

### JavaScript Code
```javascript
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Format time with leading zeros
    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${meridiem}`;
    
    document.getElementById('clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
```

### Explanation
- **`updateClock()`**: This function retrieves the current time, formats it to a 12-hour format, and updates the clock display.
- **`setInterval(updateClock, 1000)`**: This method ensures that the `updateClock()` function is called every second.
- **String formatting**: `padStart(2, '0')` is used to ensure the time always displays two digits, even for single-digit hours, minutes, or seconds.

