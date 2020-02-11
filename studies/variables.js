/*
* VARIABLES:
*
* 0. To store information in a program, we use variables. 
* Variables are assigned names or identifiers that can be used to refer to their value(s) 
* in a program. The information that variables contain is data, and can be one of several 
* different data-types, including: numbers, strings, booleans, arrays, and objects. 
* Variables are changable and can be re-assigned to different values or data-types.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*
* 3. In addition to using the keyword, var, to create containers for data, we can use the 
* keywords, let and const, to identify values. The keyword, let, is used to create a 
* variable with a local or block scope, that will not apply globally or to the whole program. 
* This is useful inside {} in functions and loops, for example.
* 
* The keyword, const, is used to identify values that are constant, that will not be changed. 
* Unlike var and let, which can be reassigned, const cannot.
*
4. Hoisting is JavaScript's default action of moving variable declarations to the beginning 
* or "top" of a program, script, or function. Only values identified with the keyword, var, 
* are hoisted to the top. Variables decalred with let or const will not automatically be 
* hoisted, which will make them limited to the scope (block or function) 
* in which it was decalred.
*/

// 1. declaration //
/*
* NOTE: at the declaration phase, the variable myName is undefined because 
* we have NOT initialized it to anything
*/

  var myName; // declares variable 'myName'

  console.log(myName); // prints => undefined

// 2. initialization or assignment - definiting the variable //
  myName = 'john';
  console.log(myName); // prints => john

// 3. re-assignment //
/*
* NOTE: we can assign and re-assign anything to a variable,
* we cannot do this with constants
*/

  myName = 'bob';
  console.log(myName); // prints => bob

  var myVariable = 1; // declares & initializes the myVariable with a value of 1
  var myVariable = true; // re-assigns myVariable from the number, 1, to the boolean, true
  myVariable = "someString"; //re-assigns myVariable from true to 'someString'

// 4. let & const//
/*
* NOTE: let and const variables are not hoisted to the global scope of a script, 
* if let or const are used in a function, loop, if statement or other code block, 
* they will only apply to that code block.
*/

  let myNewName = 'kris'; // example of declaring and initializing a variable with let
  const myOtherName = 'kristopher'; // example of using const
  console.log(myOtherName, myNewName); // prints => kristopher kris

// 5. hoisting //
/* variables are 'hoisted' or moved to the top of their respective scope 
* in which they are declared. Only the name of variables, not the content of them
* are hoisted to the top.
*/

  console.log(hoistedVariable); // prints => undefined, only variable name is hoisted 

  var hoistedVariable = "this text won't be logged to the console"; 

  function test() {
      var testVariable = "will this work?";
      return testVariable;
  }