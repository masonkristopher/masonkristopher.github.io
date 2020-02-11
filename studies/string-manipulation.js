/*
* STRING MANIPULATION:
*
* 0. Strings can be manipulated in two primary ways, with operators and through
* methods. Methods are built-in actions that can be performed on objects.
* While strings are not objects, they have methods that will treat primitive values,
* like strings, as objects for the sake of running methods on them.
*
* 1. Strings can be manipulated with the + and += operators to concatenate strings.
*
* 2. Strings can be manipulated through methods that will transform them in 
* one way or another, like changing the case of the string or replacing values
* in a string.
*
*/

// 1. string operators //
/*
* There are two string operators that concatenate strings.
* The first is the addition sign, +, that can be used to join two strings.
* The second is the unary assignment operator, +=, that will also join two strings.
*/

  //examples of string operators

  var a = 'Hello,';
  var b = " how are you?";
  var c = a + b; //using + operator to concatenate a & b into a new string, c
  console.log(c); //prints => "Hello, how are you?" 

  //the assignment operator += can be used to concatenate and reassign simultaneously
  a += b; //reassign a to be a + b
  console.log(a); //prints => "Hello, how are you?"


// 2. string methods //
/*
* String manipulation methods are built-in JavaScript actions that run on strings.
* These methods temporarily treat the primitive value of a string as an object in
* order to run the method on them. Methods follow the syntax of functions and use
* dot notation. The syntax is the name of the variable followed by a period and 
* then the name of the method, followed by an open and closed parenthesis:
* variableName.methodName();
*
* Methods won't reassign the variable to the new value on their own, they will only 
* return a transformed string. Methods need to be used along with an assignment operator
* to either create a new variable with the transformation or to reassign the existing 
* variable.
*
*/

  //example of upper case method
  var myString = "I'm fine, thank you.";
  myString.toUpperCase(); //changes the case of myString to upper case
  console.log(myString); //does not print the upper case, because it wasn't reassigned
  //assign a new variable the value of the upper case method
  var upperCaseString = myString.toUpperCase(); 
  console.log(upperCaseString); //prints => I'M FINE, THANK YOU.

  //example of replace method
  //assign a new variable the value of the replace method
  var myNewString = myString.replace('fine', 'great'); //replaces 'fine' with 'great'
  console.log(myNewString); //prints => I'm great, thank you.
  
  //example of indexOf method
  //returns the first index where a given value appears in string (or array)
  console.log(myString);
  console.log(myString.indexOf("fine")); //prints => 4
  //fine starts at the 5th character in the string, index of 4
  //NOTE: will return a -1 if not found

  //example of includes method
  //returns true if a value appears in a string (or array)
  console.log(myNewString.includes("great")); //prints => true, great is in myNewString

  /*
  * Some other methods that can be used on strings:
  * NOTE: all methods will be temporary unless declared as the value of a variable
  * 
  * slice(start, end) - start and end are index locations to begin and stop slicing
  * (omiting the end parameter will slice the remaining values in the string,
  * using a negative number in this way will slice from the end of the string)
  * substring(start, end) - same as slice, except will not accept a negative index
  * substr(start, length) - same as slice, except second parameter specifies length of slice
  */

  //slice, substring, and substr examples
  myNewString.slice(10); //slices everything up to the 10th character
  myNewString.slice(-2); //slices everything before the last 2 characters
  console.log(myNewString.substring(0, 4)); //prints => "I'm"
  console.log(myNewString.substr(4, 13)); //prints => "great, thank"

  


