function checkWeather() {
    const temp = parseInt(document.getElementById('temperature').value);
    const resultElement = document.getElementById('result');

    if (isNaN(temp)){
        resultElement.textContent = "Please enter a valid temperature.";
        resultElement.style.color = "red";
        return
    }

    if (temp > 0 && temp <= 30) {
        resultElement.textContent = "Good"
        resultElement.style.color = "green";
        } else {
            resultElement.textContent = "Bad"
            resultElement.style.color = "red";

    }
  }
  