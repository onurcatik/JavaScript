const numbers = [1, 2, 3, 4, 5, 6, 7];

function isEven(element) {
  return element % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);

//  -----------------------

function isOdd(element) {
  return element % 2 !== 0;
}

const oddNumbers = numbers.filter(isOdd);

console.log(oddNumbers);

//  -------------------------

const ages = [16, 17, 18, 18, 19, 20, 60];

function isAdult(element) {
  return element >= 18;
}

const adults = ages.filter(isAdult);
console.log(adults);

//  -------------------------

function isChild(element) {
  return element < 18;
}

const children = ages.filter(isChild);
console.log(children);

//  -------------------------

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

function getShortWords(element) {
  return element.length <= 6;
}

const shortWord = words.filter(getShortWords);
console.log(shortWord);

//  -------------------------

function getLongWords(element) {
  return element.length > 6;
}

const longWords = words.filter(getLongWords);

console.log(longWords);
