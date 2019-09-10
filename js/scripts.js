// create taco recipe using prototypes. first to create what will be needed

function TacoRecipe(meat, seasonings, vegetables, tortillas){
    this.meat = meat;
    this.seasonings = seasonings;
    this.vegetables = vegetables;
    this.tortillas = tortillas;

}

TacoRecipe.prototype.prepIngredients = function(){
    console.log(`Get 2 pounds of ${this.meat} and ad to pan. In a seperate bowl collect ${this.seasonings}. Make sure to get your ${this.vegetables} ready to be wased and cut. Then dip ${this.tortillas} in oil.`);
}

const asadaTaco = new TacoRecipe('asada', ['garlic powder', 'pepper', 'salt', 'lemon', 'crushed peppers'], ['tomatoes', 'grilled onions', 'cilantro', 'pico de gallo'], 'corn tortillas');

const carnitas = new TacoRecipe('carnitas', 'salt', 'pico de gallo', 'corn tortillas');

// console.log(asadaTaco.prepIngredients());
// console.log(carnitas.prepIngredients());
// asadaTaco.prepIngredients();
// carnitas.prepIngredients();

TacoRecipe.prototype.itemsToBuy = function(){
    console.log(`Buy 4 pounds of ${this.meat}, 4 grams of ${this.seasonings}. Make sure to get 40lbs ${this.vegetables}, and then to packs of  ${this.tortillas} in oil.`);
}

const foodItems = new TacoRecipe('tripas', ['garlic powder', 'pepper', 'salt', 'crushed peppers'], ['tomatoes', 'onions', 'cilantro', 'guacamole', 'jalapenos'], 'corn tortillas');

foodItems.itemsToBuy();

TacoRecipe.prototype.howToEatTaco = function(temp){
    if(temp === "hot" || temp === 'burning'){
        console.log(`when your ${this.meat} taco get's this ${temp}, you will burn your tongue!`);
    } else {
        console.log(`man, your ${this.meat} taco will go down smoothly`);
    }
}

asadaTaco.howToEatTaco("hot");

// function Test(phrase){
//     this.phrase = phrase;

// }

// function exampleTest(phrase){
//     Test.call(this, phrase);
//     this.random = 'I am iRobot';
// }

// console.log(new exampleTest('I Fail AT LIFE'));