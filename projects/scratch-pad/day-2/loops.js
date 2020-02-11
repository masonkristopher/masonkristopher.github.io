// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //for loop
  //start: 0
  //stop: end of array, when i < array.length
  //iteration: +1
  
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //for loop
  //start: last index in array = array.length - 1
  //stop: beginning of the array, when i = 0
  //iteration: -1
  
  
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.keys(object); //Object.keys method to return an object's keys

  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //for in loop
  //variable = key
  //object = object
  
  for (var key in object) {
    console.log(key); //key prints the key from the key/value pair in the object
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.values(object); //Object.values method to return an object's values
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //for in loop
  //variable = key
  //object = object
  
  for (var key in object) {
    console.log(object[key]); //object[key] print the value from the key/value pair
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.keys(object).length; //using the Object.keys method with the .length properties to return the length of the key/value pairs
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
*/
 
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  //declare new array for values
  var valuesArray = [];

    
  //for in loop to push the values into the array
  for (var key in object) {
    valuesArray.push(object[key]);
  }

  //reverse method to reverse the order of the keys and values arrays
    valuesArray.reverse();


  //for loop to print the reversed object values from the array
  for (var i = 0; i <= valuesArray.length - 1; i++) {
    console.log(valuesArray[i]);
  }


  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
