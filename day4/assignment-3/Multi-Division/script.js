function multiply() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const result = num1 * num2;
  document.getElementById(
    "result"
  ).innerHTML = `Multiplication Result: ${result.toFixed(2)}`;
}

function divide() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const result = num1 / num2;
  document.getElementById("result").innerHTML = `Division Result: ${result.toFixed(2)}`;
}
document.getElementById("result").innerHTML = ``;
function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerHTML = ""; // Clear the result text
};