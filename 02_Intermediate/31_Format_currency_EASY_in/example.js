let number = 123456789;

// United States formatting (English - US)
console.log(number.toLocaleString('en-US')); // "123,456,789"

// Indian formatting (Hindi - IN)
console.log(number.toLocaleString('hi-IN')); // "12,34,56,789"

// German formatting (German - DE)
console.log(number.toLocaleString('de-DE')); // "123.456.789"

// Default locale (based on browser settings)
console.log(number.toLocaleString()); // Depends on the browser's locale settings

// -------------------

let amount = 123456.789;

// US Dollar formatting
console.log(amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
// "$123,456.79"

// Indian Rupee formatting
console.log(amount.toLocaleString('hi-IN', { style: 'currency', currency: 'INR' }));
// "₹1,23,456.79"

// Euro formatting in Germany
console.log(amount.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// "123.456,79 €"


// -----------------------

// Basic currency formatting using toLocaleString()

let amount2 = 9876543.21;

console.log(amount2.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
// Output: "$9,876,543.21"

console.log(amount2.toLocaleString('hi-IN', { style: 'currency', currency: 'INR' }));
// Output: "₹98,76,543.21"

console.log(amount2.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// Output: "9.876.543,21 €"
