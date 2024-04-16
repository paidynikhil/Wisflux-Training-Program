function calculateAverage(nums) {
  if (nums.length === 0) {
    return 0;
  }
  const sum = nums.reduce((total, num) => total + num, 0);

  const average = sum / nums.length;

  return average;
}

const nums = [10, 20, 30, 40, 50];
const average = calculateAverage(nums);
console.log("Average:", average);
