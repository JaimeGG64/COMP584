const getTextOutput = document.querySelector('.calculator-screen');
var equationStack = ["0"];

document.querySelector('.calculator-buttons').addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON") {
        let getBtnValue = event.target.innerText;
        if (getBtnValue === 'C') {
            equationStack = ["0"];
            printScreenState();
        }
        else if (getBtnValue === '←' && equationStack.length > 1) {
            equationStack.pop();
            printScreenState();
        }
        else if (getBtnValue === '=') {
            let getResult;
            let getOperatorPositions = equationStack.findIndex(
                operator =>
                    operator === "÷" ||
                    operator === "×" ||
                    operator === "+" ||
                    operator === "−");
            let leftEqu = equationStack;
            let rightEqu = equationStack;
            let getInt1 = parseInt(leftEqu.slice(0, getOperatorPositions).join(''));
            let getInt2 = parseInt(rightEqu.slice(getOperatorPositions + 1).join(''));
            equationStack[getOperatorPositions] === "÷" ?
                getResult = divide(getInt1, getInt2) : getResult;
            equationStack[getOperatorPositions] === "×" ?
                getResult = multi(getInt1, getInt2) : getResult;
            equationStack[getOperatorPositions] === "+" ?
                getResult = add(getInt1, getInt2) : getResult;
            equationStack[getOperatorPositions] === "−" ?
                getResult = sub(getInt1, getInt2) : getResult;
            equationStack = [`${getResult}`];
            printScreenState();
        }
        else if (getBtnValue !== 'C' && getBtnValue !== '←' && getBtnValue !== '=') {
            equationStack[0] === "0" ? equationStack[0] = getBtnValue : equationStack.push(getBtnValue);
            printScreenState();
        }
    }
})

// function calculateEquation(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         calculateEquation(nextNumber);
//     }
// }

function printScreenState() {
    getTextOutput.innerText = `${equationStack.join('')}`;
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