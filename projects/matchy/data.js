/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {}; //create animal object
animal.species = "dog"; //add species key with 'dog' value, use dot notation
animal["name"] = "Tony"; //add name key using bracket notation, with "Tony" value
animal.noises = []; //add noises key with array literal as value
console.log(animal); //prints => {species: "dog", name: "Tony", noises: []}


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = []; //create noises array
noises[0] = 'woof'; //add 'woof' noise as first item in list, index 0
noises.unshift('quack'); //add 'noise to beginning of list with unshift()
noises.push('bow wow', 'tweet'); //add two more noises to end of list with push()
console.log(noises.length); //prints => 4
console.log(noises[noises.length-1]); //prints => last item in array, 'tweet'
console.log(noises); //prnts => ["quack", "woof", "bow wow", "tweet"]


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create noises key, using bracket notation, and assign noises array as value
animal["noises"] = noises; 
//noise property for animal object now links to noises array
//the array itself will need to be updated, not the object
noises.push('bark'); //use push method to add new noise to the noises array
console.log(animal); //prints => {species: "dog", name: "Tony", noises: Array(5)}
console.log(noises); //prints => ["quack", "woof", "bow wow", "tweet", "bark"]

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * Object properties can be accessed with dot notation or bracket notation, 
 * although it is best practice to use dot notation when you can.
 * Object properties can be accessed with for-in loops using a "key" variable 
 * in bracket notation only.
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * Elements in an array can be accessed by using bracket notation with the
 * index location of the value or .length property minus 1 to get the last
 * value in the array.
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////


var animals =[]; //ceate animals array
animals.push(animal); //push the animals object into the array
console.log(animals); //prints => array with one item, the animals object

//ceate duck object, with name, species, noises keys and values
var duck = {
    name: 'Jerome',
    species: 'duck',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck); //ush duck object into animals array

//create rat object
var rat = {
        species: 'rat',
        name: 'Gail',
        noises: ['sqeek', 'click']
};

//create rabbit object
var rabbit = {
    species: 'rabbit',
    name: 'Roger',
    noises: ['squeak', 'chomp']
};

//push both rat and rabbit objects into the animals array
animals.push(rabbit, rat);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
* choosing array datatype for list of friends because we only
* need a list of friends, which arrays are good for, and since 
* arrays can have objects within them we can use our existing 
* animal objects that we have in our animals array
*/

// //create friends array
// var friends = [];

// //create getRandom function with a single parameter for an array to pass thru
// function getRandom(arrName) {
    
//   //create local variable to hold random integer
//   let i;
  
//   /*
//   *random integer will be between 0 (first index in any array)
//   *and the last index in the array, arrName.length - 1
//   *Math.random() will return a decimal point number > 0 and < 1
//   *use Math.floor to get the largest integer less than or equal to a given number
//   *because Math.floor with return the largest integer less than or equal to a given
//   *number, we can just use arrName.length multiplied by Math.random to
//   *return an integer between 0 and arrName.length - 1
//   */
  
//   i = Math.floor(Math.random() * (arrName.length));
  
//   return i; //return this random index number when function is called 
// }

// //call the getRandom function, with the animals array as the argument
// getRandom(animals); //will return a random index number

// //call the getRandom function within the push method, since friends in an array
// //use dot notation to specify the name key to push the name value into the friends array
// //this will add random animal name to the friends list
// friends.push(animals[getRandom(animals)].name);

// console.log(friends); //prints => random animal name as single item in friends array

// //add friends key to the duck object, with the friends array as it's value
// duck.friends = friends;

// console.log(animals); //prints => all the animals in the array
// //duck object will have friends key with friends array

var friends = [];

//input is animals array
//use index of random element in animals to select animal
//return random animal 

function getRandom (animals) {
    return Math.floor(Math.random() * animals.length);
}

//push returned animal into friends array
friends.push(animals[getRandom(animals)].name);

console.log(animals, "line 174");
console.log(friends);

//add friends list to one of the animals objects
//add friends property to rabbit object with value = friends array
rabbit.friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
