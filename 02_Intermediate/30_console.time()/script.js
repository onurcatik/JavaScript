document.getElementById('startLoadData').addEventListener('click', function() {
    console.time('loadData');
    
    for (let i = 0; i < 100000000; i++) {
        // Simulate loading data
    }

    console.timeEnd('loadData');
    document.getElementById('output').innerText = 'Load Data function executed. Check console for timing results.';
});

document.getElementById('startProcessData').addEventListener('click', function() {
    console.time('processData');
    
    for (let i = 0; i < 1000000; i++) {
        // Simulate processing data
    }

    console.timeEnd('processData');
    document.getElementById('output').innerText = 'Process Data function executed. Check console for timing results.';
});
