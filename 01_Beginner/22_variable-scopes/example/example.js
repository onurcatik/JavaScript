let x = 3 

function functionOne() {
    console.log(x)
}

function functionTwo () {
    console.log(x)
}
functionOne()
functionTwo()


// ----------------

function functionOne1() {
    let x = 2;
    console.log(x)
}

// ----------------

let globalX = 5;

function scopedFunction() {
    let localX = 1
    console.log(localX)
}

scopedFunction()
console.log(globalX)

