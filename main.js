const celciusInput = document.querySelector('#celcius > input'); //getting the input inside the celcius div
const fahrenheitInput = document.querySelector('#fahrenheit > input'); //getting the input inside the fahrenheit div
const kelvinInput = document.querySelector('#kelvin > input'); //getting the input inside the kelvin div


function celsiusToFahrenheitAndKelvin() {
   const celciusTemperature = parseFloat(celciusInput.value);
   const fahrenheitTemperature = (celciusTemperature * (9 / 5)) + 32;
   const kelvinTemperature = celciusTemperature + 273.15;
   fahrenheitInput.value = roundTwoDigits(fahrenheitTemperature);
   kelvinInput.value = roundTwoDigits(kelvinTemperature);
}

function fahrenheitToCelciusAndKelvin() {
   const fahrenheitTemperature = parseFloat(fahrenheitInput.value);
   const celciusTemperature = (fahrenheitTemperature - 32) * (5 / 9);
   const kelvinTemperature = (fahrenheitTemperature + 459.67) * (5 / 9);
   celciusInput.value = roundTwoDigits(celciusTemperature);
   kelvinInput.value = roundTwoDigits(kelvinTemperature);
}

function kelvinToCelciusAndFahrenheit() {
   const kelvinTemperature = parseFloat(kelvinInput.value);
   const celciusTemperature = kelvinTemperature - 273.15;
   const fahrenheitTemperature = 1.8 * (kelvinTemperature - 273) + 32;
   celciusInput.value = roundTwoDigits(celciusTemperature);
   fahrenheitInput.value = roundTwoDigits(fahrenheitTemperature);
}

function roundTwoDigits(num) {
   return Math.round(num * 100) / 100;
}


function main() {
   //listening to input events in divs
   celciusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);
   fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
   kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);
}

main();