function processString() {
    const username = document.getElementById('username').value;


    document.getElementById('charAtOutput').textContent = `Character at index 0: ${username.charAt(0)}`;

    document.getElementById('indexOfOutput').textContent = `First occurrence of 'a': ${username.indexOf('a')}`;

    document.getElementById('lastIndexOfOutput').textContent = `Last occurrence of 'a': ${username.lastIndexOf('a')}`;

    document.getElementById('lengthOutput').textContent = `Length of username: ${username.length}`;

    document.getElementById('trimOutput').textContent = `Trimmed username: '${username.trim()}'`;

    document.getElementById('upperCaseOutput').textContent = `Uppercase username: ${username.toUpperCase()}`;

    document.getElementById('lowerCaseOutput').textContent = `Lowercase username: ${username.toLowerCase()}`;

    document.getElementById('repeatOutput').textContent = `Username repeated 3 times: ${username.repeat(3)}`;

    document.getElementById('startsWithOutput').textContent = `Starts with 'A': ${username.startsWith('A')}`;

    document.getElementById('endsWithOutput').textContent = `Ends with 'z': ${username.endsWith('z')}`;

    document.getElementById('includesOutput').textContent = `Includes 'test': ${username.includes('test')}`;
}
