let globalVar = 'I am a global variable!'; // Global scope: This variable can be accessed from anywhere in the code.

// globalFunction uses the globalVar to update the HTML content.
function globalFunction() {
    document.getElementById('output').innerHTML = globalVar; // Using the global variable.
}

// localFunction defines its own local variable and updates the HTML content with this local variable.
function localFunction() {
    let localVar = 'I am a local variable!'; // Local scope: This variable can only be accessed within localFunction.
    document.getElementById('output').innerHTML = localVar; // Using the local variable.
}

// nestedFunction demonstrates nested functions and variable scope.
function nestedFunction() {
    let outerVar = 'I am an outer variable!'; // This variable is locally defined within nestedFunction.
    
    // innerFunction uses outerVar and innerVar to update the HTML content.
    function innerFunction() {
        let innerVar = 'I am an inner variable!'; // This variable can only be accessed within innerFunction.
        document.getElementById('output').innerHTML = `${outerVar} and ${innerVar}`; // Using both outerVar and innerVar.
    }
    
    innerFunction(); // Calling innerFunction within nestedFunction.
}
