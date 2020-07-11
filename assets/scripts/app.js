const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function calculateResult(calculationType) {
  if (userInput.value != "") {
    const initialResult = currentResult;
    if ((calculationType === 'ADD')) {
      currentResult += parseInt(userInput.value);
      operator = "+";
    } else if ((calculationType === 'SUBTRACT')) {
      currentResult -= parseInt(userInput.value);
      operator = "-";
    } else if ((calculationType === 'MULTIPLY')) {
      currentResult *= parseInt(userInput.value);
      operator = "*";
    } else if ((calculationType === 'DIVIDE')) {
      if (parseInt(userInput.value) != 0) {
        currentResult /= parseInt(userInput.value);
        operator = "/";
      } else {
        alert("Can't divie by Zero on R!");
        return;
      }
    }
    createAndWriteOutput(operator, initialResult, userInput.value);
    writeToLog(calculationType, initialResult, userInput.value, currentResult);
  } else {
    alert("Please input a number");
  }
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `(${resultBeforeCalc}) ${operator} (${calcNumber})`;
  outputResult(currentResult, calcDescription);
  logEntries.push(calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    opperation: operationIdentifier,
    prev: prevResult,
    number: operationNumber,
    result: newResult,
  };
  console.log(logEntry);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
