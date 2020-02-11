/*
* LOOPS
*
* 0. Loops are code blocks that allow a program to do something on repeat.
* 
* 1. For loops have parameters for where to start, what conditions need to be true to
* continue looping, how much to increment or count up or down in each loop, and what
* code to exectue on each pass.
*
* 2. While loops will repeat an action as long as a given condition is true.
* The increment is included in the code block action of a while loop, while the 
* variable(s) used are declared outside of the loop and set the beginning condition of 
* a while loop.
*
* 3. For loops can be used to loop through the values of an array, whereas 
* For-in loops are used to loop through the values of an object.
*
*/


// while loops //
/* 
* While loops will execute a code block as long as a given condition remains true.
* The variable(s) used in a while loop are declared and initializes outside of the loop.
* The initialized variable sets where the loop will start. While loops need a 
* variable's value to change, such as increase or decrease, so the loop will be able to
* eventually stop looping. If no increment is stated in the while loop's code block,
* the loop will never end and the program will crash.
*
* while (condition) {
*   code block to execute;
*   iteration;
* }
*
*/

  //declare variable for use in while loop, sets the beginning condition of loop
  var x = 35;

  //create while loop to count backwards from 35 to 23
  while (x > 23) {
    console.log(x); //prints to the console the value of x on each loop
    x--; //set increment to decrease x by 1 on each loop
  }

// for loops //
/*
* For loops have four parts: the initial expression, which initializes the loop
* and the loop count (it can also declare a variable); the condition, which allows
* the loop to keep running as long as the condition is true; the increment expression,
* which sets how much to count up or down; and the statement that will execute on each
* loop. 
*
* for (initial expression; condition; iteration) {
*  code statement;
* }
*
* Multiple statements should be executed as a block statement by enclosing them
* in curly braces. For loops can count up or down any number of times, and are 
* useful for looping through the values in an array.
*/

  //for loop to count up from 1 to 10
  //start: 1
  //stop: 10
  //iterate: +1

  for (let x = 1; x <= 10; x++) {
    console.log(x); //prints => 1 - 10 to the console, each number on a new line
  }

  //initialize array for for loop example
  var burgerToppings = ['cheese', 'lettuce', 'pickles', 'onion', 'mayo']

  //for loop to loop over the values in array
  //in this example, the value of x will be the index in the array
  //start: 0 index
  //stop: last index in the array, burgerToppings.length - 1
  //iterate: +1

  for (let x = 0; x <= burgerToppings.length - 1; x++) {
    console.log(burgerToppings[x]);
  }

  //example of the same loop, but looping backwards over the array
  //start: last index in the array, burgerToppings.length - 1
  //stop: 0
  //iterate: -1

  for (let x = burgerToppings.length - 1; x >= 0; x--) {
    console.log(burgerToppings[x]);
  }

// for-in loops //
/*
* For-in loops are used to loop over the values in an object. They can be used to 
* loop through the key, the value, or both the key and value. A variable is declared
* in the for-in loop initialization, which works like a local variable for the keys
* in the object - it is standard to use the variable "key" for this. 
*
* for (var key in objectName) {
*   code block to execute, use variable "key" to access the key names
*   and bracket notation to access the values
* }
*
* The for-in loop automatically iterates by 1. You cannot change the order of the 
* iteration because object key/value pairs are not stored in order - there is no 
* index or order to them.
*/

  //example for-in loop to loop through object

  //initialze object
  var myRoom = {
    bed: true,
    shelves: 5,
    dresser: "tall",
    nightstand: false
  }

  //set up for-in loop
  //the variable "key" will access the key name in the object
 
  for (var key in myRoom) {
    console.log(myRoom[key]); //prints => only the values of each key
  }
  
  /* NOTE: while it is generally best practice to use dot notation for objects, it is
  * necessary to use bracket notation to access values in objects in for-in loops
  */