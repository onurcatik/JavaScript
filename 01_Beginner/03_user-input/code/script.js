let username;
document.getElementById('mySubmit').onclick = function() {
    username = document.getElementById('myText').value;
    console.log(username);  // Log the username to the console

    // Update the H1 element with the user's name
    document.getElementById('myH1').textContent = `Hello, ${username}`;
};
