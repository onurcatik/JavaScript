class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}, Price: $${this.price.toFixed(2)}`);
  }


calculateTotal(salesTax) {
    const total = this.price +(this.price*salesTax)
    return total.toFixed(5);
}
}


const product1 = new Product("Shirt" , 19.12312312123);
product1.displayProduct()
const salesTax = 0.123123
console.log(`Total Price (with tax): $${product1.calculateTotal(salesTax)}`);

const product2 = new Product("Pants" , 22.50)
product2.displayProduct()
console.log(`Total Price (with tax): $${product2.calculateTotal(salesTax)}`);

