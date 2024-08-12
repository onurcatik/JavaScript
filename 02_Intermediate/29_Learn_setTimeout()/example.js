console.time("Loop Timer");

for (let i = 0; i < 1000000; i++) {}

console.timeEnd("Loop Timer");

// --------------------

console.time("Loop Timer - 10 Million");

for (let i = 0; i < 10000000; i++) {}

console.timeEnd("Loop Timer - 10 Million");

// ---------------------

function loadData() {
    console.time("loadData");

    for (let i = 0 ; i < 1000000000; i++){

    }
    console.timeEnd("loadData")
}

function processData() {
    console.time("processData");
    for (let i = 0; i < 1000000; i++) {
    }
    console.timeEnd("processData")
}

loadData()
processData()
