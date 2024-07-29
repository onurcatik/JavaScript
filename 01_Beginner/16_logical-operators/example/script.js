const temp = 28;
if (temp > 0 && temp <= 30) {
    console.log("It's a nice day");
} else {
    console.log("It's a bad day");
}

// ------------------------

if (temp <= 0 || temp > 30) {
    console.log("It's a bad day");
} else {
    console.log("The weather is good")
}

// ------------------------

const isSunny = false;

if(!isSunny){
    console.log("It's a bad day");
} else {
    console.log("It's a nice day");
}