/*
* FUNCTIONS
* 0. Functions are code blocks that perform tasks when called or executed.
* The "tasks" are any code statements within the curly braces of a function, called a
* code block.
*
* 1. Functions are initialized with parameters, which are like temporary or local variables 
* for use in the function. These parameters are populated with arguments, or values, 
* when the function is called. 
*
* 2. Functions have two types - function statements and function expressions.
* Function statements are defined with a unique name and specific parameters.
* Function expressions are anonymous functions assigned to a variable.
* 
* 3. Hoisting & Scope: Function statements and their code blocks are hoisted to the top 
* of their respective scope. A function expression's variable ONLY is hoisted to the top 
* of its scope, not the content of the function. All functions can access and modify any
* variables declared in their parent or global scopes, however the code in the parent/global
* scope cannot access variables declared within the function. The function can return the 
* value of local variables when the function is called in that scope.
*
* 4. Closures: Functions create closures around the statements and expressions
* in its code block if the code block uses variables declared in the parent or global
* scope. If a value or an object returned from a function is assigned to a 
* variable in the global scope, that closure's data can continue to exist and be
* used in the rest of the script.
*/

// function statements //
/* Function statements are named functions. They are initialized with the keyword 
* "function" followed by the desired name of the function.
* These functions cannot be reassigned. Functions statements can optionally take any
* number of inputs, called parameters, and pass them through the code block. These
* parameters work like local variables for the code block only. 
*
* Within the code block, a function can run any number of statements or actions and can 
* optionally return values. Returning values pushes any expressions from the local scope 
* of the function to the parent scope of that function. Once the keyword return is used, 
* the expressions listed on that line are pushed out and the function stops running. 
* Any code within the code block that follows an executed return statement will not run.
*
* syntax for function statements:
* functionName(optionalParameter1, optionalParameter2) {
*   code block to be executed;
*   optional return statement; 
* }
*
* Functions do not do run until they are called in the script, this will run or execute 
* the code block of the function. Calling a function is done by using the name of the
* function, followed by parenthesis. The parenthesis can include arguments that will pass
* through to the parameters in the function.
*
* syntax for calling a function:
* functionName(optionalArgument1, optionalArgument2)
*/

  //example function statement
  //sum1 and sum2 are parameters aka local variables for the function
  function testFunction(sum1, sum2) {
    var add = sum1 + sum2; //create new variable to store the value of sum1 + sum2
    return add; //return the variable's value to the parent scope
  }

  //example function call
  //the values in the parenthesis are the arguments that will be passed into the function
  testFunction(3, 4); //executes the function and passes 3 & 4 into it, returning 7
  console.log(testFunction(5, 7)); //prints => 12

  /* NOTE: the return does not make the variable add available to the parent scope, but it
  * does return the value of add when the function is called in the script above.
  */

// function expression //
/*
* Function expressions are anonymous functions assigned to a variable. They work the same 
* as function statements, but are hoisted differently and can be reassigned in the same
* way that variables can be reassigned.
*
* function expression syntax:
* var variableName = function (optionalParameters) {
*   code block to be executed;
*   optional return;
* }
*
*/

  //example of function expression
  //set div1 and div2 as parameters
  //NOTE: function does not have a name, it is anonymous
  //the function is "named" through the variable and assignment operator
  var funcExpress = function(div1, div2) {
    return div1 / div2; //returns div1 divided by div2
  }

  //call the function expression, pass 6 and 3 as arguments
  funcExpress(6, 3); //returns 2

  console.log(funcExpress(7, 2)); //prints => 3.5
  
  
// scope //
/*
* Function statements and their code block are both hoisted to the top of their
* respective scope. That means that the statements in the function's code block 
* can be called/invoked at any time within the scope of the function statement.
*
* Function expressions will only have their name hoisted to the top of their 
* scope, not their code block.
*/
  
    //function statement scope example
    
    //this is the parent scope here
    console.log(scopeExample()); //prints => "this can be called anywhere in this scope"
    
    
    function scopeExample() {
      //this is the local scope here
      return "this can be called anywhere in this scope";
    }
    
    //function expresson scope example
    
    //this is the parent scope
    console.log(typeof scopeExample2); //prints => undefined
    //scopeExample2 has been declared as a variable 
    //however the contents of the function cannot yet be invoked in the code
    
    var scopeExample2 = function() {
      //this is the local scope
      return "this cannot be called anywhere in this scope, only after line 131";
    };
    
// closures //
/*
* Closures are created when functions used variable declared in the parent scope.
* The code block within a closure can change the variable in the parent or global scope.
*/

  //closure example
   
  var name = "Kris"; //declare variable outside of the function, in the parent scope
  
  function fullName(lastName) {
    name += " " + lastName; //use the same variable in the function
    return name; //returns the altered variable when the function is invoked
  }
  
  fullName("Mason"); //invoke the fullName function to change the value of <name>
  
  console.log(name); //prints => "Kris Mason"
  //<name> variable was changed both in the function and in the parent scope
  
  