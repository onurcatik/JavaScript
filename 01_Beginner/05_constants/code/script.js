document.getElementById('rectangle-form').onsubmit = function(event) {
    event.preventDefault();
    
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    
    const WIDTH = Number(widthInput.value);
    const HEIGHT = Number(heightInput.value);
    
    if (isNaN(WIDTH) || isNaN(HEIGHT)) {
        document.getElementById('result').textContent = "Please enter valid numbers for width and height.";
        return;
    }

    const AREA = WIDTH * HEIGHT;
    document.getElementById('result').textContent = "The area of the rectangle is: " + AREA + " square units.";
};
