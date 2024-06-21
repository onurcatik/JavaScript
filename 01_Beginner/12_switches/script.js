document.getElementById('checkFruit').addEventListener('click', function() {
    const fruit = document.getElementById('fruitSelector').value;
    let result = '';

    switch (fruit) {
        case 'apple':
            result = 'You selected an Apple. Apples are rich in fiber.';
            break;
        case 'banana':
            result = 'You selected a Banana. Bananas are high in potassium.';
            break;
        case 'cherry':
            result = 'You selected a Cherry. Cherries are packed with antioxidants.';
            break;
        case 'date':
            result = 'You selected a Date. Dates are a great source of energy.';
            break;
        case 'elderberry':
            result = 'You selected an Elderberry. Elderberries are known for their immune-boosting properties.';
            break;
        default:
            result = 'Please select a valid fruit.';
    }

    document.getElementById('result').innerText = result;
});
