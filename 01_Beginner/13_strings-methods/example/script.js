let username = "Onur Catik"
console.log(username.charAt(0))
console.log(username.charAt(1))

// ---------------------------------

console.log(username.indexOf("o"))
console.log(username.lastIndexOf("Ç"))

// ---------------------------------

console.log(username.length);
// ---------------------------------

let usernameWithSpaces = "Brooke"
console.log(usernameWithSpaces.trim());
// ---------------------------------
console.log(username.toUpperCase());
console.log(username.toLowerCase())

// ---------------------------------

console.log(username.repeat(3))

// ---------------------------------

console.log(username.endsWith("e"))
console.log(username.startsWith("B"))

// ---------------------------------

console.log(username.includes("roo"));

// ---------------------------------

let phoneNumber = "123-456-7890"
console.log(phoneNumber.replaceAll("-", " "))


// ---------------------------------

console.log(phoneNumber.padStart(15, "0"))
console.log(phoneNumber.padEnd(15, "0"))


// ---------------------------------

let user = "John Doe";
username = user.trim();
console.log(user.toUpperCase())
console.log(user.indexOf("D"))
console.log(user.startsWith("John"))
console.log(user.includes(" "))
let sanitizedPhone = "123-456-7890".replaceAll("-", "")
console.log(sanitizedPhone.padEnd(15, "*"))