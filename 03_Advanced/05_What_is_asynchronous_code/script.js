document.getElementById("startTasks").addEventListener("click", startTasks);

function startTasks() {
  // Start Task 1 after 3 seconds
  setTimeout(() => {
    document.getElementById("task1").textContent = "Task 1: Completed";
    taskTwo(); // Start Task 2 after Task 1 is complete
  }, 3000);
}

function taskTwo() {
  document.getElementById("task2").textContent = "Task 2: Completed";
  taskThree(); // Start Task 3 after Task 2 is complete
}

function taskThree() {
  document.getElementById("task3").textContent = "Task 3: Completed";
}
