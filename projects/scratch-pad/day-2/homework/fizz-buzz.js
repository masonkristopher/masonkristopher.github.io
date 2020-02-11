// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    var i = 1; //decalre and initialize i to 1 for the start of the count
    
    //for loop
    //start: 1
    //stop: 100
    //iterate: +1
    
    for (i = 1; i <= 100; i++) {
        
        // if, else if, else statement to filter out multiples
        //strict comparison between remainder and 0 for multiples
        
        if ((i % 3 === 0) && (i % 5 === 0)) { // first filter for multiples of both && 3 and 5
            console.log("FizzBuzz");
        } else if (i % 3 === 0) { // multiples of 3
            console.log("Fizz");
        } else if (i % 5 === 0) { // multiples of 5
            console.log("Buzz");
        } else {
            console.log(i); // else statement to print all integers not multiple of 3 or 5
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}