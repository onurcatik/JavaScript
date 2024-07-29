document.getElementById("submitButton").onclick = function () {
    const ageInput = document.getElementById("ageInput")
    const result = document.getElementById("result")
    let age = Number(ageInput.value);

    if(isNaN(age)) {
        result.textContent=("Please enter a valid number")
        return
    }
    if(age < 0) {
        result.textContent=("Please enter a valid number")

        } else if ( age === 0) {
            result.textContent=("You are a baby")
        } else if ( age < 18) {
            result.textContent=("You are a child")
        } else if (age >= 100){
            result.textContent=("You are a centenarian")
        } else {
            result.textContent=("You are an adult")
        }
    }