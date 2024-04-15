function findLargest() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Please enter valid numbers.");
    return;
  }

  const largest = Math.max(num1, num2, num3);
  document.getElementById(
    "result"
  ).innerHTML = `The largest number is: ${largest}`;
}

function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("num3").value = "";
  document.getElementById("result").innerHTML = "";
}
