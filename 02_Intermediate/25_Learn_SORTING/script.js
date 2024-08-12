const products = [
    { name: 'Laptop', price: 899.99 },
    { name: 'Smartphone', price: 699.99 },
    { name: 'Tablet', price: 299.99 },
    { name: 'Headphones', price: 199.99 },
    { name: 'Smartwatch', price: 149.99 }
];

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `${product.name} <span>$${product.price.toFixed(2)}</span>`;
        productList.appendChild(li);
    });
}

document.getElementById('sortAsc').addEventListener('click', () => {
    products.sort((a, b) => a.price - b.price);
    displayProducts(products);
});

document.getElementById('sortDesc').addEventListener('click', () => {
    products.sort((a, b) => b.price - a.price);
    displayProducts(products);
});

// Initial display
displayProducts(products);
