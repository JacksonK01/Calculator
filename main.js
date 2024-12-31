let cachedInteger = 0;
let hasCachedInteger = false;
let isDefaultState = true;
let lastOperation = null;


function getDisplayText() {
    return document.getElementById('display').innerText;
}

function getDisplayTextAsFloat() {
    return parseFloat(getDisplayText());
}

function setDisplayText(text) {
    document.getElementById('display').innerText = text;
}

function onPressedNumber(value) {
    if(isDefaultState) {
        setDisplayText(value);
    } else {
        setDisplayText(getDisplayText() + value);
    }
    isDefaultState = false;
}

function onDivide() {
    calculate(divide)
}

function onMultiply() {
    calculate(multiply)
}

function onSubtract() {
    calculate(subtract)
}

function onAdd() {
    calculate(add)
}

function calculate(operation) {
    let n = getDisplayTextAsFloat();

    if (hasCachedInteger) {
        cachedInteger = operation(n);
        setDisplayText(cachedInteger);
    } else {
        cachedInteger = n;
    }

    lastOperation = operation;
    isDefaultState = true;
    hasCachedInteger = true;
}

function onOperation() {
    cachedInteger = parseFloat(getDisplayText());
}

function onDecimal() {
    let text = getDisplayText();
    if (!text.includes('.')) {
        setDisplayText(text + '.');
    }
}


function onEqual() {
    if (hasCachedInteger && lastOperation) {
        let n = getDisplayTextAsFloat();
        cachedInteger = lastOperation(n);
        setDisplayText(cachedInteger);
        reset();
    }
}

function onClear() {
    setDisplayText(0);
    reset();
}

function onSwitchSign() {
    let n = getDisplayTextAsFloat();
    setDisplayText(n * -1);
}

function onPercent() {

}

function reset() {
    hasCachedInteger = false;
    isDefaultState = true;
    cachedInteger = 0;
}

function add(value) {
    let out = cachedInteger + value;
    reset()
    return out;
}

function subtract(value) {
    let out = cachedInteger - value;
    reset();
    return out;
}

function multiply(value) {
    let out = cachedInteger * value;
    reset();
    return out;
}

function divide(value) {
    let out = cachedInteger / value;
    reset();
    return out;
}