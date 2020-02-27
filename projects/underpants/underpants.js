// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    //return the value unchanged
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    //the native typeof operand will also return object for arrays and null values
    //need to filter for arrays and null before we can run the typeof operand
    
    //if statement to check if the value is an array with Array.isArray() method
    if (Array.isArray(value)) {
        return "array";
    //else if to check if the value is null
    } else if (value === null) {
        return "null";
    } else {
        //for all else, the typeof operand will return the correct string
        return typeof value;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

/**
 * first:
 * */

_.first = function(array, number) {
    
    //declare empty array to hold the result
    let result = [];
    
    //if statement to initially filter for an array and a number
    if (_.typeOf(array) === "array" && _.typeOf(number) === "number") {
        
        //nested if statement to test for negative numbers
        if (number < 0) {
            return result;
        //test for  single item    
        } else if (number < 2) {
            return array[0];
        //test for number larger than array length
        } else if (array.length < number) {
            return array;
        //if all tests fail, return the <number> of items in the array
        } else {
            //use for loop to look through array
            for (let i = 0; i < number; i++) {
                    //push item into our result variable
                    result.push(array[i]);
                }
                return result; //return the array with <number> of items
    }
    //test for array but not number
    } else if (_.typeOf(array) === "array" && _.typeOf(number) !== "number") {
        return array[0]; //if passes condition, return first item in array
    }  else {
        return result; //for all other cases, return an empty array
    }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    
    //declare empty array to hold the result
    let result = [];
    
    //if statement to initially filter for an array and a number
    if (_.typeOf(array) === "array" && _.typeOf(number) === "number") {
        
        //nested if statement to test for negative numbers
        if (number < 0) {
            return result;
        //test for single item    
        } else if (number < 2) {
            return array[array.length - 1]; //return last item in array
        //test for number larger than array length
        } else if (array.length < number) {
            return array;
        //if all tests fail, return the <number> of items in the array, starting from end of array
        } else {
            //use for loop to look through array
            for (let i = array.length - 1; i >= number - 1; i--) {
                    //push item into our result variable
                    result.unshift(array[i]);
                }
                return result; //return the array with <number> of items
    }
    //test for array but not number
    } else if (_.typeOf(array) === "array" && _.typeOf(number) !== "number") {
        return array[array.length - 1]; //if passes condition, return last item in array
    }  else {
        return result; //for all other cases, return an empty array
    }
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    
    //use for loop to look through the given array
    //start: beginning of the array, index 0
    //stop: the end of the array, < array.length
    //iterate: +1
    for (let i = 0; i < array.length; i++) {
        //if statement to check on each pass if there is a match
        //use strict equality between value at <i> and <value>
        if (array[i] === value) {
            return i; //return the index of first occurance of <value>
        }
    }
    //afetr the loop is done, if there is no match, return -1
    return -1;
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    //return the result of ternary conditional statement
    //use indexOf() function to check for a match
    //if the result of indexOf() is -1, return false
    //if it is anything other than -1, return true, because there is a match
    return (_.indexOf(array, value) !== -1 ? true : false);
    
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, test) {
    //if statement to check if the given collection is an array
    //use our typeOf() function
    //check for strict equality with array string
    if (_.typeOf(collection) === "array") {
        //if the collection is an array, run a for loop
        //start: 0 index
        //stop: end of the array, collection.length
        //iterate: +1
        for (let i = 0; i < collection.length; i++) {
            //on each pass, invoke the function with each element as arguments
            test(collection[i], i, collection);
        }
    //if collection is not an array, it will be an object, so we can use an else statement
    } else {
        //run a for-in loop to go through each property in the object
        for (var key in collection) {
            //for each property, invoke the function with each element as arguments
            test(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    
    //create container for new array with only unique values
    let result = [];
    
    //use for loop to check each element in the array
    for (let i = 0; i < array.length; i++) {
        //use if statement to run indexOf on each element in the new array
        //checks if the given element, array[i] has already been pushed to the new array
        //will return -1 if it does not already exist in the new array
        if (_.indexOf(result, array[i]) === -1) {
            //if [i] is not in the array, add it
            result.push(array[i]);
        }
    }
    //return the new array with only unique values
    return result;
    
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, test) {
    
    //decalre new array
    let newArr = [];
    
    //call each() function
    //within each () function call, declare anonymous function w the 3 parameters
    //pass <test> function into this anonymous function via the code block
    _.each(array, function(element, index, array) {
        
        //use if statement to check if the result of <test> is true
         if(test(element, index, array)){
             //if true, push that element into the new array
             newArr.push(element);
         }
     });
     
     //return the new array
     return newArr;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, test) {
    
    //declare container for new array
    let result = [];
    
    //create function expression to hold test that will be passed thru filter()
    let rejectFunc = function(element, index, array) {
        
        //run if test for !true
        if (!test(element, index, array)) {
            //if !true, push element into the array
            result.push(element);
        }
    }
    
    //call filter() and pass the given array and previously declared function
    //this is where the higher order function will be called
    _.filter(array, rejectFunc);
    
    //return the array with the element that returned false
    return result;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, test) {
    
    //declare variables to hold the results of filter() and reject()
    //pass the given array and test into these functions
    let truthyArr = _.filter(array, test);
    let falseyArr = _.reject(array, test);
    
    //declare variable to hold the result
    let result = [];
    
    //push the result of filter() and reject() into the array
    result.push(truthyArr);
    result.push(falseyArr);
    
    //return the array with two sub-arrays
    return result;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, test) {
    
    //declare container for result
    let resultArr = [];
    
    //run each(), passing the collection and a function as arguments
    //the function will push the results of the given test into the result array
    _.each(collection, function(element, index, collection) {
        resultArr.push(test(element, index, collection));
    })
    
    //return the result array
    return resultArr;
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property) {
    
    //return the result of the map() function
    //pass the given array and a new function as arguments
    //funtion will return the value of the elements that have the key name <property>
    return _.map(array, function(element, index) {
      return element[property];  
    })
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, test) {
    
    //check if <test> is a function
    if (_.typeOf(test) === "function") {
        
        // if it's a function
        // run map on it, calling test on the element, index, collection
        let arrWFunc = _.map(collection, function(e, i , c){
        return test(e, i, c)
        })
        
        // set up if statement to check if array contains false
        // if it contains false, return false
        // else return true
        if (_.contains(arrWFunc, false)) {
            return false;
        } else {
            return true;
        }
        
    } else {
        // if it's not a function
        // using map:
        // return true if element is truthy, otherwise return false
        let arrWOFunc = _.map(collection, function(e, i, c){
            if(e){
                return true;
            } else {
                return false;
            }
        })
        
        // set up if statement to check if array contains false
        // if it contains false, return false
        // else return true
         if (_.contains(arrWOFunc, false)) {
            return false;
        } else {
            return true;
        }
    }
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, test) {
   
       //check if <test> is a function
    if (_.typeOf(test) === "function") {
        
        // if it's a function
        // run map on it, calling test on the element, index, collection
        let arrWFunc = _.map(collection, function(e, i , c){
        return test(e, i, c)
        })
        
        // set up if statement to check if array contains false
        // if it contains false, return false
        // else return true
        if (_.contains(arrWFunc, true)) {
            return true;
        } else {
            return false;
        }
        
    } else {
        // if it's not a function
        // using map:
        // return true if element is truthy, otherwise return false
        let arrWOFunc = _.map(collection, function(e, i, c){
            if(e){
                return true;
            } else {
                return false;
            }
        })
        
        // set up if statement to check if array contains false
        // if it contains false, return false
        // else return true
         if (_.contains(arrWOFunc, true)) {
            return true;
        } else {
            return false;
        }
    }
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, test, seed) {
    
    let prevResult;
    
    //test if there is a seed
    if (seed !== undefined) {
        //create variable to hold seed value
        prevResult = seed;
        
        //use each() to gain access to each value in array
        _.each(array, function(e, i, a) {
            //calling a function for every element, passing prevResult, e, & i
            prevResult = test(prevResult, e, i, a);
        })
        
        
    } else {
        //if there is no seed    
        //use first element of the array as the seed value
        //create variable to hold seed value
        prevResult = array[0];
        
        //use for loop to iterate starting at index[1] rather than [0] as each() does
        for (let i = 1; i < array.length; i++) {
            //invoke given function <test>
            //reassign prevResult on each iteration to the result of <test>
            prevResult = test(prevResult, array[i], i, array);
        }
        
    }
    //last iteration will be returned into prevResult and exist in this parent scope
    //return the value stored in prevResult
    return prevResult;
    
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1,...objectArr) {
    
    //pass the first object in with it's own parameter
    //rest parameter creates an array of values named objectArr
    //use for loop on this array
    for (let i = 0; i < objectArr.length; i++) {
        
        //use for-in loop on each key in the object at objectArr[i]
        for (var key in objectArr[i]) {
            
            //on each key, assign those key/value pairs to object1
            object1[key] = objectArr[i][key];
        }
    }
    //return the updated object
    return object1;
    
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
