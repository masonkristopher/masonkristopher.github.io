// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    
    //using Array.isArray() method to check if the value is an array
    
    return Array.isArray(value) === true;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    //using the Object.prototype.toString.call() method to check if the value is an object
    //the toString() method returns a string representing the object, "object"
    
    return Object.prototype.toString.call(value) === '[object Object]';
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    //using both the Object.prototype.toString.call() method and the Array.isArray() method to check if
    //value is an object or array with the || logical operator, or
    
    return Object.prototype.toString.call(value) === '[object Object]' || Array.isArray(value) === true;
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string" x
 *    - "array" x
 *    - "object" x
 *    - "undefined" x
 *    - "number" x
 *    - "boolean" x
 *    - "null" x
 *    - "function" x
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    /*
    create if, else if, else statement to filter for the type of result we need
    
    using the typeof() method to return a string with the datatype
    HOWEVER, typeof does not differentiate between:
        objects
        arrays
        null
        undefined
        dates
    all of these will show up as object, so the if and else if statements will need to filter out for each of these
    before we can return the else statement with the typeof() string
    
    1. using the Object.prototype...() for initial if statements
    2. using the Array.isArray() method for checking array as first else if statement
    2. using the === strict comparison to see if value is equal to null or undefined for next two else if statements
    3. using instanceof operator to check if date appears anywhere in the prototype chain of value object for last else if statement
    4. using else to return typeof() string for value
    */
    
    if (Object.prototype.toString.call(value) === '[object Object]') {
        return "object";
    } else if (Array.isArray(value) === true) {
        return "array";
    } else if (value === null) {
        return "null";
    } else if (value === undefined) {
        return "undefined";
    } else if (value instanceof Date) {
        return "date";
    } else {
        return typeof(value); 
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
