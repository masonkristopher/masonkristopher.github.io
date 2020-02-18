////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function range(start, end, step) {
  
  //create array to hold numbers
  let rangeArray = [];
  
  //filter for negative step number
  if (step < 0 && step !== undefined && start !== end) {
  
    //if conditions are true, run for loop to add numbers to array, iterate -step
    for (let i = start; i >= end; i = i - step) {
      
      //for every pass through the range, push i to the array
      rangeArray.push(i);
      
    }//close loop
    //create if-else chain to filter for step & that start & end are not equal
  } else if (step !== undefined && start !== end) {
    
    //if conditions are true, run for loop to add numbers to array, iterate +step
    for (let i = start; i <= end; i = i + step) {
      
      //for every pass through the range, push i to the array
      rangeArray.push(i);
      
    }//close loop
  
    //else if statement to verify step is undefined and that start & end are not equal
  } else if (step === undefined && start !== end) {
  
    //if conditions are trye, run for loop to add numbers to array, iterate +1    
    for (let i = start; i <= end; i++) {
      
      //for every pass through range, push i t array
      rangeArray.push(i);
      
    }//close loop
  }//close if statement
    
  //return array with range
  return rangeArray;
  
}//close range function



////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  
  //write a sum function that takes an array & returns the sum of #s in array
  
  //create sum variable to hold value of array sum
  let arraySum = 0;
  
  //create for loop to loop through the value in the array
  for (let i = 0; i <= array.length; i++) {
    
    //condition to filter 0s
    if ((array[i] === 0)) {
      
      //if value is 0, add 0
      arraySum = arraySum + 0;
      
    //if array has a number, add that number
    } else if (typeof array[i] === "number") {
      
      arraySum = arraySum + array[i]; //adds i to the value in the arraySum variable
      //negative numbers should subtract themselves
      
      //for all other values, add 0 to the sum
    } else {
      arraySum = arraySum + 0;
      
    }//close if statement
      
  }//close for loop
  
  //return the variable containing the sum value
  return arraySum;

}//close function

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  
  let newArray = []; //create container for new reversed array

  //create for loop to cycle through the array
  //start: end of the array, array.length - 1
  //stop: end of the array, when i is less than 0
  //iterate;: -1
  for (let i = array.length -1; i >= 0; i--) {
    //for every loop, add value at i to new array
    newArray.push(array[i]);
  }
  
  //return the new array
  return newArray;
  
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  
  //loop through array
  //start: 0
  //stop: mid-way through the array, array.length / 2
  //use Math.floor to round down for odd # of i
  //iterate: i++
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    
    //temp variable to hold swap value
    //swapValue holds [i]
    let swapValue = array[i]; 
    
    //re-write the value in the array at [i]
    //find location of replacement value by the last index of the array minus the current [i]
    array[i] = array[array.length - 1 - i];
    
    //assign the replaced index with the value held in swapValue
    array[array.length - 1 - i] = swapValue;

   }

  //return the same array, reversed
  
   return array;
   
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a nested list object from an array of values

function arrayToList(array) {

  //create final list variable for chain of key/value pairs in list
  //as given in example, the last list key has a value of null
  var list = null; 
  
  //set up for loop to loop backwards through the array
  //building the list up from the bottom
  //start: array length - 1
  //stop: beginning of list, index 0
  //iterate: -1, backward through the list
  for (let i = array.length - 1; i >= 0; i--) {
    
    //on every pass, add to the list
    //the value key will have the value at [i]
    //the rest key will have the value of the list variable
    list = {value: array[i], rest: list};
  
  }
  
  //return final list into the object
  return list;

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//turn a list (object) into an array, using <node> to cycle through the list
function listToArray(list) {
  
  //create new list array to return
  let listArray = [];
  
  //create for loop to cycle through the nodes
  //where node links to the sublist on that value
  //start: beginning of the list, when node = list
  //loop as long as there is a node, that is, a sublist
  //iterate: through each node, via the rest key - node.rest
  for (let node = list; node; node = node.rest) {
    
    //on each pass, push the value in that part of the list to the array
    listArray.push(node.value);
  }
  
  //return the new list array
  return listArray;
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {

  //return the element and list as key/value pairs for the object
  return {
  
    //we know the key names, so we can hard-code them here
    //element will take the value, list will link to the sublist
    value: element,
    rest: list
  
  };
  
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, index) {
  
  //take a list and a number as parameters
  //return the element at the given position [index] in the list 
  //return undefined when there is no such element.
  
  //return a call of listToArray function with list as argument
  //function will return an array with item in the list parameter
  //[index] in bracket notation will return the item from that index number in this new array
  return listToArray(list)[index];

  
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//write deepEqual function that takes two values
//returns true only if they are the same value or are objects with the same properties
//where the values of the properties are equal when compared with a recursive call to deepEqual


//declare function with two parameters
function deepEqual(value1, value2) {
  
  //set up initial if statement in if-else chain
  
  //test for same value first with === strict equal operator on values
  if (value1 === value2) {
    //if strictly equal, return true
    return true
    
  //next check if both values are objects with typeof operator
  //make sure null values aren't returning true to the object test
  } else if ((typeof value1 == "object" && value1 != null) && (typeof value2 == "object" && value2 != null)) {
   
    //if the values are objects, check that they have the same keys
    //use Object.keys method().length, this will immediate filter out keys that are not equal
    if (Object.keys(value1).length != Object.keys(value2).length) 
      //if keys are not the same length, return false
      return false;
   
    //if they are the same length, start for-in loop to check each key in value1
    for (var key in value1) {
      //<key> comes from value1, and is plugged that into hasOwnProperty() method to check for match in value2 
      if (value2.hasOwnProperty(key)) { 
        
        //if keys match, reuse deepEqual() to check that their values are equal
        //use ! operator to filter out non-matches first
        if (! deepEqual(value1[key], value2[key]))
        //if they are not equal, return false
        return false;
        
        //if the keys don't even match, return false
      } else {
        return false;
      }//close nested hasOwnProperty() if statement
    }
    
    //if the object's key/value pairs can pass the for-in loop tests 
    //that is, not return a false and keep moving though control flow
    //then it is deepEqual, return true
    return true;
  }
  //if all previous tests fail, return false
  else 
    return false;

}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
