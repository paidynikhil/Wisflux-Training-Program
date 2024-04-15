// function calculateArea() {
//   const sideA = parseFloat(document.getElementById("sideA").value);
//   const sideB = parseFloat(document.getElementById("sideB").value);
//   const sideC = parseFloat(document.getElementById("sideC").value);

//   if (isValidTriangle(sideA, sideB, sideC)) {
//     const s = (sideA + sideB + sideC) / 2;

//     const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

//     document.getElementById(
//       "result"
//     ).textContent = `Area of the triangle is: ${area.toFixed(2)}`;
//   } else {
//     document.getElementById("result").textContent =
//       "Invalid triangle. The sum of any two sides must be greater than the third side.";
//   }
// }

// function isValidTriangle(a, b, c) {
//   return a + b > c && a + c > b && b + c > a;
// }

// function reset() {
//   document.getElementById("sideA").value = "";
//   document.getElementById("sideB").value = "";
//   document.getElementById("sideC").value = "";
//   document.getElementById("result").textContent = "";
// }
function calculateArea() {
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);
  const sideC = parseFloat(document.getElementById("sideC").value);

  const s = (sideA + sideB + sideC) / 2;

  const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

  // Display the area in the result element
  document.getElementById(
    "result"
  ).innerHTML = `Area of triangle is: ${area}`;
}
function reset() {
  document.getElementById("sideA").value = "";
  document.getElementById("sideB").value = "";
  document.getElementById("sideC").value = "";
  document.getElementById("result").innerHTML = ""; // Clear the result text
}
