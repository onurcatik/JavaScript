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
