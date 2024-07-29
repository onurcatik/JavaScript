document.getElementById('updateButton').addEventListener('click', () => {
    updateText("Hello, World!", updateDOM);
});

function updateText(newText, callback) {
    setTimeout(() => {
        callback(newText);
    }, 2000); // Simulate a delay of 2 seconds
}

function updateDOM(text) {
    document.getElementById('myH1').textContent = text;
}
