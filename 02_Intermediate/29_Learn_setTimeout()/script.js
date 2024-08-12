let timeoutID;

function startTimer() {
    timeoutID = setTimeout(() => {
        document.getElementById('status').textContent = 'Status: Timer completed!';
        alert('Hello!');
    }, 3000);

    document.getElementById('status').textContent = 'Status: Timer started...';
    console.log('Timer started');
}

function clearTimer() {
    clearTimeout(timeoutID);
    document.getElementById('status').textContent = 'Status: Timer cleared';
    console.log('Timer cleared');
}

document.getElementById('startButton').onclick = startTimer;
document.getElementById('clearButton').onclick = clearTimer;
