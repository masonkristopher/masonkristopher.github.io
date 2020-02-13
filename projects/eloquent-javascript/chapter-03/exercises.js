////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//declare function with two parameters
function min(num1, num2) {
  //return the value found by Math.min()
  //plug two parameters into Math.min()
  return Math.min(num1, num2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//declate function with one parameter
//isEven function will return a boolean, true if even, false if odd or negative
function isEven(n) {

  //create if else chain to check for evenness
  //first condition will eliminate negative numbers
  //negative numbers which will create an infinite recursion if allowed to pass thru it
  if (n < 0) {
    return false; //returns false if it is negative
    //check to see if the value is zero(n === 0), which is even
  } else if (n === 0) {
    return true; //returns true if it is 0, an even number
    //check to see if one is odd, n === 1
  } else if (n === 1) {
    return false; //returns false if it is odd
    //for any other number n, its evenness is the same as n - 2
    //use recursion here and run through isEven() again, testing n - 2
    //if this passes, the number is even and will return true on the second else 
  } else {
    return isEven(n - 2);
    }
}



////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//declare function with two parameters, one for string and one for character
function countChars(string, char) {
  
  //declare variable container for counting matching characters
  let charCount = [];
  
  //create for loop to check every letter in the string
  //start: 0 index
  //stop: string.length - 1
  //iterate: +1
  for (let i = 0; i <= string.length - 1; i++) {
    //check strict equality to argument passed thru char parameter
    if (string[i] === char) {
      //push that letter into the array
      charCount.push(i);
    }
  }
  //use .length to count the matching letters in charCount array
  return charCount.length;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//declare function with one string parameter
function countBs(string) {
  
  //declare variable container for counting Bs
  let bCount = [];
  
  //create for loop to check every letter in the string
  //start: 0 index
  //stop: string.length - 1
  //iterate: +1
  for (let i = 0; i <= string.length - 1; i++) {
    //check strict equality to uppercase Bs
    if (string[i] === "B") {
      //push that letter into the array
      bCount.push(i);
    }
  }
  
  //use .length to count the matching letters in charCount array
  return bCount.length;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
