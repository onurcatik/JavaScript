const fullName = "John Doe";
let firstName = fullName.slice(0, 4);
console.log(firstName);

// ---------------------------------

let lastName = fullName.slice(5);
console.log(lastName);
// ---------------------------------
let firstChar = fullName.slice(0, 1);
console.log(firstChar);

// ---------------------------------

let lastChar = fullName.slice(-1);
console.log(lastChar);

// ---------------------------------

const email = "john.doe@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let domain = email.slice(email.indexOf("@" + 1));
console.log(username);
console.log(domain);

// ---------------------------------

const fullName2 = "John Doe"
let spaceIndex = fullName2.indexOf(' ')
let firstName2 = fullName2.slice(spaceIndex)
let lastName2 = fullName2.slice(spaceIndex + 1)
console.log(firstName2)
console.log(lastName2)