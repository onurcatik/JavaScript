const customDate = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(customDate);

//------------------------
const stringDate = new Date('2024-01-02T12:00:00Z');
console.log(stringDate);

// ----------------------

const epochDate = new Date(1_700_000_000_000);
console.log(epochDate)


// ----------------------

const date= new Date()

console.log(date)

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

console.log(hours);       // Output: 7
console.log(minutes);     // Output: 45
console.log(seconds);     // Output: 21
console.log(milliseconds); // Output: 123