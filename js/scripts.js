// const greeting = "hello";

// if(greeting === "hi"){
//     console.log ('Yes, this matches to HI');
// } else if(greeting == "hello"){
//     console.log('yes, this matched HELLO');
// } else{
//     console.log('none of them matched.');
// }

// const favColor = prompt('chose one of the following colors: red, green, grey').toLowerCase();
// console.log(favColor);

// switch(favColor){
//     case 'red':
//         alert(`You chose ${favColor}`)
//     break;

//     case 'green':
//         alert(`You chose ${favColor}`)
//     break;

//     case 'grey':
//         alert(`You chose ${favColor}`)
//     break;

//     default:
//         alert('Bruh ... pick a right color');

// }

// function getWeatherReport(day, time, temperature) {
//     const correctDayFormat = day.toUpperCase();
//     const correctTimeFormat = time.toLowerCase();
//     const correctTempFormat = parseInt(temperature);
//     const summary = `Today is ${correctDayFormat} and the time is ${correctTimeFormat}. The temperature is a rockin ${correctTempFormat} degrees.`;

//     return summary;
// }

// console.log(getWeatherReport('wednesday', '6:00PM', '90'));


// var fruits = ['Apple', 'Banana'];
// // console.log (fruits.length);
// console.log (fruits[0].length);

// Your favorite movie of 2017
// Your lucky number
// Whether or not you are a Star Wars fan (using a Boolean)
// The year you graduated high school
// let myFavArray = ['Endgame', '13', true, 2003];
// console.log the var and the length of the array.

// myFavArray.push('I like soccer');
// myFavArray.unshift('I like soccer');
// myFavArray.pop();
// myFavArray.shift();
// myFavArray.splice(2,1); 
// myFavArray.splice(1, 1, 'Renegades of Funk');
// myFavArray.splice(1, 0, 'Renegades of Funk');
// console.log(`This is my old array: ${myFavArray}`);
// console.log(myFavArray.length);

// let newFavArray = myFavArray.slice(2,4);
// console.log(`This my new array: ${newFavArray}`);
// console.log(newFavArray.length);
// console.log(myFavArray);
// console.log(myFavArray.indexOf(true));

// let favMovieOne = ["Anchor Man", "Ron Burgundy"];
// let favMovieTwo = ["The Matrix", "New"];
// let favMovieThree = ["Aladdin", "Aladdin"];
// let favMovieFour = ["Akira", "Tetsuo"];
// let favMovieFive = ["Logan", "Wolverine"];

// let favMovies = [favMovieOne, favMovieTwo, favMovieThree, favMovieFour, favMovieFive];
// console.log(`There are: ${favMovies.length} movies total`);

// let favMoviesTitles = [favMovieOne[0], favMovieTwo[0], favMovieThree[0], favMovieFour[0], favMovieFive[0]];
// alert(`My favorite movies are ${favMoviesTitles}`);

// let bestAndWorstMovie = [favMoviesTitles[0], favMoviesTitles[1]];
// console.log(`My favorite movie is: ${bestAndWorstMovie[0]} and my lest favorite movie is: ${bestAndWorstMovie[1]}`);

// Loooooooooops

// let x = 0;
// while (x<10){
//     console.log(x);
//     x++;
// };

// for (let i = 0; i <20; i++){
//     console.log(i);
// }

// for (let i = 0; i <20; i++){
//     if(i == 4){
//         continue;
//     }
//     console.log(i);
// }

// let i = 0;
// do{
//     console.log(i);
//     i++;
// } while (i<10);

// let arr3 = [1,2,3,4,5];
// arr3.forEach(function(x){
//     alert(x);
// })

// let arr3 = [1,2,3,4,5];
// let myString = 'Wassup';
// for(i of myString){
//     console.log(i);
// }

let people = {
    firstName: 'Felipe',
    lastName: 'Hernandez',
    age: 33,
}


console.log(people);

for (person in people){
    // console.log(people[person]);
    console.log(people.firstName);
}