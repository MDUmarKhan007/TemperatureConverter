function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (isNaN(temperature)) {
    alert("Please enter a valid number.");
    return;
  }

  let result;

  // Celsius to others
  if (fromUnit === "Celsius") {
    if (toUnit === "Fahrenheit") {
      result = (temperature * 9) / 5 + 32;
    } else if (toUnit === "Kelvin") {
      result = temperature + 273.15;
    } else {
      result = temperature; // Celsius to Celsius
    }
  }

  // Fahrenheit to others
  else if (fromUnit === "Fahrenheit") {
    if (toUnit === "Celsius") {
      result = ((temperature - 32) * 5) / 9;
    } else if (toUnit === "Kelvin") {
      result = ((temperature - 32) * 5) / 9 + 273.15;
    } else {
      result = temperature; // Fahrenheit to Fahrenheit
    }
  }

  // Kelvin to others
  else if (fromUnit === "Kelvin") {
    if (toUnit === "Celsius") {
      result = temperature - 273.15;
    } else if (toUnit === "Fahrenheit") {
      result = ((temperature - 273.15) * 9) / 5 + 32;
    } else {
      result = temperature; // Kelvin to Kelvin
    }
  }

  document.getElementById(
    "resultText"
  ).innerText = `Converted Temperature: ${result.toFixed(2)} ${toUnit}`;
}
