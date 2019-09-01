

// My IDs
const userInput = document.querySelector('#userInput');
const hThreeHeader = document.querySelector("#conversionResult");
const fahrenheitBtn = document.querySelector("#fahrenheitBtn");
const celsiusBtn = document.querySelector("#celsiusBtn");

// Converts user input from celcius to fahrenheit
function celciusToFahrenheit(){
    const cTemp_To_FTemp = ((userInput.value * (9/5)) + 32).toFixed(2);
    hThreeHeader.innerHTML = `${userInput.value} celcius is ${cTemp_To_FTemp} fahrenheit`;
}

// Converts user input from fahrenheit to celcius
function fahrenheitToCelcius(){
    const fTemp_To_cTemp = ((userInput.value - 32) * 5/9).toFixed(2);
    hThreeHeader.innerHTML = `${userInput.value} fahrenheit is ${fTemp_To_cTemp} celcius `;
}


// this allows us to gather the user info from the DOM
// userInput.addEventListener('click', celciusToFahrenheit);
// userInput.addEventListener('input', fahrenheitToCelcius);

// Event listener shows result on dom
fahrenheitBtn.addEventListener('click', fahrenheitToCelcius);
celsiusBtn.addEventListener('click', celciusToFahrenheit);



 
// userInput.addEventListener('input', function(){
//     const numberToConvert = userInput.value;
//     const cTemp_To_FTemp = (numberToConvert * (9/5)) + 32;
//     const fTemp_To_cTemp = (numberToConvert - 32) * 5/9;
//     console.log(`this is celcius ${cTemp_To_FTemp}`);
//     console.log(`This is fahrenheit ${fTemp_To_cTemp}`);
//     console.log(userInput.value);
// });

