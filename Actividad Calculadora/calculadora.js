function performOperations() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const calculator = new Calculator();

    document.getElementById('result').innerHTML = `
        Suma: ${calculator.add(num1, num2)} <br>
        Resta: ${calculator.subtract(num1, num2)} <br>
        Multiplicación: ${calculator.multiply(num1, num2)} <br>
        División: ${calculator.divide(num1, num2)}
    `;
}