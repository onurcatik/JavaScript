const numbers = [1,2,3,4,5]
const maximum = Math.max(...numbers);
console.log(maximum);

//------------------

const number = [1,2,3,4,5]
const minimum = Math.min(...number)
console.log(minimum)

//------------------

const username = "JohnDoe";
const letters = [...username]
console.log(letters);

//------------------

const username1 = "JohnDoe"
const letters1 = [...username1]
const joinedLetters = letters1.join('-')
console.log(joinedLetters)

//------------------

const fruits = ["apple" , "orange" , "banana"];
const newFruits = [...fruits];
console.log(newFruits);

//------------------

const fruit = ["apple" , "orange", "banana"];
const vegetables = ["carrot", "celery" , "potato"];
const all = [...fruit, ...vegetables, 'egg', 'milk'];
console.log(all)


