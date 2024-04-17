function randomInTwoRange(min1, max1, min2, max2) {
  const range1 = max1 - min1 + 1;
  const range2 = max2 - min2 + 1; 

  const randomNumber = Math.random();

  if (randomNumber < range1 / (range1 + range2)) {
    return Math.floor(Math.random() * range1) + min1;
  } else {
    return Math.floor(Math.random() * range2) + min2;
  }
}

const result = () => {
  const result1 = randomInTwoRange(-100, 0, 800, 900);
  console.log("Random number between -100 to 0 and 800 to 900:", result1);
};
result();
