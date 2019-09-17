// https://ghibliapi.herokuapp.com

// https://dog.ceo/api/breeds/list/all


function playWithApi() {
   const url = 'https://dog.ceo/api/breeds/list/all';

    fetch(url) // Call the fetch function passing the url of the API as a parameter
      .then(function(resp){
        return resp.json()// Transform the data into json
      })
      .then(function(data) {
        console.log(data);
        //How can we display this data?
      })
      .catch(function() {
          // This is where you run code if the server returns any errors
      });
  };

  playWithApi();

const body = document.querySelector('body');
// const exampleJson = '{"name": "jackie", "age": 26}';
// const exampleTwo = '{"random": 7, "phrase": "this is ok"}';
// const examplePhrase = JSON.parse(exampleTwo);
// const exampleStringfy = JSON.stringify(exampleJson);
// console.log(examplePhrase.phrase);
// // body.innerHTML = examplePhrase.phrase;
// body.innerHTML = exampleJson.name;

// function practiceScope(){
//     let random = 'Inside scope';
//     const phrase = function (sentence){
//         console.log(sentence);
//     }
// }

// let practiceOutside = phrase ('this is cool, jax');

class AboutMe{
    constructor(name, age, petName, petBreed){
        this.name = name;
        this.age = age;
        this.petName = petName;
        this.petBreed = petBreed;
    }
};

AboutMe.prototype.myDog = function(){
    let url = 'https://dog.ceo/api/breed/${this.petBreed}/images/random';
    fetch(url)
    .then((transformJson)=>{
        return transformJson.json();
    })
    .then((breedData)=>{
        console.log(breedData);
        const image = document.createElement('img');
        image.setAttribute('src', breedData.message);
        body.appendChild(image);
    })
    .catch((err)=>{
        console.log(err);
    })
}



const jacque = new AboutMe('jax', 26, 'Smeagol', 'greatdane');
console.log(jacque);

