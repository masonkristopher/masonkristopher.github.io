/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare search function with two parameters
//parameter inputs are animals array and name string
function search (animals, name) {
    
    //animals array has a bunch objects for each animal
    //name string is what we will search by
    
    //create for loop to check each item in the array
    //start: 0 index
    //stop: end of the array, animals.length
    //iterate: +1
    for (var i = 0; i < animals.length; i++) {
        
        //create if statement to evaluate each pass thru array 
        //if will check if name is in array
        //looking for strict equality between name parameter and the name property of each object
        if (name === animals[i].name) { 
            
            //if name matches name, return the whole object
            return animals[i]; 
            
        }//close if statement
    }//close loop
    
    //if name does not exist in animals array, return null
    return null;
    
    //output is returning the animal's object, if it exists
}//close function

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//write replace function with 3 parameters
function replace (animals, name, replacement) {
    
    //parameters are:
    //animals array, place to search
    //name string, string to search for match in array
    //replacement object, object to replace existing object with
    
    //create for loop to check each item in the array
    //start: 0 index
    //stop: end of the array, animals.length
    //iterate: +1
    for (var i = 0; i < animals.length; i++) {
        
        //create if statement to evaluate each pass thru array 
        //if will check if name is in array
        //looking for strict equality between name parameter and the name property of each object
        if (name === animals[i].name) {
            
            //if match is found, replace array[i] object with replacement object
            //use splice method on arrays to remove existing object and re-index the array
            //splice(location to replace, how many items to replace, what to replace it with)
            animals.splice(i, 1, replacement); 
        }//close if statement
    }//close loop
}//close function

//output is replacing the animal's object with replacement obejct, if it exists

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create remove function with 2 parameters
function remove (animals, name) {
    
    //input is animals array and name string
    
    //create for loop to check each item in the array
    //start: 0 index
    //stop: end of the array, animals.length
    //iterate: +1
    for (var i = 0; i < animals.length; i++) {
        
        //create if statement to evaluate each pass thru array 
        //if will check if name is in array
        //looking for strict equality between name parameter and the name property of each object
        if (name === animals[i].name) {
            
            //use splice again to find and replace object in array
            //however, this time we won't replace it with anything
            //splice is better than the delete operator, because delete will leave the index empty/undefined
            //whereas splice will actually remove it and re-index the array
            animals.splice(i, 1, 0);
        }//close if statement
    }//close loop
}//close function

//output is remove the object from the array for the animal name given

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create add function with two parameters
function add(animals, animal) {
  
  //inputs are animals array and animal object, representing new animal to be added to array
    
  //check that the animal object has BOTH a `name` & 'species' property with a length > 0 
  //use if statement to check for both name & species
  //creat function to output later to check if true to add
  var testForNameSpecies = function (object) {  
      
      //name and species will be undefined if they have no length
      //check for undefined to rule out objects without a name and/or species
      if ((object.name !== undefined) && (object.species !== undefined)) {
          //return true from the function if the object has these properties
          return true;
      }//close if statement
  }//close testForNameSpecies function


//create function to check for name match
  function nameMatch (array, object) {    
  
  //create for loop to loop through the array
    for (let i = 0; i <= array.length; i++) {
      
      //check for not equal between the both names:
      //name properties of each object in array AND object name property
      if (array[i].name !== object.name) {
        return false;//return false if there is no match
      }//close if statement
      return true; //return true is there is a match
    }//close for loop
  }//close nameMatch function

  //add new object to the `animals` array, ONLY if all the other conditions pass
  if ((nameMatch(animals,animal) === false) && (testForNameSpecies(animal) === true)) {
      animals.push(animal);//push animal object into animals array if both conditions are true
  }//close if statement
  
}//close entire add function

  



  


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
