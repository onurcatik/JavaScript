# String Slicing

## String Slicing Basics

String slicing is performed using the `slice` method. This method extracts a section of a string and returns it as a new string, without modifying the original string.

### Syntax

```javascript
string.slice(startIndex, endIndex);
```

- `startIndex`: The position where extraction starts (inclusive).
- `endIndex`: The position where extraction ends (exclusive). If omitted, extraction continues to the end of the string.

## Examples

### Example 1: Extracting the First Name

Let's start by extracting the first name from a full name string.

```javascript
const fullName = "John Doe";
let firstName = fullName.slice(0, 4); // "John"
console.log(firstName);
```

Here, `slice(0, 4)` starts at index 0 and extracts up to but not including index 4.

### Example 2: Extracting the Last Name

Similarly, to extract the last name:

```javascript
let lastName = fullName.slice(5); // "Doe"
console.log(lastName);
```

In this case, `slice(5)` starts at index 5 and extracts to the end of the string.

### Example 3: Extracting the First Character

To extract the first character of a string:

```javascript
let firstChar = fullName.slice(0, 1); // "J"
console.log(firstChar);
```

### Example 4: Extracting the Last Character

To extract the last character using a negative index:

```javascript
let lastChar = fullName.slice(-1); // "e"
console.log(lastChar);
```

Negative indices count back from the end of the string.

## Dynamic String Slicing

For more dynamic scenarios, such as extracting parts of a string based on the position of specific characters, we can combine `slice` with the `indexOf` method.

### Example 5: Extracting Parts of an Email

Let's extract the username and domain from an email address.

```javascript
const email = "john.doe@gmail.com";
let username = email.slice(0, email.indexOf('@')); // "john.doe"
let domain = email.slice(email.indexOf('@') + 1); // "gmail.com"
console.log(username);
console.log(domain);
```

Here, `email.indexOf('@')` finds the position of the '@' symbol, and `slice` extracts the appropriate parts of the string.

## Handling Spaces

When handling names or strings with spaces, ensure the indices account for spaces correctly.

### Example 6: First and Last Name Extraction with Space Handling

```javascript
const fullName = "John Doe";
let spaceIndex = fullName.indexOf(' ');
let firstName = fullName.slice(0, spaceIndex); // "John"
let lastName = fullName.slice(spaceIndex + 1); // "Doe"
console.log(firstName);
console.log(lastName);
```

This approach ensures that the space between the first and last names is not included in the extracted substrings.

## Exercises

To reinforce the concepts, let's work through an exercise.

### Exercise: Extracting Parts of an Email

1. **Define an email string:**

    ```javascript
    const email = "example.user@domain.com";
    ```

2. **Extract the username and domain:**

    ```javascript
    let username = email.slice(0, email.indexOf('@')); // "example.user"
    let domain = email.slice(email.indexOf('@') + 1); // "domain.com"
    console.log(username);
    console.log(domain);
    ```

3. **Extract the top-level domain (TLD):**

    ```javascript
    let tld = domain.slice(domain.lastIndexOf('.') + 1); // "com"
    console.log(tld);
    ```

