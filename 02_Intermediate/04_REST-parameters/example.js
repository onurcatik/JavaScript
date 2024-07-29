const food1 = 'Pizza';
const food2 = 'Hamburger';
const food3 = 'Hot Dog';
const food4 = 'Sushi';
const food5 = 'Ramen';

function openFridge(...foods) {
    console.log(foods);
}

openFridge(food1, food2, food3, food4, food5);

// ----------------------------

function getFood(...foods) {
    return foods;

}

const foodArray = getFood(food1, food2, food3, food4, food5);
console.log(...foodArray); 

// ----------------------------

function sum(...numbers) {
    let result = 0;
    for ( let number of numbers){
        result += number;

    }
    return result;
}

const total = sum(1,2,3,4,5);
console.log(`Your total is ${total}`);

// ----------------------------

function getAverage(...numbers){
    let result = 0; 
    for (let number of numbers){
        result += number;
}
return result / numbers.length;
}

const average = getAverage(75, 100, 85, 90, 50);
console.log(`The average is ${average}`);

// --------------------------------

function combineStrings(...string) {
    return string.join(' ');

}
const fullName = combineStrings("Mr.", "SpongeBob", 'SquarePants',"Third")
console.log(fullName)