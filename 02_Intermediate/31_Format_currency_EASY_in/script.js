// JavaScript code for currency formatting

// Amount to be formatted
let amount = 1234567.89;

// Format as US Dollars
let usd = amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

// Format as Indian Rupees
let inr = amount.toLocaleString('hi-IN', { style: 'currency', currency: 'INR' });

// Format as Euros
let eur = amount.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });

// Display the formatted currency values in the HTML
document.getElementById('usd').textContent = usd;
document.getElementById('inr').textContent = inr;
document.getElementById('eur').textContent = eur;
