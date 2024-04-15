function calculateDifference() {
  const inputNumber = parseFloat(document.getElementById("numInput").value);

  const difference = Math.abs(inputNumber - 13);

  if (inputNumber > 13) {
    const doubleDifference = difference * 2;
    document.getElementById(
      "result"
    ).innerHTML = `Number is greater than 13. Double of the absolute difference is: ${doubleDifference}`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Number is not greater than 13. Absolute difference is: ${difference}`;
  }
}
