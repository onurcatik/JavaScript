function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }
  inner();
}

outer();

// ---------------------

function outer() {
  let message = "Hello World";

  function inner() {
    console.log(message);
  }

  return inner;
}

const myClosure = outer();
myClosure();

//  -------------

function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(`Count: ${count}`);
  }

  return increment;
}

const counter1 = createCounter();
counter1();
counter1();
counter1();

// -----------------

function createCounter1() {
  let counter = 0;

  return {
    increment() {
      counter++;
      console.log(`Count increased to: ${counter}`);
    },
    getCount() {
      return counter;
    },
  };
}

const counter = createCounter1();
counter.increment(); // Count increased to: 1
counter.increment(); // Count increased to: 2
console.log(`The current count is: ${counter.getCount()}`); // The current count is: 2

// Attempting to directly modify the count variable will fail
counter.count = 100;
console.log(`The current count is: ${counter.getCount()}`); // The current count is: 2

// ---------------------------

function createGame() {
    let score = 0;

    return {
        increaseScore(points) {
            score += points;
            console.log(`+${points} points`);
        },
        decreaseScore(points) {
            score -= points;
            console.log(`-${points} points`);
        },
        getScore() {
            return score;
        }
    };
}

const game = createGame();
game.increaseScore(5); // +5 points
game.increaseScore(6); // +6 points
game.decreaseScore(3); // -3 points
console.log(`The final score is: ${game.getScore()} points`); // The final score is: 8 points