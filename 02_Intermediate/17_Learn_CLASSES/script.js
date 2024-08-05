class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}`;
    }

    calculateTotal(salesTax) {
        const total = this.price + (this.price * salesTax);
        return total.toFixed(2);
    }
}

const productListElement = document.getElementById('product-list');
const addProductButton = document.getElementById('add-product');

const products = [
    new Product('Shirt', 19.99),
    new Product('Pants', 22.50),
    new Product('Underwear', 100.00)
];

const salesTax = 0.05;

function displayProducts() {
    productListElement.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <p>${product.displayProduct()}</p>
            <p>Total Price (with tax): $${product.calculateTotal(salesTax)}</p>
        `;
        productListElement.appendChild(productElement);
    });
}

addProductButton.addEventListener('click', () => {
    const newProduct = new Product('Socks', 5.99);
    const clearProduct = new Product('Adidas', 100.1)
    const detailProduct = new Product('Kinetix', 55)
    products.push(newProduct);
    products.push(clearProduct)
    products.push(detailProduct)
    displayProducts();
});

displayProducts();
