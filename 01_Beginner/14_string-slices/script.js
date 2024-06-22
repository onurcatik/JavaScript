
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const spaceIndex = fullName.indexOf(' ');

    let firstName = '';
    let lastName='';

    if (spaceIndex !== -1) {
        firstName = fullName.slice(0, spaceIndex);
        lastName= fullName.slice(spaceIndex+1);
        } else {
            firstName=fullName
    }
    
    document.getElementById('firstName').textContent = firstName;
    document.getElementById('lastName').textContent = lastName
    });


