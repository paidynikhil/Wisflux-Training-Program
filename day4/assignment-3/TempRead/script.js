function convertTemperature() {
  const temperature = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unitSelect").value;
  let result;

  if (isNaN(temperature)) {
    alert("Please enter a valid temperature.");
    return;
  }

  if (unit === "celsius") {
    // Convert Celsius to Fahrenheit
    result = (temperature * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).textContent = `${temperature}°C is ${result.toFixed(2)}°F`;
  } else if (unit === "fahrenheit") {
    // Convert Fahrenheit to Celsius
    result = ((temperature - 32) * 5) / 9;
    document.getElementById(
      "result"
    ).textContent = `${temperature}°F is ${result.toFixed(2)}°C`;
  }
}
