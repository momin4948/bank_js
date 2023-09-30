function getInputFieldId(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";

  return inputValue;
}

function getTotalInnerId(inputId) {
  const inputTotal = document.getElementById(inputId);
  const value = parseFloat(inputTotal.innerText);

  return value;
}

function setNewTotal(elementId, newValue) {
  const newValueId = document.getElementById(elementId);
  newValueId.innerText = newValue;
}
