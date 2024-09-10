let buttons = document.querySelectorAll(".my-buttons");

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Change the clicked button's background color to 'tomato'
    event.target.style.backgroundColor = "tomato";

    console.log("Tomato");
  });
});

// -----------------

let newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList.add("my-buttons");

document.body.appendChild(newButton);

console.log(buttons);

// ------------------

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();

    // Update the NodeList after removal
    buttons = document.querySelectorAll(".my-buttons");
    console.log(buttons);
  });
});
