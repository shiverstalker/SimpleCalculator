const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const calcDescription = `(${currentResult}) + (${userInput.value})`;
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

function subtract() {
  const calcDescription = `(${currentResult}) - (${userInput.value})`;
  currentResult = currentResult - parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

function multiply() {
  const calcDescription = `(${currentResult}) * (${userInput.value})`;
  currentResult = currentResult * parseInt(userInput.value);
  outputResult(currentResult, calcDescription);
}

function divide() {
  if (parseInt(userInput.value) != 0) {
    const calcDescription = `(${currentResult}) / (${userInput.value})`;
    currentResult = currentResult / parseInt(userInput.value);
    outputResult(currentResult, calcDescription);
  } else {
    alert("Can't devide by Zero in R");
  }
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

