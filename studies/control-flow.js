/*
* CONTROL FLOW
*
* 0. Control flow is the order code is executed in JavaScript. Starting with line 1,
* the code is run from top to bottom. JavaScript has built-in statement structures
* that can change the control flow order, such as conditional statements and loops.
* 
* 1. Conditional statements use a series of statements to perform particular actions 
* if given conditions are either truthy or falsey. These statements can be structed 
* in two primary ways: if statements and switch statements. If statements can include
* just one if statement, or a indefinite series of if-else statements, called a chain.
* Switch statements check if values have strict equality in order to execute a
* particular code block, and are useful for longer chains.
* 
* 2. Conditional statements and switch statements often use comparison and logical
* operators to return truthy or falsey values.
*
*/


// if //
/*
* The if statement is a section of code block that will execute the following code
* in curly braces ONLY if the section returns a truthy value.
*
* If statements can be standalone if there is no need to execute different code for
* a different condition being either true or false. However, there can only be one
* if statement in an if-else chain - any instance of the keyword "if" by itself 
* will start a new logical chain. 
*/

  //set up variable to use in if statement
  var age = 67;
  
  //code in parenthesis is the condition
  //if the condition returns a truthy value, the code in curly braces will run
  if (age > 65) {
    
    //the age is greater than 65, so it will return true
    console.log("you get a discount!"); //prints => "you get a discount!" 
  }

  /*
  * NOTE: if the condition returned a falsey value, the code block in {} would simply
  * not run and the control flow would move on to the line after the {} code block.
  */


// else-if //
/*
* Else-if is used when there is a need to check for other conditions being either true
* or false. Else-if statements will only run if the initial if statement returns a falsey
* value and any else-if statements before it in the script also return a false.
*
*/

  //declare and initialize weather variable to the value of "cloudy"
  var weather = "cloudy";

  //weather is not rain, so if statement will return false and skip the code block after
  if (weather === "rain") {
    //script will skip this code block
    console.log("R A I N"); 
  //script moves on to this condition, which will return true
  } else if (weather === "cloudy") {
    //this code block will run, and prints "C L O U D Y" to the console
    console.log("C L O U D Y");
  /*
  * NOTE: because the else-if condition on line 60 was true, the script skips any 
  * other conditions and code block pairs that follow it in this if-else chain.
  */
  } else { //script skips this
    "M Y S T E R Y  W E A T H E R"; //and skips this
  }
  //control flow resumes running the script from here


// else //
/*
* Else is a default condition that will run when all previous if and else-if conditions
* in the chain return a falsey value. Else does not use a conditional statement to
* run the code block, it will just run when everything before it is false.
*/

  //initialize test variable
  var pet = "ferret";
  //declare test variable for if-else chain to initialize
  var species;

  if (pet === "dog") { //returns false
    species = "canine"; //skips this code
  } else if (pet === "cat") { //return false
    species = "feline"; //skips this code
  //all previous conditions return false, so the script run this code
  } else { //note that else statements do not have a () conditional statement 
    species = undefined; //initializes the species variable as undefined
  }

  console.log(species); //prints => undefined

// switch //
/*
* The switch statement is another way of writing if-else chains and is sometimes
* better suited to long chains. Whereas if-else chains have conditional statements
* followed by code block to be executed if that condition is true, switch statements
* have an expression parameter that is passed through each "case". Each case has 
* code that will execute if the case is strictly equal to the value passed through
* the expression parameter. If the case is not equal, the script will switch to the
* following case after the keyword "break" is used. Cases and their corresponding code 
* are paired together with a colon, similar to object key/value pairs. The entire
* chain of switch statements is wrapped in curly braces. Similar to the else statement
* in if-else chains, the switch statement has a final default keyword that can be used
* to execute a particular code if all previous cases are not strictly equal to the
* expression.
*
*/
  //set variable to pass through switch statement
  var plant = "pothos"

  //use variable name as the expression to check
  switch (plant) {  

    //switch statement passes the plant variable through each case
    case "philodendron": //checks for strict equality, returns falsey value
      console.log("medium light"); //skips this
      break; //registers the break to move onto next case
    case "ivy": //checks if "ivy" === plant, returns false
      console.log("bright, indirect light"); //skips this
      break; //breaks to next case
    case "snake": //checks if "snake" === plant, returns false
      console.log("low to medium light"); //skips this
      break; //breaks to next case
    case "pothos": //checks if "pothos" === plant, returns truthy value
      console.log("low to high light"); //runs this code
      //stops executing switch statement here
      break;
    //NOTE: default would only be executed if none of the previous cases were true
    default:
      console.log("no light information on this plant");
    
  }
//control flow resumes running the code here
