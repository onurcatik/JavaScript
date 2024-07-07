## For Loops


### Syntax of the `for` Loop

The `for` loop has a structured syntax that consists of three parts within parentheses, separated by semicolons:

```javascript
for (initialization; condition; increment) {
  // code to be executed
}
```

- **Initialization**: This statement is executed once before the loop starts. It is typically used to initialize a counter variable.
- **Condition**: This statement is evaluated before each iteration of the loop. If the condition evaluates to `true`, the loop continues; otherwise, it stops.
- **Increment**: This statement is executed at the end of each iteration. It is usually used to update the counter variable.

### Basic Example

Let's start with a basic example where we want to print the word "hello" three times using a `for` loop.

```javascript
for (let i = 0; i <= 2; i++) {
  console.log("hello");
}
```

- **Initialization**: `let i = 0` initializes the counter variable `i` to 0.
- **Condition**: `i <= 2` ensures the loop runs as long as `i` is less than or equal to 2.
- **Increment**: `i++` increments the counter variable `i` by 1 after each iteration.

In this example, the loop runs three times, and "hello" is printed each time.

### Detailed Breakdown

1. **Initialization**: `let i = 0`
   - The counter `i` is initialized to 0.
   
2. **Condition**: `i <= 2`
   - The loop will execute as long as `i` is less than or equal to 2.

3. **Increment**: `i++`
   - After each iteration, `i` is incremented by 1.

4. **Loop Body**: `console.log("hello")`
   - The code inside the loop is executed three times, printing "hello".

### Understanding the Counter

To see how the counter variable `i` changes during each iteration, we can modify the loop to print the value of `i`:

```javascript
for (let i = 0; i <= 2; i++) {
  console.log(i);
}
```

Output:
```
0
1
2
```

This shows that the loop starts at `i = 0` and increments `i` until the condition `i <= 2` is no longer met.

### Customizing the Loop

#### Counting to a Different Number

To count from 1 to 10:

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

Output:
```
1
2
3
4
5
6
7
8
9
10
```

#### Changing the Increment

To count by twos from 1 to 9:

```javascript
for (let i = 1; i < 10; i += 2) {
  console.log(i);
}
```

Output:
```
1
3
5
7
9
```

To start at 2 and count by twos to 10:

```javascript
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
```

Output:
```
2
4
6
8
10
```

#### Counting Down

To count down from 10 to 1:

```javascript
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Happy New Year!");
```

Output:
```
10
9
8
7
6
5
4
3
2
1
Happy New Year!
```

To count down by twos from 10:

```javascript
for (let i = 10; i > 0; i -= 2) {
  console.log(i);
}
```

Output:
```
10
8
6
4
2
```

### Using `continue` and `break`

#### Skipping Iterations with `continue`

The `continue` statement skips the current iteration and proceeds to the next iteration of the loop.

Example: Skip the number 13:

```javascript
for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    continue;  // Skip the number 13
  }
  console.log(i);
}
```

Output:
```
1
2
3
4
5
6
7
8
9
10
11
12
14
15
16
17
18
19
20
```

#### Exiting the Loop with `break`

The `break` statement exits the loop entirely, stopping further iterations.

Example: Stop the loop at 13:

```javascript
for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    break;  // Exit the loop when i equals 13
  }
  console.log(i);
}
```

Output:
```
1
2
3
4
5
6
7
8
9
10
11
12
```

