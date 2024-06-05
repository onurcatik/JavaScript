function performOperation(operator) {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    let result;

    if (isNaN(operand1) || isNaN(operand2)) {
        result = 'Please enter valid numbers';
    } else {
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
            case '**':
                result = operand1 ** operand2;
                break;
            case '%':
                result = operand1 % operand2;
                break;
            default:
                result = 'Invalid operator';
        }
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}
