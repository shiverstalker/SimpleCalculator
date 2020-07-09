const defaultResult = 0;
let currentResult = defaultResult;


function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `(${resultBeforeCalc}) ${operator} (${calcNumber})`
  outputResult(currentResult, calcDescription)
}

function add() {
  if (userInput.value != '') {
  const initialResult = currentResult;
  currentResult += parseInt(userInput.value);
  createAndWriteOutput("+" , initialResult, userInput.value);
} else {alert("Please input a number")}
}

function subtract() {
  if (userInput.value != '') {
  const initialResult = currentResult;
  currentResult -= parseInt(userInput.value);
  createAndWriteOutput("-" , initialResult, userInput.value);
} else {alert("Please input a number")}
}

function multiply() {
  if (userInput.value != '') {
  const initialResult = currentResult;
  currentResult *= parseInt(userInput.value);
  createAndWriteOutput("*" , initialResult, userInput.value);
} else {alert("Please input a number")}
}

function divide() {
  if (parseInt(userInput.value) != 0 && userInput.value != '') {
    const initialResult = currentResult;
    currentResult /= parseInt(userInput.value);
    createAndWriteOutput("/" , initialResult, userInput.value);
  } else {
    alert("Can't devide by Zero in R or input a number!");
  }
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

