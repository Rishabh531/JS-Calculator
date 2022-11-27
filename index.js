const screenVal = document.getElementById("screen");
var buttonText = "";
function press(number) {
  buttonText += number;
  screenVal.value = buttonText;
}

function equal() {
  screenVal.value = eval(buttonText);
  buttonText = "";
}
function erase() {
  buttonText = "";
  screenVal.value = buttonText;
}
