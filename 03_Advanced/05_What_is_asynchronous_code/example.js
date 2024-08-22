console.log("Task1 completed");
console.log("Task2 completed")
console.log("Task3 completed")

setTimeout(()=>{
    console.log("Task1 completed");
},3000)


// ---------------

function taskOne(callback) {
    setTimeout(() => {
        console.log("Task 5 completed");
        callback();
    }, 3000);
}

function taskTwo() {
    console.log("Task 2 completed");
    console.log("Task3 completed")
    console.log("Task4 completed")
}

taskOne(taskTwo)
