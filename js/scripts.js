// My IDs
const userInput = document.querySelector('#userInput');
const hThreeHeader = document.querySelector("#conversionResult");
const fahrenheitBtn = document.querySelector("#fahrenheitBtn");
const celsiusBtn = document.querySelector("#celsiusBtn");
const numberNeededMssg =`Looks like you didn't enter a number`;

celsiusBtn.addEventListener('click', ()=>{
    let value = userInput.value;
    if (value){
        celciusToFahrenheit(value);
    } else {
        hThreeHeader.innerHTML = numberNeededMssg;
    }
});

fahrenheitBtn.addEventListener('click', ()=>{
    let value = userInput.value;
    if (value){
        fahrenheitToCelcius(value);
    } else {
        hThreeHeader.innerHTML = numberNeededMssg;
    }
});
    
// Converts user input from celcius to fahrenheit
function celciusToFahrenheit(value){
    const cTemp_To_FTemp = ((userInput.value * (9/5)) + 32).toFixed(2);
    hThreeHeader.innerHTML = `${userInput.value} celcius is ${cTemp_To_FTemp} fahrenheit`;
}

// Converts user input from fahrenheit to celcius
function fahrenheitToCelcius(value){
    const fTemp_To_cTemp = ((userInput.value - 32) * 5/9).toFixed(2);
    hThreeHeader.innerHTML = `${userInput.value} fahrenheit is ${fTemp_To_cTemp} celcius `;
}





// // My IDs
// const userInput = document.querySelector('#userInput');
// const hThreeHeader = document.querySelector("#conversionResult");
// const fahrenheitBtn = document.querySelector("#fahrenheitBtn");
// const celsiusBtn = document.querySelector("#celsiusBtn");
// const numberNeededMssg =`Looks like you didn't enter a number`;


// // This is only if there IS a number entered
// function clickButtonsValidNumber(){
//     fahrenheitBtn.addEventListener('click', fahrenheitToCelcius);
//     celsiusBtn.addEventListener('click', celciusToFahrenheit);
//     }
    
//     // This is only if there is no number entered
//     function clickButtonsNoNumber(){
//         fahrenheitBtn.addEventListener('click', needNumbersFunction);
//         celsiusBtn.addEventListener('click', needNumbersFunction);
//     }
    
//     function clickMyButtons(){
//     if (userInput.vlaue === null){
//         clickButtonsNoNumber();
//     } else  {
//         clickButtonsValidNumber();
//     } 
//     }
//     clickMyButtons();
    

// function needNumbersFunction(){
//     hThreeHeader.innerHTML = numberNeededMssg;
// }

// // Converts user input from celcius to fahrenheit
// function celciusToFahrenheit(){
//     const cTemp_To_FTemp = ((userInput.value * (9/5)) + 32).toFixed(2);
//     hThreeHeader.innerHTML = `${userInput.value} celcius is ${cTemp_To_FTemp} fahrenheit`;
// }

// // Converts user input from fahrenheit to celcius
// function fahrenheitToCelcius(){
//     const fTemp_To_cTemp = ((userInput.value - 32) * 5/9).toFixed(2);
//     hThreeHeader.innerHTML = `${userInput.value} fahrenheit is ${fTemp_To_cTemp} celcius `;
// }


