// const exampleString ='I am a regular string.';
// const exampleObjectString = new String('I am a object string.');
// const exampleString ='1';
// const exampleObjectString = new String('1');
// const anotherString ='1';

const H1 = document.getElementById('greeting');

// function checkExamples(){
//     if(exampleString == exampleObjectString ) {
//         console.log (`Yes, ${exampleString} and ${exampleObjectString} do loosly equal.`);

//     } else {
//         console.log(`Sorry, they do not equal at all.`);

//     }
// }

// function checkExamples(){
//     if(exampleString !== anotherString ) {
//         console.log (`Yes, ${exampleString} and ${anotherString} do loosly equal.`);

//     } else {
//         console.log(`Sorry, they do not equal at all.`);

//     }
// }

// checkExamples();


// const luckyNumber = 7;

// if(luckyNumber > 5 || luckyNumber < 1){
//     console.log('Sorry, your number is not lucky to me.');
// } else {
//     console.log(`Hey your luck number ${luckyNumber}`);
// }

// const newLuckyNumber = 7;
// if(newLuckyNumber == 5 || newLuckyNumber == '3' ){
//     console.log('Sorry, your new number is not lucky to me.');
// } else {
//     console.log(`Hey your new luck number ${newLuckyNumber}`);
// }


// In Class Assignment 1

// const iAmString =  'I am string 1';
// const iAmStringToo = new String('I am string 1');

// function checkStrings(){
//     if(iAmString == iAmStringToo){
//         console.log('Yea the strings are equal loosly');
//     } else {
//         console.log('Nah homes, they aint.');
//     }
// }

// checkStrings();

// function checkStrings(){
//     if(iAmString === iAmStringToo){
//         console.log('Yea the strings are equal loosly');
//     } else {
//         console.log('Nah homes, they aint.');
//     }
// }

// checkStrings();

// let a = 5;
// let b = 2;
// // let result = a + b;
// // let result = a += b;
// // let result = a - b;
// // let result = a -= b;
// // let result = a * b;
// // let result = a *= b;
// let result = a /= b;

// console.log(result);

// let a =10;
// let result = 0;

// console.log(result += a);

// let a ='5';
// converts string to a number
// let transformMe = parseInt(a);

// let a ='5.99';
// keeps decimal
// let transformMe = parseFloat(a,2);

// console.log(`before ${a} is a type of`,typeof(a),`and after ${transformMe}`, `is a type of`, typeof(transformMe));

// let a ='5.99';
// does not include the decimal - so just 5
// let transformMe = parseInt(a);

// console.log(`before ${a} is a type of`,typeof(a),`and after ${transformMe}`, `is a type of`, typeof(transformMe));

// let a = '5.99';
// let b = 2;
// let testModulo = 10 % 2;

// console.log(testModulo);

// // let testNan = isNaN('Hello');
// // console.log(testNan);

// let testNan = isNaN(5);
// console.log(testNan);

// let valueNan = 'I am indeed Nan';
// let testNan = isNaN(valueNan);

// testNan ? console.log('THIS IS TRUE') : console.log('THIS IS FALSE');

// let valueNan = 'I am indeed Nan';
// let testNan = isNaN(valueNan);

// if(testNan === true){
//     let result = 'Yup. true.';
//     console.log('Yup. ture.');
//     H1.innerHTML = result;
// }else {
//     let result = 'Nope. Sorry';
//     conosle.log('Nope. Sorry');
//     H1.innerHTML = result;
// }

// const askColor = prompt('Pick one of the following colors: red, blue, or orange.').toLowerCase();

// switch(askColor){
//     case 'red':
//         H1.innerHTML = `${askColor} is cool ... I guess`;
//     break;

//     case 'blue':
//         H1.innerHTML = `${askColor} is ok ... I guess`;
//     break;

//     case 'orange':
//         H1.innerHTML = `${askColor} is yay ... I guess`;
//     break;

//     default:
//         H1.innerHTML = `Dude, pick a right color ... and make sure its lowercase!`;
// }


// In Class Assignment

// Asks if the user is over 18
let confirmAge = confirm(`Are you over 18?`);

// switch(confirmAge){
//     case true:
//         alert('continue');
//         confirm(`Are you 80 years old?`);
// }

// If the user is over 18, allow them to proceed, otherwise alert the user that they are not old enough.

if (confirmAge === true) {
    alert(`continue`);
    let overAge = confirm(`Are you over 80?`);
    if(overAge === false){
        confirm(`Do you like Star Wars?`);
    } else {
        confirm(`Do you like prunes?`);
    }
} else {
    alert(`This is where your journey ends!`);

}

// Now that all your users at this point are at least 18, ask if they are less than 80 years old.

// Now ask the users who are between 18 and 80 if they like Star Wars. If they are over 80, ask if they like prunes.

// If they say they don't Star Wars, end the program. In all other cases, alert them with a message.