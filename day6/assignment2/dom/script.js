const myArray = ["apple", "banana", "orange", "grape", "melon"];

const arrayValuesContainer = document.getElementById("arrayValues");

myArray.forEach((value) => {
  const paragraph = document.createElement("p");

  paragraph.textContent = value;

  arrayValuesContainer.appendChild(paragraph);
});
