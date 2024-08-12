document.getElementById('startLoadData').addEventListener('click', function() {
    console.time("loadData");

    for (let i = 0; i < 100000000; i++) {
        // Simulate loading data
    }

    console.timeEnd("loadData");
    document.getElementById('output').innerHTML = "Data loading time has been logged to the console.";
});

document.getElementById('startProcessData').addEventListener('click', function() {
    console.time("processData");

    for (let i = 0; i < 1000000; i++) {
        // Simulate processing data
    }

    console.timeEnd("processData");
    document.getElementById('output').innerHTML = "Data processing time has been logged to the console.";
});
