
const celciusInput = document.querySelector('#celcius > input');//getting the input inside the celcius div
const fahrenheitInput = document.querySelector('#fahrenheit > input');//getting the input inside the fahrenheit div
const kelvinInput = document.querySelector('#kelvin > input');//getting the input inside the kelvin div

//console.log(kelvinInput);

//listening to input event in celcius div
celciusInput.addEventListener('input', function(){
   const celciusTemperature = parseFloat(celciusInput.value);
   const fahrenheitTemperature = (celciusTemperature * (9/5)) + 32;
   const kelvinTemperature = celciusTemperature + 273.15;
   fahrenheitInput.value = fahrenheitTemperature;
   kelvinInput.value = kelvinTemperature;
   console.log(kelvinTemperature);
});

fahrenheitInput.addEventListener('input', function(){
   const fahrenheitTemperature = parseFloat(fahrenheitInput.value);
   const celciusTemperature = (fahrenheitTemperature - 32) * (5/9);
   const kelvinTemperature =  (fahrenheitTemperature + 459.67) * (5/9);
   celciusInput.value = celciusTemperature;
   kelvinInput.value = kelvinTemperature;
});