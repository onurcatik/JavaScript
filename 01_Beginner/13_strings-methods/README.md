# String Methods


## String Initialization

Let's start by creating a string variable. For demonstration purposes, we will use a username.

```javascript
let username = "Brooke";
```

## Accessing Characters: `charAt()`

The `charAt()` method allows us to retrieve a character at a specific index. Note that string indices start at 0.

```javascript
console.log(username.charAt(0)); // Output: "B"
console.log(username.charAt(1)); // Output: "r"
```

## Finding Index: `indexOf()` and `lastIndexOf()`

To find the first occurrence of a character, use `indexOf()`. For the last occurrence, use `lastIndexOf()`.

```javascript
console.log(username.indexOf('o')); // Output: 2
console.log(username.lastIndexOf('o')); // Output: 3
```

## Measuring Length: `length`

To determine the length of a string, use the `length` property.

```javascript
console.log(username.length); // Output: 6
```

## Trimming Whitespace: `trim()`

The `trim()` method removes whitespace from both ends of a string.

```javascript
let usernameWithSpaces = "  Brooke  ";
console.log(usernameWithSpaces.trim()); // Output: "Brooke"
```

## Changing Case: `toUpperCase()` and `toLowerCase()`

Convert a string to uppercase or lowercase using `toUpperCase()` and `toLowerCase()` respectively.

```javascript
console.log(username.toUpperCase()); // Output: "BROOKE"
console.log(username.toLowerCase()); // Output: "brooke"
```

## Repeating Strings: `repeat()`

The `repeat()` method returns a new string containing a specified number of copies of the original string.

```javascript
console.log(username.repeat(3)); // Output: "BrookeBrookeBrooke"
```

## Checking Start and End: `startsWith()` and `endsWith()`

Use `startsWith()` and `endsWith()` to check if a string begins or ends with a specific sequence of characters.

```javascript
console.log(username.startsWith('B')); // Output: true
console.log(username.endsWith('e')); // Output: true
```

## Checking Inclusion: `includes()`

The `includes()` method determines if a string contains a specified sequence of characters.

```javascript
console.log(username.includes('roo')); // Output: true
```

## Replacing Substrings: `replaceAll()`

The `replaceAll()` method replaces all occurrences of a specified value within a string.

```javascript
let phoneNumber = "123-456-7890";
console.log(phoneNumber.replaceAll("-", "")); // Output: "1234567890"
```

## Padding Strings: `padStart()` and `padEnd()`

The `padStart()` and `padEnd()` methods pad the current string with another string until the resulting string reaches the given length.

```javascript
console.log(phoneNumber.padStart(15, "0")); // Output: "0000123-456-7890"
console.log(phoneNumber.padEnd(15, "0")); // Output: "123-456-7890000"
```

## Summary

JavaScript provides a variety of string methods to manipulate text efficiently. Understanding these methods enhances our ability to work with strings in different scenarios.

## Practice Example

Here is a practical example incorporating several methods discussed:

```javascript
let user = " John Doe ";
user = user.trim();
console.log(user.toUpperCase()); // Output: "JOHN DOE"
console.log(user.indexOf("D")); // Output: 5
console.log(user.startsWith("John")); // Output: true
console.log(user.includes(" ")); // Output: true
let sanitizedPhone = "123-456-7890".replaceAll("-", "");
console.log(sanitizedPhone.padEnd(15, "*")); // Output: "1234567890*****"
```

In this example, we trim whitespace, change the case to uppercase, find the index of a character, check if the string starts with a specific sequence, and sanitize a phone number by replacing dashes and padding the result.

These are some of the most useful string methods in JavaScript, essential for effective text manipulation.