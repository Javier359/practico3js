function celsiusToFahrenheit(gradosCelsius) {
    var gradosFahrenheit = (gradosCelsius * 9/5) + 32;
    return gradosFahrenheit;
  }
  
  var temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
  var temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
  
  document.write("La temperatura en grados Fahrenheit es: " + temperaturaFahrenheit.toFixed(2));
  