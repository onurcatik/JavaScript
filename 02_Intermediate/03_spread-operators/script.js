document.getElementById('showMaxMin').addEventListener('click', function() {
    const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    document.getElementById('results').innerHTML = `
        <p>Numbers: ${numbers.join(', ')}</p>
        <p>Maximum: ${max}</p>
        <p>Minimum: ${min}</p>
    `;
});

document.getElementById('combineArrays').addEventListener('click', function() {
    const fruits = ["apple", "orange", "banana"];
    const vegetables = ["carrot", "celery", "potato"];
    const combined = [...fruits, ...vegetables, "eggs", "milk"];

    document.getElementById('combinedResults').innerHTML = `
        <p>Fruits: ${fruits.join(', ')}</p>
        <p>Vegetables: ${vegetables.join(', ')}</p>
        <p>Combined: ${combined.join(', ')}</p>
    `;
});
