document.addEventListener("DOMContentLoaded", () => {
  const myButton = document.getElementById("myButton");
  const label1 = document.getElementById("label1");
  const label2 = document.getElementById("label2");
  const label3 = document.getElementById("label3");
  const min = 1;
  const max = 6;

  myButton.onclick = () => {
    let randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;

    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
  };
});
