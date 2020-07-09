const defaultResult = 0;
let currentResult = defaultResult;


function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `(${resultBeforeCalc}) ${operator} (${calcNumber})`
  outputResult(currentResult, calcDescription)
}

function add() {
  const initialResult = currentResult;
  currentResult = currentResult + parseInt(userInput.value);
  createAndWriteOutput("+" , initialResult, userInput.value);
}

function subtract() {
  const initialResult = currentResult;
  currentResult = currentResult - parseInt(userInput.value);
  createAndWriteOutput("-" , initialResult, userInput.value);
}

function multiply() {
  const initialResult = currentResult;
  currentResult = currentResult * parseInt(userInput.value);
  createAndWriteOutput("*" , initialResult, userInput.value);
}

function divide() {
  if (parseInt(userInput.value) != 0) {
    const initialResult = currentResult;
    currentResult = currentResult / parseInt(userInput.value);
    createAndWriteOutput("/" , initialResult, userInput.value);
  } else {
    alert("Can't devide by Zero in R");
  }
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

