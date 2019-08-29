// let example = function() {
//     console.log(`hello there`);

// }

// function exampleName(){
//     console.log(`hello there`);
// }

// example();
// exampleName();

// let turnValueUppercase = val => console.log(val.toUpperCase());
// turnValueUppercase('hi');

// turnValueUppercase('hello');
// function turnValueUppercase(val){
//     console.log(val.toUpperCase());
// }

// const multiplyValues = (arg1, arg2) => {return arg1 * arg2};

// console.log(multiplyValues (2, 6));

// let names = [
//     'Jacke',
//     'Jake',
//     'Gina',
//     'Filly'
// ];

// // test results
// const greeting = name => `Good evening. ${name}`;
// console.log(`The array of names ${names}`, `greeting function: ${greeting('Example')}`);

// const limit = 3;

// // Loop through names and add greeting 
// for(j = 0; j < names.length; j++){
//     console.log(greeting(names[j]));
// }


// Grocery list
// grab elements from HTML
const h1 = document.getElementById('greeting');

const groceryList = document.getElementById('groceryList');

const grocItem = document.getElementById('grocItem');

const getGroceryItem = document.getElementById('getGroceryItem');

let arrayOfGroceryItems = [];

greeting.innerHTML = 'hello felipe';

// const addGroceryItem = (arr, value) => arr.push(value);
// console.log(addGroceryItem(arrayOfGroceryItems, 'Carrots'));
// console.log(arrayOfGroceryItems);

function addGroceryItem(arr, value){
    arr.push(value);
}

function ejectGroceryItemToList(val){
// grab list item
// grocItem.innerHTML = val;
for(grocery = 0; grocery < 2; grocery++){
    grocItem.innerHTML = val;
}
}

ejectGroceryItemToList('Testing');