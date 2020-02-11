/* 
* DATATYPES
* 
* 0. Datatypes are identifiers for different kinds of values or information. 
* JavaScript has several different datatypes, some primitive and some complex.
* Datatypes have properties and methods, which are like functions, that can be used
* on them. These properties and methods allow for datatypes to be operated
* differently from one another based on their differing qualities.
*
* 1. Numbers are values expressed only in numeric characters and can be 
* manipulated through arithmetic.
*
* 2. Strings are text values expressed in any combination of characters wrapped in
* either single or double quotation marks. 
*
* 3. Booleans are always either true or false values, written without quotations.
*
* 4. Arrays are complex datatypes that contain indexed lists of any datatype.
*
* 5. Objects are complex datatypes that contain unordered key/value pairs - the values
* can be any datatype, whereas the keys are always strings.
*
* 6. Functions are code block datatypes that perform tasks when called or executed.
* The "tasks" are any code statements within the curly braces of a function. 
*
* 7. Undefined is a global variable in JavaScript, it is automatically assigned
* to objects that have been declared but have not been assigned a value.
*
* 8. Null is a JavaScript keyword that represents no value, or the absence of value. 
*
* 9. "Not a number", NaN is a global property in JavaScript that represents a value 
* that is not a number.
*
* 10. Infinity is a numeric value that signifies infinity.
*
* 11. Primitive datatypes are simple, singular values, whereas complex datatypes are
* containers for an indefinite number of values. 
*
* Simple/Primitive datatypes are singular values and include:
* strings, numbers, booleans, undefined, null, and NaN.
*
* Complex datatypes are containers for values, they store lists, values, and statements.
* They include: arrays, objects, and functions.
*
* 12. Primitive and comples datatypes are copied, stored, and referenced differently.
* Primitive/simple values are sent to functions by copying into them, whereas complex 
* values are copied by referencing them.
* 
*/

// 1. numbers //
/* 
* Numbers are values expressed only in numeric characters and can be 
* manipulated through arithmetic. Numbers can be stored with or without decimals.
* Numbers are stored in 64-bits.
*/

  //example of number datatypes
  var a = 5; 
  var aa = 5000000;
  var sum = 4 * 3 / 2; // example of manipultion through arithmetic
  console.log(sum); // prints => 6
  
  var divisionRemainder = 20 % 3; // use of the % remainder operator on numbers
  console.log(divisionRemainder); // prints => 2 
  console.log(typeof sum); // prints => number, using typeof to access the datatype propery
    

// 2. strings //
/*
* Strings are text values expressed in any combination of characters. 
* Strings are always stored in single or double quotation marks.
* Strings are indexed in order and each character in a sring can be referenced
* using bracket notation. The first position of a string index is 0.
*/

  var firstName = 'Kristopher'; // example of a string variable, using single quotes
  var lastName = "Mason"; //example of string, with double quotes
  //note: you can use either single or double, but you can't use both for a single string

  //can use quotes inside of a string, needs to be different (single or double) than the
  //string quotes:
  var nickName = "'Kris'"; 

  var fullName = firstName + " " + lastName; //use two variables to populate another
  console.log(fullName); // prints => 'Kristopher Mason'
  console.log(lastName[0]); // prints => M
  console.log(nickName.length); // prints => 6, the length of 'Kris'


// 3. booleans //
/*
* Booleans are a logical datatype. Booleans are always one of two values, true or false. 
* The two booleans, true and false, are global variables in JavaScript. Booleans are 
* NOT the same as the strings, "true" and "false". Booleans can work like on/off buttons.
*/

  var myAgeIs35 = true; // example of the boolean, true
  var lieVariable = false; // example of false
  console.log(Boolean(4 === 5)); // prints => false, 4 is not srictly equal to 5

// 4. arrays //
/*
* Arrays are complex datatypes that can store more than one value at a time.
* Arrays store values in ordered collection. The first value has an index of 0, 
* the second value has an index of 1, and so on. The values in arrays can be any 
* datatype, including other arrays. 
*
* Because arrays are indexed, they can be looped through by their index location -
* similar to how strings are indexed, have a length, and can be looped through.
*
* There are a variety of methods for changing and reassigning the values in an array.
* A couple of these are shown below.
*/

  var face = []; // example of array literal
  var face = ['eyes', 'nose', 'ears', 'mouth']; // an array with string values
  
  face.push(true, 1); // adding values to the array with the push() method
  console.log(face); // prints => ['eyes', 'nose', 'ears', 'mouth', true, 1]
  face.pop(); // pop method to remove the last value in the array
  console.log(face); // prints => ['eyes', 'nose', 'ears', 'mouth', true]
  face[0] = "brown eyes"; // replaces the 0 index, "eyes", with "brown eyes"


// 5. objects //
/*
* Objects are complex datatypes that contain key/value pairs. 
* Unlike arrays, objects are not ordered. However, every entry in an object has
* both a key name and a value. Object keys are always strings, whereas object values
* can be any datatype. The key/value pairs are always separated by a colon. 
* Each key/value pair is separated by a comma, except for the last one in an object.
*
* Object values can be accessed using either dot or bracket notation. However, 
* dot notation is most common for objects.
*/
  var body = {}; // object literal
  
  // example of an object
  var body = {
      arms: 2,
      legs: 2,
      head: face,
  }

  body.tattoos = true; // add new key/value to body object with dot notation
  console.log(body.legs); // prints => 2, the value of "legs" key


// 6. functions //
/*
* Functions are code block datatypes that perform tasks when called or executed.
* The "tasks" are any code statements within the curly braces of a function. 
* Functions are initialized with parameters, which are like temporary or local variables 
* for use in the function. These parameters are populated with arguments, or values, 
* when the function is called. Values are returned to the global scope by a function
* with the return keyword. Once a return has been executed in a function, the function
* stops running. Therefore, any code after a return will not run.
*
* Function names and their content are fully hoisted to the top of their scope.
*/

  // example of a function declaration
  function exampleFunc(a, b) { // a & b are parameters, local function variables
      return a + b; // code the function runs
  }

  // example of a function call
  exampleFunc(2, 4); //2 and 4 are populated into the placeholders of a and b above

  console.log(exampleFunc(5, 6)); // prints => 11, passing 5 & 6 through the function

  //function calls can be used as values in other variables
  var sum = "5 plus 6 equals " + exampleFunc(5, 6);

  //an example of function expression
  //the function is always anonymous in a function exression
  //function expressions are not hoisted entirely like function declarations
  //only the variable name is hoisted, not the function content
  var funcExpress = function (name) { 
    console.log("Hello " + name + ", this is a function expression.");
    }

  //example of function call for function expression above
  funcExpress("friend");

// 7. undefined //
/* 
* Undefined is a global variable in JavaScript, it is automatically assigned
* to objects that have been declared but have not been assigned a value, array indicies or 
* object properties that do not exist, function parameters that have not been declared, 
* or when a function returns no value.
*/

  var b; // variable b is declared by not initialized
  console.log(b); // prints => undefined
  var y = undefined; //variables can able be emptied by assigning it the value of undefined

// 8. null //
/* 
* Null is a JavaScript keyword that represents "nothing": no value, or the absence of value.
* Null is always assigned to a variable by a programmer, it is not automatic.
* Null has the same value as undefined, but is not the same datatype.
*/

  var x = null; // initialize x with no value by assigning it the value of null
  console.log(x); // prints => null

// 9. NaN //
/* 
* "Not a number", NaN is a global property in JavaScript that represents a value 
* that is not a number, it is returned with mathematical functions fail as a result of one
* or more variables being anything other than a number.
*/

  // example of NaN
  var x = 'teeth';
  var y = 3;
  console.log(x * y); // prints => NaN because you cannot multiply teeth by 3

    
// 10. infinity & -infinity //  
/*
* Infinity is a numeric value that signifies infinity, or positive 
* infinity, where no other number is greater than it. -Infinity signifies negative infinity or
* that no other number is smaller than this number. Both infinity and -infinity are global 
* properties of JavaScript.
*/

  //examples of infinity
  console.log(10 / 0); //prints => Infinity
  console.log(1 / Infinity); //prints => 0
  console.log(-Infinity); //prints -Infinity
  console.log(-Infinity - 1); //prints -Infinity


// 11. primitive & complex //
/*
* Primitive datatypes can also be described as simple. 
* They are the basic types of data in JavaScript, they do not contain any other types of data 
* or values - they contain a singular value. Primitive datatypes include numbers, strings, 
* booleans, undefined, null, and NaN. Complex datatypes contain other datatypes, they list 
* or store a multitude of values and can be any size.
*/

  //example of primitive datatypes
  var a = 2; //number
  var why = "so many questions"; //string
  var nothing = null; //null
  console.log(2 / "hotdogs"); //prints => NaN, not a number
  var lies = false; //boolean
  var x;
  console.log(x); //prints => undefined

  //examples of complex datatypes
  var myArray = [1, "apple", true]; //array

  //object:
  var myObj = {
    name: "kris",
    age: 35,
    location: "new orleans"
  };

  //function:
  function anotherFunc(test) {
    return test + " is the test";
  }

// 12. copy versus reference //
/* 
* Primitive and comples datatypes are copied, stored, and referenced differently.
* Primitive/simple values are sent to functions by copying into them, whereas complex 
* values are copied by referencing them. The primitive value is copied to the location 
* in memory of that variable. If a new variable is assigned the value of a pre-existing 
* variable (var b = a, for example), the new variable has it's own location in memory and 
* the value is copied over to that new location. When a complex datatype is created, it 
* also get it's own location in memory. However, when the complex datatype is assigned to 
* another variable, it is not copied over by value it is copied by referencing to that 
* original location in memory.
*/

  //example of a primitive datatype being copied
  var a = 5; //var a is primitive datatype, a number, with it's own location in memory
  var b = a; //var b copies over the value from var a to a new location in memory

  //example of a complex datatype being referenced
  var arr = [1, 2, 4, 9];
  var refArr = arr; 
  //the array is not copied to a new location, refArr references the original location, arr