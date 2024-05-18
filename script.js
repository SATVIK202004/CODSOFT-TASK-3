function playSound() {
    var buttonSound = document.getElementById('buttonSound');
    buttonSound.currentTime = 0;
    buttonSound.play();
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function factorial(n) {
    if (n < 0) return 'Error';
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        handleKeyPress(event.key);
    });
});

function handleKeyPress(key) {
    if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay(key);
    } else if (    key === '(' || key === ')') {
        appendToDisplay(key);
    } else if (key === '%') {
        appendToDisplay(key);
    } else if (key === 's') { 
        appendToDisplay('Math.sin(');
    } else if (key === 'c') { 
        appendToDisplay('Math.cos(');
    } else if (key === 't') { 
        appendToDisplay('Math.tan(');
    } else if (key === 'S') { 
        appendToDisplay('Math.asin(');
    } else if (key === 'C') { 
        appendToDisplay('Math.acos(');
    } else if (key === 'T') { 
        appendToDisplay('Math.atan(');
    } else if (key === 'l') { 
        appendToDisplay('Math.log10(');
    } else if (key === 'L') { 
        appendToDisplay('Math.log(');
    } else if (key === 'e') { 
        appendToDisplay('Math.exp(');
    } else if (key === 'r') { 
        appendToDisplay('Math.sqrt(');
    } else if (key === '^') { 
        appendToDisplay('Math.pow(');
    } else if (key === 'p') { 
        appendToDisplay('Math.PI');
    } else if (key === 'E') { 
        appendToDisplay('Math.E');
    } else if (key === '!') { 
        appendToDisplay('factorial(');
    } else if (key === 'd') { 
        appendToDisplay('Math.pow(10,');
    } else if (key === 'b') {
        appendToDisplay('Math.pow(2,');
    } else if (key === 'i') { 
        appendToDisplay('1/(');
    } else if (key === 'a') { 
        appendToDisplay('Math.abs(');
    } else if (key === '2') { 
        appendToDisplay('Math.log2(');
    } else if (key === '3') { 
        appendToDisplay('Math.cbrt(');
    }
}

