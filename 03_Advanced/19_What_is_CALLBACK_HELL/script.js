// Utility function to log tasks to the DOM
function logTask(message) {
    const taskLog = document.getElementById("taskLog");
    const logItem = document.createElement("div");
    logItem.className = "log-item";
    logItem.textContent = message;
    taskLog.appendChild(logItem);
}

// Simulating asynchronous tasks using setTimeout and callbacks
function task1(callback) {
    setTimeout(() => {
        logTask("Task 1 complete");
        callback();
    }, 2000); // 2 seconds delay
}

function task2(callback) {
    setTimeout(() => {
        logTask("Task 2 complete");
        callback();
    }, 1000); // 1 second delay
}

function task3(callback) {
    setTimeout(() => {
        logTask("Task 3 complete");
        callback();
    }, 3000); // 3 seconds delay
}

function task4(callback) {
    setTimeout(() => {
        logTask("Task 4 complete");
        callback();
    }, 1500); // 1.5 seconds delay
}

// Nested callbacks (Callback Hell)
document.getElementById("startTasks").addEventListener("click", function () {
    logTask("Starting tasks...");
    task1(() => {
        task2(() => {
            task3(() => {
                task4(() => {
                    logTask("All tasks complete");
                });
            });
        });
    });
});
