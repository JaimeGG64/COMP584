const getTextOutput = document.querySelector('.calculator-screen');
var numberStack = ["0"];
var computedResult;

document.querySelector('.calculator-buttons').addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        let getBtnValue = event.target.innerText;
        if (getBtnValue === 'C') {
            numberStack = ["0"];
            printScreenState();
        }
        else if (getBtnValue === '←' && numberStack.length > 1) {
            numberStack.pop();
            printScreenState();
        }
        else if (getBtnValue === '=') {
            let getResult;
            let getOperatorPositions = numberStack.findIndex(
                operator =>
                    operator === "÷" || operator === "×" || operator === "+" || operator === "−");
            let leftEqu = numberStack;
            let rightEqu = numberStack;
            let getInt1 = parseInt(leftEqu.slice(0, getOperatorPositions).join(''));
            let getInt2 = parseInt(rightEqu.slice(getOperatorPositions + 1).join(''));
            numberStack[getOperatorPositions] === "÷" ? getResult = divide(getInt1, getInt2) : getResult;
            numberStack[getOperatorPositions] === "×" ? getResult = multi(getInt1, getInt2) : getResult;
            numberStack[getOperatorPositions] === "+" ? getResult = add(getInt1, getInt2) : getResult;
            numberStack[getOperatorPositions] === "−" ? getResult = sub(getInt1, getInt2) : getResult;
            numberStack = [`${getResult}`];
            printScreenState();
        }
        else if (getBtnValue !== 'C' && getBtnValue !== '←' && getBtnValue !== '=') {
            numberStack[0] === "0" ? numberStack[0] = getBtnValue : numberStack.push(getBtnValue);
            printScreenState();
        }
    }
})

function printScreenState() {
    getTextOutput.innerText = `${numberStack.join('')}`;
}

let add = (val1, val2) => {
    return val1 + val2;
}

let sub = (val1, val2) => {
    return val1 - val2;
}

let multi = (val1, val2) => {
    return val1 * val2;
}

let divide = (val1, val2) => {
    return val1 / val2;
}