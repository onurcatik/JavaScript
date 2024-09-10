// function task1() {
//     console.log("Task 1 complete");
// }

// function task2() {
//     console.log("Task 2 complete");
// }

// function task3() {
//     console.log("Task 3 complete");
// }

// function task4() {
//     console.log("Task 4 complete");
// }

// // Execute tasks in order
// task1();
// task2();
// task3();
// task4();

// console.log("All tasks complete");

// --------------

// function task1(callback) {
//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 2000); // Completes after 2 seconds
// }

// function task2(callback) {
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     }, 1000); // Completes after 1 second
// }

// function task3(callback) {
//     setTimeout(() => {
//         console.log("Task 3 complete");
//         callback();
//     }, 3000); // Completes after 3 seconds
// }

// function task4(callback) {
//     setTimeout(() => {
//         console.log("Task 4 complete");
//         callback();
//     }, 1500); // Completes after 1.5 seconds
// }

// // Callback hell: Nested callbacks to ensure order
// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 console.log("All tasks complete");
//             });
//         });
//     });
// });


function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 complete");
            resolve();
        }, 2000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 complete");
            resolve();
        }, 1000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 complete");
            resolve();
        }, 3000);
    });
}

function task4() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 4 complete");
            resolve();
        }, 1500);
    });
}

// Using Promises to avoid callback hell
task1()
    .then(task2)
    .then(task3)
    .then(task4)
    .then(() => {
        console.log("All tasks complete");
    });




