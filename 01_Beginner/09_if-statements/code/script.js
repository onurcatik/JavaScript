document.getElementById("submitButton").onclick = function () {
  const ageInput = document.getElementById("ageInput");
  const result = document.getElementById("result");
  let age = Number(ageInput.value);

  if (isNaN(age)) {
    result.textContent = "Valid Number.";
    result.style.color = "red";
    return;
  }
  if (age < 0) {
    result.textContent = "Your age can't be below zero.";
    result.style.color = "red";
  } else if (age == 0) {
    result.textContent = "You can't enter.";
    result.style.color = "red";
  } else if (age < 18) {
    result.textContent = "You must be 18+ to enter this site.";
    result.style.color = "orange";
  } else if (age >= 100) {
    result.textContent = "You are too old to enter this site.";
    result.style.color = "orange";
  } else {
    result.textContent = "You are old enough to enter this site.";
    result.style.color = "green";
  }
};
