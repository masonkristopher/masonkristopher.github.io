// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //return a function - both keywords can be used on the same line
    //create new function with givenValue as parameter to compare to base
    
    return function(givenValue) {
        if (givenValue > base) { //test if givenValue is greater than base
            return true; 
        } else {
            return false;
        }

    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //return a function - both keywords can be used on the same line
    //create new function with givenValue as parameter to compare to base
    
    return function(givenValue) {
        if (givenValue < base) { //test if givenValue is less than base
            return true;
        } else {
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

    //return a function - both keywords can be used on the same line
    //create new function with givenString as parameter to compare to startsWith
    //use bracket notation to access first letter
    //use .toUpperCase() method to make case-insensitive
    
    return function(givenString) {
        if (givenString[0].toUpperCase() === startsWith.toUpperCase()) { 
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //

    //return a function - both keywords can be used on the same line
    //create new function with givenString as parameter to compare to endsWith
    //use bracket notation to access first letter
    //use .length property minus 1 to get the last letter in the string
    //use .toUpperCase() method to make case-insensitive

    return function(givenString) {
        if (givenString[givenString.length - 1].toUpperCase() === endsWith.toUpperCase()) {
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    //create new array for the modified strings
    var newStrings = [];
    
    //for loop to pass each string in the array through the modify function and into the new array
    //start: 0 for the beginning of the array
    //stop: at the end of the array, strings.length - 1
    //iterate: +1
    
    //use the push() method to pass each string to new array, newStrings.push()
    //inside the push() method, pass the string through the given modify function, modify(strings)
    //use bracket notation and i to loop through each string, strings[i]
    
    for (let i = 0; i <= strings.length - 1; i++) {
        newStrings.push(modify(strings[i])); 
    }
    
    return newStrings;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    //for loop to pass each string in the array through the test function
    //start: 0 for the beginning of the array
    //stop: at the end of the array, strings.length - 1
    //iterate: +1
    
    //use if statement to return false if the string fails the test
    
    for (let i = 0; i <= strings.length - 1; i++) {
        if (test(strings[i]) === false) {
            return false; //return statement ends the function here if any string fails the test
        } 
    }
    
    return true; // returns true in the event that none of the strings fail the test on line 159/160
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}