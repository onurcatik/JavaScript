## Learn JavaScript CLASSES  🏭

JavaScript classes, introduced in ES6, provide a more structured and cleaner way to work with objects compared to the traditional constructor functions. This tutorial will cover the basics of creating and using classes, as well as some advanced features. By the end, you will understand how classes can help you write more organized and maintainable code.

### Introduction to Classes

Classes in JavaScript are essentially syntactic sugar over the existing prototype-based inheritance. They provide a clearer and more concise syntax to create objects and deal with inheritance.

### Creating a Class

To create a class, use the `class` keyword followed by the name of the class. Class names are typically written in PascalCase.

```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  
  displayProduct() {
    console.log(`Product: ${this.name}, Price: $${this.price.toFixed(2)}`);
  }
}
```

In the above example:
- We define a class `Product`.
- The `constructor` method is a special method for creating and initializing an object created with a class. It takes parameters `name` and `price`.
- The `displayProduct` method outputs the product details.

### Creating Instances of a Class

To create an instance of a class, use the `new` keyword followed by the class name and pass the required parameters.

```javascript
const product1 = new Product('Shirt', 19.99);
product1.displayProduct();
```

This will output:
```
Product: Shirt, Price: $19.99
```

### Adding Methods to a Class

You can add methods to a class without using the `function` keyword. Methods defined in a class are part of the prototype of the objects created by that class.

```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}, Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    const total = this.price + (this.price * salesTax);
    return total.toFixed(2);
  }
}

const product1 = new Product('Shirt', 19.99);
product1.displayProduct();
const salesTax = 0.05;
console.log(`Total Price (with tax): $${product1.calculateTotal(salesTax)}`);
```

This will output:
```
Product: Shirt, Price: $19.99
Total Price (with tax): $20.99
```

### Reusability and Additional Instances

You can create multiple instances of a class, making the class reusable.

```javascript
const product2 = new Product('Pants', 22.50);
product2.displayProduct();
console.log(`Total Price (with tax): $${product2.calculateTotal(salesTax)}`);

const product3 = new Product('Underwear', 100.00);
product3.displayProduct();
console.log(`Total Price (with tax): $${product3.calculateTotal(salesTax)}`);
```

This will output:
```
Product: Pants, Price: $22.50
Total Price (with tax): $23.63

Product: Underwear, Price: $100.00
Total Price (with tax): $105.00
```

