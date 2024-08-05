const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Coffee Maker", category: "Home" },
    { name: "Television", category: "Electronics" },
    { name: "Jeans", category: "Clothing" },
    { name: "Blender", category: "Home" },
];

function displayProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.name} (${product.category})`;
        productList.appendChild(li);
    });
}

function filterProducts(category) {
    let filteredProducts;

    if (category === "All") {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }

    displayProducts(filteredProducts);
}

// Display all products initially
displayProducts(products);
