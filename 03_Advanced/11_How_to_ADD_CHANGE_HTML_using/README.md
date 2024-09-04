# How to Add/Change HTML Using JavaScript

In this tutorial, we will explore how to dynamically add, modify, and remove HTML elements using JavaScript. Manipulating the DOM (Document Object Model) is a fundamental task in web development, allowing developers to create interactive web pages that respond to user input or dynamically update content.

### Key Steps
1. **Creating an Element**: You need to first create the element using JavaScript.
2. **Setting Attributes or Properties**: Once the element is created, you can define its attributes, properties, or styles.
3. **Appending or Prepending the Element to the DOM**: Finally, you add the element to the DOM by specifying its parent node.

### HTML Structure for the Exercise
First, let's create a basic HTML structure. For this example, we'll work with `div` elements, each containing a paragraph. We will create four `div` elements, each representing a box.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation</title>
    <style>
        .box {
            border: 3px solid black;
            width: 100%;
            height: 125px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div id="box1" class="box">
        <p>Box 1</p>
    </div>
    <div id="box2" class="box">
        <p>Box 2</p>
    </div>
    <div id="box3" class="box">
        <p>Box 3</p>
    </div>
    <div id="box4" class="box">
        <p>Box 4</p>
    </div>

    <script src="app.js"></script>
</body>
</html>
```

This basic HTML setup contains four `div` elements with paragraphs inside, each identified by an ID (`box1`, `box2`, etc.). The JavaScript we write will interact with these boxes to append, modify, and remove elements dynamically.

### Step 1: Creating an Element
To create a new element, we use the `document.createElement()` method. This method allows us to create an element of any valid HTML tag. In this case, we will create an `h1` element and assign it some text content.

```javascript
const newH1 = document.createElement('h1');
newH1.textContent = "I like pizza";
```

At this stage, we have created an `h1` element and added the text "I like pizza" to it. However, the element is not yet visible on the page because it hasn't been appended to the DOM.

### Step 2: Appending the Element to the DOM
To display the newly created `h1` element on the page, we need to append it to a specific parent element within the DOM. This is done using the `appendChild()` or `prepend()` methods.

```javascript
// Appending the h1 element to the body
document.body.appendChild(newH1);
```

This code adds the `newH1` element as the last child of the `body`. Alternatively, if you want the element to appear at the beginning, you can use the `prepend()` method.

```javascript
// Prepending the h1 element to the body
document.body.prepend(newH1);
```

### Step 3: Adding Attributes and Styles
You can also add attributes and styles to the element using JavaScript. For example, let’s set an `id` attribute and modify the text color and alignment.

```javascript
// Setting attributes
newH1.id = 'myH1';

// Changing styles
newH1.style.color = 'tomato'; // Set text color to 'tomato'
newH1.style.textAlign = 'center'; // Center the text
```

Now, the `h1` element has an ID of `myH1`, its text color is set to "tomato", and the text is centered.

### Appending to Specific Elements
Instead of appending the element directly to the `body`, you might want to append it within one of the `div` boxes. This can be achieved by selecting the specific element using `document.getElementById()`.

```javascript
// Appending to box1
const box1 = document.getElementById('box1');
box1.appendChild(newH1);
```

This places the `h1` element inside `box1`. If you want it to appear as the first child of `box1`, you can use the `prepend()` method.

```javascript
// Prepending to box1
box1.prepend(newH1);
```

### Inserting an Element Before Another Element
JavaScript also allows you to insert an element before another element using `insertBefore()`. This method requires two arguments: the new element and the reference element before which the new element should be inserted.

```javascript
// Inserting newH1 before box2
const box2 = document.getElementById('box2');
document.body.insertBefore(newH1, box2);
```

This code inserts the `newH1` element between `box1` and `box2`.

### Working with Query Selector and Node Lists
If you don't have `id` attributes for your elements, you can use `document.querySelectorAll()` to select multiple elements based on their class or other attributes. This returns a `NodeList`, which can be accessed using an index.

```javascript
const boxes = document.querySelectorAll('.box');

// Inserting newH1 before the second box
document.body.insertBefore(newH1, boxes[1]);
```

In this case, the second `div` element with the class `.box` will be the reference element for the insertion.

### Removing an Element
To remove an element, you must first identify its parent and then use the `removeChild()` method.

```javascript
// Removing newH1 from box1
const parentBox = document.getElementById('box1');
parentBox.removeChild(newH1);
```

This will remove the `newH1` element from `box1`. Note that you must always select the parent of the element you wish to remove.

### Example: Working with Ordered Lists
In this example, we will create a list item and append it to an ordered list.

#### HTML Structure
```html
<ol id="fruits">
    <li id="apple">Apple</li>
    <li id="orange">Orange</li>
    <li id="banana">Banana</li>
</ol>
```

#### JavaScript
```javascript
// Creating a new list item
const newListItem = document.createElement('li');
newListItem.textContent = 'Coconut';
newListItem.id = 'coconut';
newListItem.style.fontWeight = 'bold';
newListItem.style.backgroundColor = 'lightgreen';

// Appending to the list
const fruitsList = document.getElementById('fruits');
fruitsList.appendChild(newListItem);

// Inserting before a specific item (before 'Orange')
const orangeItem = document.getElementById('orange');
fruitsList.insertBefore(newListItem, orangeItem);
```

This example demonstrates how to create a new list item and insert it between existing items in the list.

### Conclusion
In this tutorial, we have covered how to dynamically add, change, and remove HTML elements using JavaScript. By understanding how to interact with the DOM, you can create dynamic and responsive web applications that offer a more engaging user experience. This approach forms the foundation of modern web development and is crucial for building interactive user interfaces.