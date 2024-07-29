# Build a JavaScript Random Password Generator 🔑

In this tutorial, we will create a robust random password generator using JavaScript. This exercise aims to solidify our understanding of functions, random number generation, and conditional logic. The tutorial is designed for beginners, yet it will cover detailed aspects to ensure a comprehensive understanding.

## Overview

We will create a function that generates a random password based on user-defined criteria such as length, inclusion of lowercase and uppercase letters, numbers, and symbols. Let's begin by defining the necessary constants and constructing our main function.

## Step-by-Step Implementation

### 1. Define Password Criteria Constants

First, we need to define constants to store the password criteria. These constants will determine the length of the password and the types of characters to include.

```javascript
const passwordLength = 12; // Length of the password
const includeLowercase = true; // Include lowercase characters
const includeUppercase = true; // Include uppercase characters
const includeNumbers = true; // Include numbers
const includeSymbols = true; // Include symbols
```

### 2. Character Sets

Next, we will define the character sets that can be included in the password.

```javascript
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
```

### 3. Generate Password Function

We will now define the `generatePassword` function. This function will take the password criteria as arguments and return a randomly generated password.

```javascript
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let allowedChars = '';
    let password = '';

    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    if (length <= 0) {
        return 'Password length must be at least 1';
    }
    
    if (allowedChars.length === 0) {
        return 'At least one set of characters needs to be selected';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}
```

### 4. Calling the Function

We will call the `generatePassword` function with the predefined constants and log the result.

```javascript
const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated Password: ${password}`);
```

### 5. Testing Different Scenarios

To ensure our function works as expected, we will test it with various combinations of criteria.

#### Test 1: All Options Enabled

```javascript
const password1 = generatePassword(12, true, true, true, true);
console.log(`Password with all options: ${password1}`);
```

#### Test 2: Only Lowercase and Numbers

```javascript
const password2 = generatePassword(12, true, false, true, false);
console.log(`Password with lowercase and numbers: ${password2}`);
```

#### Test 3: Invalid Length

```javascript
const password3 = generatePassword(0, true, true, true, true);
console.log(`Password with invalid length: ${password3}`);
```

#### Test 4: No Character Sets Selected

```javascript
const password4 = generatePassword(12, false, false, false, false);
console.log(`Password with no character sets selected: ${password4}`);
```

## Conclusion

In this tutorial, we built a random password generator in JavaScript that allows customization of the password length and character sets. This exercise provided practice with functions, random number generation, and conditional logic. Testing different scenarios ensured our function's robustness and correctness.

Here is the complete code for reference:

```javascript
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let allowedChars = '';
    let password = '';

    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    if (length <= 0) {
        return 'Password length must be at least 1';
    }
    
    if (allowedChars.length === 0) {
        return 'At least one set of characters needs to be selected';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated Password: ${password}`);
```

This comprehensive guide should serve as a foundational exercise for those looking to enhance their JavaScript skills, particularly in handling functions and randomization.