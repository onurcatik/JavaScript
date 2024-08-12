// Display the current date and time
const currentDateElement = document.getElementById('currentDate');
const currentDate = new Date();
currentDateElement.textContent = currentDate;

// Create a custom date (January 1, 2024, 2:03:04 AM)
const customDateElement = document.getElementById('customDate');
const customDate = new Date(2024, 0, 1, 2, 3, 4);
customDateElement.textContent = customDate;

// Compare two dates when the button is clicked
const compareButton = document.getElementById('compareDates');
const comparisonResultElement = document.getElementById('comparisonResult');

compareButton.addEventListener('click', function() {
    const date1 = new Date('2023-12-31');
    const date2 = new Date('2023-01-01');

    if (date2 > date1) {
        comparisonResultElement.textContent = 'Happy New Year!';
        comparisonResultElement.style.color = 'green';
    } else {
        comparisonResultElement.textContent = 'Not yet...';
        comparisonResultElement.style.color = 'red';
    }
});
