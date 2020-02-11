/*
* OPERATORS:
*
* 0. JavaScript uses operators to perform actions on values. There are many
* different kinds of operators in JavaScript, with different uses depending
* on the context. Most operators are binary, in that the operator has two operands,
* or values - one before and one after, upon which the operator performs.
* However, there are some operators that are unary or ternary, which have only
* one operand or three operands respectively.
*
* 1. Assignment operators (=, +=, -=, %=, etc) are used to assign and reassign 
* values to variables.
*
* 2. Arithmetic operators (=, +, -, *, /, %, etc) are used on numbers, or number 
* variables, to perform basic math arithmetic.
*
* 3. Comparison operators (==, ===, !=, >, <, etc) are used to compare values and 
* return a boolean value.
*
* 4. Logical operators (&&, ||, !) are used with comparison operators and also 
* return boolean values.
*
* 5. Unary operators (!, typeOf, -) are operators that only have one operand and 
* have a variety of uses, but typically perform an action on one value or variable.
*
* 6. Ternary operator (a ? b : c) is the conditional operator. It is the only operator with
* three operands, and is used as a shorthand for conditional statements.
*
*/

// 1. assignment operators //
/*
* Assignment operators are used to assign value to variables as well as to change the
* value of variables. The assignment operator is also known as the equal sign. 
* It assigns the value on the right of the equal = sign to the value on the left.
* 
* In addition to being assigned, variables and values can also be changed and reassigned
* by artithmetic symbols like addition and subtraction. There are compound assignment 
* operators that simplify these formulas.
*/
  
  console.log("\nassignment operators")

  //example uses of the assignment operator
  var a = 2; 
  var greeting = "hello"
  var anArray = [];

  //example of compound assignment operator
  //the = and + operators are merged, with the = at the end
  console.log(a += 4); //the same as a = a + 4, reassigning a from 2 to 6


// 2. arithmetic operators //
/*
* Arithmetic operators are used to do math. They place numerical values (or variables 
* storing numerical values) on either side of the operator and return a single 
* numerical value. The use of arithmetic operators follows the order
* of operations in algebra. The common arithmetic operators are equal (=), addition (+), 
* subtraction (-), multiplication (*), division (/), division remainder or modulus (%),
* increment (++), and decrement (--). 
*
* The increments and decrement operators are urnary, and are used similar to the 
* compound assignment operator, as a shorthand for adding and subtracting from a given
* value. ++ adds one to its operand, whereas -- subracts one from its operand. If these 
* are used before the value, it will return the value after adding or subtracting 1.
* If they are used after, it will return the value before adding or subtracting 1.
*/

  console.log("\narithmetic operators")

  //examples of arithmetic operators
  var a = (9 * 2) / 4; 
  console.log(a); //prints => 4.5
  console.log(7 / 2); //prints => 3.5
  
  //examples of the increment & decrement operators
  var b = 7;
  console.log(b++); //prints => 7, the value before incrementing by 1

  var c = 10;
  console.log(++c); //prints => 11, the value after incrementing by 1

// 3. comparison operators //
/*
* Comparison operators are used in logical statements to compare values or variables and 
* return a boolean value if the comparison is true. The operand values can be either 
* numbers, strings, objects, or logical. Comparison operators are often used in 
* conditional statements. 
*
* Comparison operators include: equal (==), strict equal (===), not equal (!=),
* strict not equal (!==), greater than (>), less than (<), greater than or equal (>=),
* and less than or equal (>=).
*
* Strict versus loose equal returns true for different conditions. Loose equal will 
* return true if the operands have the same value but not the same type. If the operands 
* are of different datatypes, JavaScipt will try to force them into numbers for comparison
* sake. Strict will return true only when the operands are the same value and same datatype.
*/

  console.log("\ncomparison operators")

  //examples of comparison operators
  a = 7 > 5; //a is reassigned to the value of 7 is greater than 5
  console.log(a); //prints => true, because 7 is in fact greater than 5

  //strict versus loose equal examples
  a = 3;
  b = '3';
  console.log(a == b); //prints => true because they are loosely equal
  console.log(a === b); //prints => false because they are not strictly equal


// 4. logical operators //
/*
* Logical operators represent "and" (&&), "or" (||), and "not" (!) and are used in logical
* statements to combine two or more conditions. They are often used alongside conditional
* operators to help produce a boolean value.
*/

  console.log("\nlogical operators")

  //examples of logical operators
  var c = (4 > 2) && (5 < 10); //the && needs both operands to be true to return true
  console.log(c); //prints => true

  var d = (3 < 5) || (4 < 2); //the || needs one of the operands to be true to return true
  console.log(d); //prints => true

// 5. unary operators //
/*
* Unary operators are unique operators that do not need two operands. These operators
* all produce a unique action. Most require the operand to follow the operator.
*/

  console.log("\nunary operators")

  //examples of unary operators
  var stringVar = "hello";
  typeof stringVar; //typeof operator, returns the datatye, which is string

  var testValue = 56;
  //the ++ operator is an assignment operator which happens to be unary as well
  console.log(++testValue); //prints => 57


// 6 ternary opeators //
/*
* Ternary operators are conditional operators and are the only operator to require
* three operands. This operator is shorthand for conditional if statements.
*
* The form of the ternary operator is:
* a condition ? expression to execute if truty : expression to execute if falsey.
*/

  console.log("\nternary operators")

  //example of ternary operator
  var f = 'good';
  var g = 'bad';

  g = 'good' ? console.log('g is good') : console.log('g is bad');