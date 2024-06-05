# JavaScript Arithmetic Operators

Arithmetic operations are fundamental in programming, and JavaScript provides a rich set of operators to handle various arithmetic tasks. This tutorial aims to elucidate these operators comprehensively, ensuring a deep understanding and critical assessment of their use in JavaScript.

## Operands and Operators

In arithmetic expressions, **operands** are the values or variables that operators act upon. For example, in the equation `11 + x + 5`, `11`, `x`, and `5` are operands, and the plus sign (`+`) is an operator.

### Basic Arithmetic Operators

1. **Addition (`+`)**
   - Adds two operands.

   ```javascript
   let students = 30;
   students = students + 1;  // Now students is 31
   ```

2. **Subtraction (`-`)**
   - Subtracts the second operand from the first.

   ```javascript
   students = students - 1;  // Now students is 29
   ```

3. **Multiplication (`*`)**
   - Multiplies two operands.

   ```javascript
   students = students * 2;  // Now students is 60
   ```

4. **Division (`/`)**
   - Divides the first operand by the second.

   ```javascript
   students = students / 2;  // Now students is 15
   ```

5. **Exponentiation (`**`)**
   - Raises the first operand to the power of the second.

   ```javascript
   students = students ** 2;  // Now students is 900
   students = students ** 3;  // Now students is 27,000
   ```

6. **Modulus (`%`)**
   - Returns the remainder of division of the first operand by the second.

   ```javascript
   let remainder = students % 3;  // If students is 31, remainder is 1
   ```

### Augmented Assignment Operators

To simplify the reassignment of variables, JavaScript provides augmented assignment operators:

1. **Addition Assignment (`+=`)**

   ```javascript
   students += 1;  // Equivalent to students = students + 1
   ```

2. **Subtraction Assignment (`-=`)**

   ```javascript
   students -= 1;  // Equivalent to students = students - 1
   ```

3. **Multiplication Assignment (`*=`)**

   ```javascript
   students *= 2;  // Equivalent to students = students * 2
   ```

4. **Division Assignment (`/=`)**

   ```javascript
   students /= 2;  // Equivalent to students = students / 2
   ```

5. **Exponentiation Assignment (`**=`)**

   ```javascript
   students **= 2;  // Equivalent to students = students ** 2
   ```

6. **Modulus Assignment (`%=`)**

   ```javascript
   students %= 2;  // Equivalent to students = students % 2
   ```

### Increment and Decrement Operators

JavaScript also offers operators to increase or decrease a variable by one:

1. **Increment (`++`)**

   ```javascript
   students++;  // Equivalent to students = students + 1
   ```

2. **Decrement (`--`)**

   ```javascript
   students--;  // Equivalent to students = students - 1
   ```

### Operator Precedence

In expressions with multiple operators, JavaScript follows specific rules, known as **operator precedence**, to determine the order of operations:

1. **Parentheses**
   - Operations inside parentheses are performed first.
2. **Exponentiation**
   - Performed after parentheses.
3. **Multiplication, Division, and Modulus**
   - Performed next, from left to right.
4. **Addition and Subtraction**
   - Performed last, from left to right.

### Example: Operator Precedence

Consider the following expression:

```javascript
let result = 1 + 2 * 3 ** 2 / 4 - 5;
console.log(result);
```

The operations are performed in this order:

1. `3 ** 2` (Exponentiation) → 9
2. `2 * 9` (Multiplication) → 18
3. `18 / 4` (Division) → 4.5
4. `1 + 4.5` (Addition) → 5.5
5. `5.5 - 5` (Subtraction) → 0.5

Thus, `result` is `0.5`.

### Exercises

1. Calculate the result of the following expression:

   ```javascript
   let result = (2 + 3) * (5 - 2) / 2 ** 3 % 4;
   console.log(result);
   ```

   - Steps:
     1. Parentheses: `(2 + 3)` → 5, `(5 - 2)` → 3
     2. Exponentiation: `2 ** 3` → 8
     3. Multiplication: `5 * 3` → 15
     4. Division: `15 / 8` → 1.875
     5. Modulus: `1.875 % 4` → 1.875

   The final result is `1.875`.

2. Determine if a number is even or odd using the modulus operator:

   ```javascript
   let number = 31;
   if (number % 2 === 0) {
       console.log(`${number} is even`);
   } else {
       console.log(`${number} is odd`);
   }
   ```

   - Since `31 % 2` is `1`, the output will be `31 is odd`.

By understanding and effectively utilizing these arithmetic operators, you can perform a wide range of calculations and operations in your JavaScript programs, enhancing their functionality and efficiency.
