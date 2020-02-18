// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  
  //return the reduce function run on the given array
  //do not need the start parameter, since the array has at least 1 value
  //use arrow function for simplicity
  //parameters are the main array and any nested arrays
  //rather than combine all the values in the array into one value (sum)
  //use concat to make one array, adding the sub-arrays to the main array
  return array.reduce((mainArray, nestedArray) => mainArray.concat(nestedArray));

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//function has 4 parameters:
//a value, a test function, an update function, and a body function

function loop(value, test, update, body) {

  //create for loop
  //start: the given value from the function's parameters, declare it as x
  //stop: when test() function returns false, run test() on the x to check
  //iterate: run the update() function on x to change it and start over
  //code block: run the body() function on x for every pass
  
  for (let x = value; test(x); x = update(x)) {
    body(x);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {

  /*
  USING EVERY() METHOD
  return the array with the every method run on it
  pass the given test as the function to run on every element in the array:
  return array.every(test);
  */

  //create an every function without using the every() method
  //use a for-of loop
  //declare item variable, will be each index or element in the array
  //array will pass the array parameter through the for-of loop
  
  for (let item of array) {
    //use test() in if statement to check if the test returns false
    //loop will run this test on every item in the array
    //if any item fails, it will return false and stop the function
    if (!test(item)) return false;
  }
  //if none of the elements in the array fail the test, then the test passes
  return true;

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//pass given text thru the function, <text>
function dominantDirection(text) {


  //determine which scripts are being used in the <text>
  //use countBy function and characterScripts to determine the script
  //countBy will organize the characters into groups based on their code at index 0
  let scripts = countBy(text, char => {
    //the test function  uses characterScript to find the code for the text
    //assign result of chatracterScript to script variable
    //codePointAt() method finds the code point value of an element
    let script = characterScript(char.codePointAt(0));
    
    //return the result of a conditional statement:
    //condition is the value of script
    //if script is truthy, return script direction property
    //if falsy, return "none"
    return script ? script.direction : "none";
    
    //apply filter method to this result, to remove nameless characters
    //check the name parameter, and only resturn results that have a name
    //or do not have a name of "none"
  }).filter(({name}) => name != "none");
  
  //if scripts variable holds null from only characters like !@#$%^&*() being input,
  //which means the length would be equal to 0,
  //default left to right "ltr" directon
  if (scripts.length === 0) return "ltr";
  
  //use reduce on result stored in scripts variable to find the majority character's script
  //reduce loops through the array, comparing x and y's counts iteratively through the array
  //returning whichever has a higher count
  return scripts.reduce((x, y) => x.count > y.count ? x : y).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
