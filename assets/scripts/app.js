const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `(${resultBeforeCalc}) ${operator} (${calcNumber})`
  outputResult(currentResult, calcDescription)
  logEntries.push(calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
   const logEntry = {
     opperation: operationIdentifier,
     prev: prevResult,
     number: operationNumber,
     result: newResult
   };
   console.log(logEntry);
}

function add() {
  if (userInput.value != '') {
  const initialResult = currentResult;
  currentResult += parseInt(userInput.value);
  createAndWriteOutput("+" , initialResult, userInput.value);
  writeToLog('ADD', initialResult, userInput.value, currentResult);
} else {alert("Please input a number")}
}

function subtract() {
  if (userInput.value != '') {
  const initialResult = currentResult;
  currentResult -= parseInt(userInput.value);
  createAndWriteOutput("-" , initialResult, userInput.value);
  writeToLog('SUBTRACT', initialResult, userInput.value, currentResult);
} else {alert("Please input a number")}
}

function multiply() {
  if (userInput.value != '') {
  const initialResult = currentResult;
  currentResult *= parseInt(userInput.value);
  createAndWriteOutput("*" , initialResult, userInput.value);
  writeToLog('MULTIPLY', initialResult, userInput.value, currentResult);
} else {alert("Please input a number")}
}

function divide() {
  if (parseInt(userInput.value) != 0 && userInput.value != '') {
    const initialResult = currentResult;
    currentResult /= parseInt(userInput.value);
    createAndWriteOutput("/" , initialResult, userInput.value);
    writeToLog('DIVIDE', initialResult, userInput.value, currentResult);
  } else {
    alert("Can't devide by Zero in R or input a number!");
  }
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

