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
        else if (getBtnValue !== 'C' && getBtnValue !== '←' && getBtnValue !== '=') {
            numberStack[0] === "0" ? numberStack[0] = getBtnValue : numberStack.push(getBtnValue);
            printScreenState();
        }
    }
})

function printScreenState() {
    getTextOutput.innerText = `${numberStack}`;
}