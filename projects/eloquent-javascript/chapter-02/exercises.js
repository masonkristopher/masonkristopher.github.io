
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {

  //create for loop to print # to console
  //loop will print the number of times, and number of #, given by the parameter, number
  //start: i = '#''
  //stop: when i.length = number
  //iterate: add one more # to i, or i = i + "#"
  for (let i = '#'; i.length <= number; i = i + '#') {
    console.log(i);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  
  //create for loop to print from start parameter number to end parameter number
  //start: start parameter
  //stop: end parameter
  //iterate: +1
  
  //nest if-else statements in for loop to filter out particular numbers
  //filter 1: numbers divisible by 3 prints "Fizz"
  //filter 2: numbers divisible by 5 print "Buzz"
  //filter 3: numbers divisible by BOTH 3 and 5 print "FizzBuzz"
  //filter 3 will need to appear first, as filters 1 and 2 will print them
  //else print number
  
  for (let i = start; i <= end; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else  if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) { 
  /*
  
  NOTES:
  
    - number parameter determines BOTH:
    - number of hash/space in a line and
    - number of lines in chessboard
  
  - need to create two loops, one to print lines and within that loop,
  one to print the characters
  - line loop with create binding, "line"
  - nested character loop with create binding, "square"
  - bindings will count up through each square and line together
    - i.e. each square has a position, 1 thru number for the character
      and 1 thru number for the line
      
  - nested loop will has if-else statement to test for even or odd:
    - test whether line # plus character # is even (% 2)
      - even numbers will add a blank space to the string
        line 1 + character 1 = 2, 2 % 2 returns a zero, it is even
        line 1, character 1 should be a blank
      - odd numbers will add a hash to the string

  - line loop will simply add newline character to the string after each line
  - newline is \n
  
  */
  
  //create empty string varible to hold chessboard
  let chessBoardString = "";
  
  //create for loop to print lines
  //start: start counting at zero
  //stop: last line
  //      keep running loop as long as line < number parameter
  //iterate: +1
  
  for (let line = 0; line < number; line++) {
  
    //create for loop to print characters
    //start: start counting at zero
    //stop: last hash/space
    //      keep running loop as long as space < number parameter
    //interate: +1
    
    for (let square = 0; square < number; square++) {
      //if-else statement to test for even or odd
      if ((line + square) % 2 === 0) {
        chessBoardString += " "; //if even, adds a blank space to string
      } else {
        chessBoardString += "#"; //else or if odd, adds a hash to string
      }
    }
    //back in the outer loop
    //after each character loop runs, line loop adds a line break, "\n"
    chessBoardString += "\n";
  }
  
  //console.log the string
  console.log(chessBoardString); // => chessboard
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
