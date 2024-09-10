## Title: **Build a JavaScript Image Slider with HTML, CSS, and JavaScript**

In this tutorial, we will learn how to build a simple yet functional image slider using JavaScript, HTML, and CSS. The image slider will include features like automatic slide transitions, manual slide navigation using "previous" and "next" buttons, and a smooth fade animation. 

### Step 1: HTML Structure

We will begin by structuring the HTML to contain all necessary elements. Our slider will be composed of a container, images, and navigation buttons.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Image Slider</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="slider">
    <div class="slides">
        <img src="image1.jpg" alt="Image 1" class="slide">
        <img src="image2.jpg" alt="Image 2" class="slide">
        <img src="image3.jpg" alt="Image 3" class="slide">
    </div>
    <button class="prev" onclick="prevSlide()">&#x2190;</button>
    <button class="next" onclick="nextSlide()">&#x2192;</button>
</div>

<script src="script.js"></script>
</body>
</html>
```

Here, we use a `<div>` with the class `slider` to contain the entire slider component. Inside this, there is another `<div>` with the class `slides` that holds the image elements. We also include two buttons to navigate between slides manually.

### Step 2: CSS Styling

To style the image slider, we need to ensure that the slider is responsive, positions correctly, and includes a transition animation for each image slide.

```css
/* Slider container */
.slider {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: auto;
    overflow: hidden;
}

/* Image slides */
.slides .slide {
    width: 100%;
    display: none;
}

/* Buttons for navigation */
button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    padding: 10px 15px;
}

/* Previous button */
.prev {
    left: 0;
}

/* Next button */
.next {
    right: 0;
}

/* Fade animation */
@keyframes fade {
    from {
        opacity: 0.5;
    }
    to {
        opacity: 1;
    }
}

/* Displayed slide */
.display-slide {
    display: block;
    animation: fade 1.5s;
}
```

- The `slider` class contains the overall structure, including setting the `overflow: hidden` to ensure that only one image is displayed at a time.
- The `button` styles ensure that the navigation buttons are centered vertically within the slider.
- The `keyframes fade` animation allows each slide to fade in when it becomes visible.

### Step 3: JavaScript Functionality

In this section, we will implement the JavaScript logic to handle automatic and manual slide transitions.

```javascript
// Get all image elements
const slides = document.querySelectorAll('.slide');

// Initialize slide index
let slideIndex = 0;

// Set interval ID to handle automatic transitions
let intervalID = null;

// Initialize the slider by displaying the first image
function initSlider() {
    showSlide(slideIndex);
    intervalID = setInterval(nextSlide, 5000); // Automatic slide change every 5 seconds
}

// Show the current slide based on the index
function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('display-slide'); // Hide all slides
    });
    
    slides[index].classList.add('display-slide'); // Show the current slide
}

// Move to the next slide
function nextSlide() {
    slideIndex++;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset to the first slide if out of bounds
    }
    
    showSlide(slideIndex);
}

// Move to the previous slide
function prevSlide() {
    slideIndex--;
    
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Go to the last slide if out of bounds
    }
    
    showSlide(slideIndex);
    clearInterval(intervalID); // Stop the automatic transition
    intervalID = setInterval(nextSlide, 5000); // Restart automatic transitions
}

// Wait for DOM content to fully load before initializing
document.addEventListener('DOMContentLoaded', initSlider);
```

### Explanation:

1. **Initialization (`initSlider`)**: This function starts the slider by showing the first image and setting an interval to automatically move to the next image every 5 seconds using `setInterval()`.

2. **Displaying a Slide (`showSlide`)**: The `showSlide()` function ensures that only one image is visible at a time. It hides all images and displays the current one using the `display-slide` class.

3. **Next Slide (`nextSlide`)**: This function increments the `slideIndex` and displays the next image. If the `slideIndex` exceeds the number of images, it resets to 0 to create an infinite loop of slides.

4. **Previous Slide (`prevSlide`)**: Similarly, this function decrements the `slideIndex` to go back to the previous image. If `slideIndex` becomes negative, it resets to the last image.

5. **Event Listener**: The slider only initializes once all DOM content has loaded, using the `DOMContentLoaded` event.

### Conclusion

This image slider is a basic yet effective tool for showcasing images on a webpage. It supports both automatic and manual transitions, allowing users to navigate through images at their own pace. The addition of a fade animation ensures smooth transitions between slides.