document.getElementById("submit").onclick = function () {
    const PI = 3.14159;
    let radius = document.getElementById("radius").value
    radius = Number(radius);
    let circumference = 2* PI * radius;
    document.getElementById("result").textContent="Circumference is: " + circumference
}