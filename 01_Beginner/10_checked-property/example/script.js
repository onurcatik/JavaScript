document.addEventListener("DOMContentLoaded", (event) => {
  // Get elements by their IDs
  const myCheckbox = document.getElementById("myCheckbox");
  const visaBtn = document.getElementById("visaBtn");
  const masterCardBtn = document.getElementById("masterCardBtn");
  const paypalBtn = document.getElementById("paypalBtn");
  const mySubmit = document.getElementById("mySubmit");
  const subResult = document.getElementById("subResult");
  const paymentResult = document.getElementById("paymentResult");

  mySubmit.addEventListener("click", (event) => {
    event.preventDefault();

    if (myCheckbox.checked) {
      subResult.textContent = "You are subscribed";
    } else {
      subResult.textContent = "You are not subscribed";
    }

    if (visaBtn.checked) {
      paymentResult.textContent = "You are paying with Visa";
      console.log(`Visa Selected: ${visaBtn}`);
      console.log("Visa Selected", visaBtn);
    } else if (masterCardBtn.checked) {
      paymentResult.textContent = "You are paying with MasterCard";
    } else if (paypalBtn.checked) {
      paymentResult.textContent = "You are paying with PayPal";
    } else {
      paymentResult.textContent = "You are not paying";
    }
  });
});
