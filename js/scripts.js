

// My IDs
const userInput = document.querySelector('#userInput');
const hThreeHeader = document.querySelector("#conversionResult");
const fahrenheitBtn = document.querySelector("#fahrenheitBtn");
const celsiusBtn = document.querySelector("#celsiusBtn");
const numberNeededMssg =`Looks like you didn't enter a number`;

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

function needNumbersFunction(){
    hThreeHeader.innerHTML = numberNeededMssg;
}

// this allows us to gather the user info from the DOM
// userInput.addEventListener('click', celciusToFahrenheit);
// userInput.addEventListener('input', fahrenheitToCelcius);

// Event listener shows result on dom

// This is only if there is no number entered
function clickButtonsNoNumber(){
    fahrenheitBtn.addEventListener('click', needNumbersFunction);
    celsiusBtn.addEventListener('click', needNumbersFunction);
}

// This is only if there IS a number entered
function clickButtonsValidNumber(){
fahrenheitBtn.addEventListener('click', fahrenheitToCelcius);
celsiusBtn.addEventListener('click', celciusToFahrenheit);
}


function clickMyButtons(){
if (userInput.value === null){
    clickButtonsNoNumber();
} else  {
    clickButtonsValidNumber();
} 
}
clickMyButtons()

