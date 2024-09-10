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
