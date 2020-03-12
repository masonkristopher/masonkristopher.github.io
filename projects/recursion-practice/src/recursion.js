// Solve all of the following prompts using recursion.



// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  
  //BASE CASE
  //check for negative numbers
  if (n < 0) {
    //stop recursing and return null if neg
    return null;
    //for pos numbers, stop recursing when n <= 1
    } else if (n <= 1) {
    return 1;
  } 
  
  //RECURSIVE CASE
  //keep n and send n minus 1 through recursive function
  //multiply the two together
  //return the result
  return n * factorial(n - 1);
  
};




// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  
  //BASE CASE
  //check for array having length = 0 to stop recursion
  if (array.length === 0) {
    //add 0 to the sum if there are no more numbers in the array
    return 0;
  }
  
  //RECURSIVE CASE
  //return the value at [0]
  //add it to the recursive call
  //recursive argument: the array with the value at 0 sliced off
  return array[0] + sum(array.slice(1));

};




// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  
  //since input is array and output is a number
  //create number variable to hold sum value
  let sum = 0;
  
  //BASE CASE
  //use for loop to cycle through the array
  //for loops include a stopping point to prevent infinite recursion
  
  for (let i = 0; i < array.length; i++) {
    
    //use Array.isArray to check if the value at [i] is an array
    if (Array.isArray(array[i])) {
      //if it is an array, reassign sum to the value of the recursive call
      //argument: array[i], to start for loop over on this array until it finds a number
      sum += arraySum(array[i]);
    } else {
    //if [i] is not an array, add that value to the sum variable
    sum += array[i]; 
    }
  }
  
  //return the total saved in the sum variable
  return sum;
  
};




// 4. Check if a number is even.
var isEven = function(n) {
  
  //use function to subtract the number by 2 recursively until it gets to either 0 or 1
  //0 is even, 1 is odd
  
  //first, check for negative numbers
  if (n < 0) {
    
    //RECURSIVE CASE 1
    //convert negative numbers into positive by multiplying by -1
    //pass this value into the recursive function
    return isEven(n * -1);
    
    //BASE CASE 1
    //check for even
    //when n is 0, return true
  } else if (n === 0) {
    return true;
    
    //BASE CASE 2
    //check for off
    //when n is 1, return false
  } else if (n === 1) {
    return false;
    
    //RECURSIVE CASE 2
    //if above tests fail, pass n - 2 into the recursive function
  } else {
    return isEven(n - 2);
  }
  
};





// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  
  //BASE CASE
  //check for n being reduced to 0
  //when it is 0, return 0 and end the function
  if (n === 0) {
    return 0;
    
    //RECURSIVE CASE 1
    //check for negative numbers
  } else if (n < 0) {
    //if negative, add 1 to get closer to 0
    //pass n + 1 into the recursive function
    return n + 1 + sumBelow(n + 1);
  }
  
  //RECURSIVE CASE 2
  //if even, subtract 1 from n
  //pass n - 1 into the recursive function
  return n - 1 + sumBelow(n - 1);
  
};






// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  
  let result = [];
  
  //BASE CASE 1
  if (x === y || x - y === 1 || y - x === 1) {
    return [];
    
  //RECURSIVE CASE 1
  } else if (x <= y) {
    let result = range(x, y - 1);
    result.push(y - 1);
    return result;
  
  //RECURSIVE CASE 2
  } else if (x >= y) {
    let result = range(x, y + 1);
    result.push(y + 1);
    return result;
  }
  
};




// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  
  //BASE CASE
  //stop recursion when exp === 0
  if (exp === 0) {
    return 1;
  } else if (exp < 0) {
    return exponent(base, exp + 1) / base;
  }
  
  //RECURSIVE CASE
  return base * exponent(base, exp - 1);
  
};




// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  
  
  //BASE CASES
  //first check if n is strictly equal to 1 or 2, which are both powers of 2
  if (n === 1 || n === 2) {
    return true;
    //then check if n is any number less than 2, which will not be a power of 2
  } else if (n < 2) {
    return false;
  }

  //RECURSIVE CASE
  //if no previous tests return a boolean, pass n through the function again
  //divide n by 2 on each recursive pass
  return powerOfTwo(n / 2);

};




// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  
  //BASE CASE
  //when string has no length property
  if (!string.length) {
    //if at the end of the string, return string literal into call stack
    return "";
  }
  
  //RECURSIVE CASE
  //return the last letter in the string to the call stack
  //call recursive function with slice() method applied to string as argument
  //slice will extract the string from the 0 index to the last index, minus 1
  return string[string.length-1] + reverse(string.slice(0, string.length - 1));
  
};




// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  
  //BASE CASE
  //stop recursion when we get down to 0 or 1 to prevent infinite recursion
  if (string.length <= 1) {
    return true;
  }
  
  //remove any spaces and capital letters from string
  let newString = string.split(" ").join("").toLowerCase();
  
  //check if string length is equal to 2
  if (newString.length === 2) {
    //if 2 characters left, check for match between them
    //no need for if statement, this will return boolean if true or false
    return newString[0] === newString[1];
  }
    
  //RECURSIVE CASE
  //check if first character and last character in string are equal
  if (newString[0] === newString.slice(-1)) {
    //if so, make recursive function call, passing middle characters in as arguments
    return palindrome(newString.slice(1,-1))
  }
  
  //if none of the above conditions return anything, return false - it is not palindrome
  return false;
  
};




// // 11. Write a function that returns the remainder of x divided by y without using the
// // modulo (%) operator.
// // modulo(5,2) // 1
// // modulo(17,5) // 2
// // modulo(22,6) // 4
var modulo = function(x, y) {
};




// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// NO PSUEDOCODE INSIDE THIS FUNCTION

//get the product of x and y by adding x to itself y numbers of times
//subtract 1 from y on each recursive call

//BASE CASE
//check if y is 0 to prevent infinite recursion

//RECURSIVE CASES
//then check if both x and y are negative numbers
//if so, a neg times a neg will produce a pos
//so reverse their sign while passing thru recursive call

//then check if y is negative
//if so, reverse both x and y so we can pass them thru the final recursive case

//then check if x is negative and y is positive
//if so, return x plus recursive call with x staying the same and y reduced by 1

//lastly, make same recursive call for all else
//adding x to multiply function, with x and y - 1 as arguments

var multiply = function(x, y) {
  
  if (y === 0) {
    return 0;
    
  } else if (x < 0 && y < 0) {
    return multiply(-x, -y);
    
  } else if (y < 0) {
    return multiply(-x, -y);
    
  } else if (x < 0 && y > 0) {
    return x + multiply(x, y - 1);
  }
  
  return x + multiply(x, y - 1);

  
};




// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};




// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

  //BASE CASES

  //stop recursion if both strings are empty
  if (str1.length === 0 && str2.length === 0) {
    //return true because both are the same string literal
    return true;
  }

  //stop recursion when there is only 1 letter left
  //if down to just 1 letter each, check if they match
  if (str1.length === 1 && str2.length === 1) {
    //return the boolean result of comparing each letter at [0] in the string
    return str1[0] === str2[0];
  }
  
  //RECURSIVE CASE
  //check if first letters of each string match
  if (str1[0] === str2[0]) {
    //if so, return the function with the rest of the letters passed thru
    return compareStr(str1.slice(1), str2.slice(1));
  }
  
  return false;
  
};




// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  
  //create array literal to hold new array
  let arr = [];
  
  //BASE CASE & RECURSIVE CASE COMBINED
  //check that the string has a length
  if (str.length) {
    //as long as it has characters in it, keep concatenating them to the new array
    //assign the concatenated string to the arr variable
    //concatendate both the character at 0 index and the recursive call of the function
    arr = arr.concat(str[0], createArray(str.slice(1)));
  }
  
  //once the string has no length, return the array
  return arr;

};




// 17. Reverse the order of an array
var reverseArr = function (array) {
  
  //create array literal to hold new reversed array
  let reversed = [];
  
  //BASE CASE & RECURSIVE CASE COMBINED
  //check that the input array has a length
  if (array.length) {
    //as long as the array has values in it, keep concatenating them to the new array
    //assign the concatenated string to the reversed array variable
    //concatendate both the value at the last index and the recursive call of the function
    reversed = reversed.concat(array[array.length - 1], reverseArr(array.slice(0, array.length - 1)));
  }
  
  //once the array has no length, return the reversed array
  return reversed;
  
};




// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  
  //create array literal to hold list
  let array = [];
  
  
  //check if length parameter is greater than zero
  if (length > 0) {
    
    //RECURSIVE CASE
    //if so, keep adding the values to the array
    //call buildList as value of array
    array = buildList(value, length - 1);
    //push value to the array
    array.push(value);
    //return the array with the value and the recursive call in it to the call stack
    return array;
  
    //BASE CASE
    //when length is 0 or less, stop recursing and return empty array
  } else {
    return [];
  }

};




// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  
  //BASE CASE
  //at end of array, stop recursion
  if (!array.length) {
    //return 0 into the count stack
    return 0;
  }
  
  //RECURSIVE CASE
  //if the value at 0 is the same at the value parameter
  if (array[0] === value) {
    //then return 1 into the call stack with a recursive function call
    //pass the array minus the current 0 index value
    return 1 + countOccurrence(array.slice(1), value);
    //if they are not equal, return 0 into the call stack
    //along with the the same recursive call, decreasing the values in the array
  } else {
    return 0 + countOccurrence(array.slice(1), value);
  }

};




// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  
  //create array literal for function to return 
  //will hold all the mapped values
  let mapped = [];
  
  //RECURSIVE CASE
  //if the array still has values in it
  if(array.length) {
    //run the callback function on the first array index
    //use concatenation to add that result to the mapped array
    mapped = mapped.concat(callback(array[0]));
    //concat the recursive function call to the mapped array
    //slice off the 0 index
    mapped = mapped.concat(rMap(array.slice(1), callback));
  }
  
  //BASE CASE
  //if line 516 fails, end recursion
  //array is empty, return whatever is in the mapped variable
  return mapped;
  
};




// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};




// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  
  //the first two number in the fibonacci secquence are 0 and 1 (in this example)
  //*some start at 1
  //each subsequent number is the sum of the previous two
  
  //BASE CASE
  //filter out negative numbers
  if (n < 0) {
    //return null if negative
    return null;
    
    //return n if the nth input is less than 2
    //because n will equal itself
  } else if (n < 2) {
    return n;
  }
  
  //RECURSIVE CASE
  //if n is greater than 2, pass n minus 1 and n - 2 into the call stack
  //will keep recursing until it arrives at a number less than 2
  //on its way out of the call stack, will build the sequence
  return nthFibo(n - 1) + nthFibo(n - 2);
  
  
};




// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  
  //create array literal to hold uppercase values
  let capitalized = [];
  
  //RECURSIVE CASE
  //check that input array still has values
  if (input.length) {
    //use concat to add capitalized values to array
    //use toUpperCase() to capitalize all the characters in the word at 0 index
    capitalized = capitalized.concat(input[0].toUpperCase());
    //concat the recursive function call to the array, slicing off the 0 index
    capitalized = capitalized.concat(capitalizeWords(input.slice(1)));
  }
  
  //BASE CASE
  //if input array as no length, return capitalized array
  return capitalized;
  
};




// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  
  //create array literal to hold result
  let titleCase = [];
  
  //RECURSIVE CASES
  //check that array has values
  if (array.length) {
    //if so, use concat to add the word at 0 index to titleCase array
    //run toUpperCase() on character at 0 index of word at 0 index in the array
    //add the rest of the word at 0 index to capitalized first word using splice and assignment operator
    titleCase = titleCase.concat(array[0][0].toUpperCase() + array[0].slice(1));
    //concat recursive function call to titleCase array, slicing of the 0 index from the array
    titleCase = titleCase.concat(capitalizeFirst(array.slice(1)));
  }
  
  //BASE CASE
  //if array has no values, return titleCase array
  return titleCase;
  
  
};




// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};




// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  
  //check to see if obj is defined
  if (obj === undefined) {
    //if not, assign obj value of object literal
    obj = {};
  }
  
  //BASE CASE
  //return object if string is null or has no more characters in it
  if (str === null || !str.length) {
    return obj;
  
  //RECURSIVE CASES
  //if str does not pass previous tests, add str[0] to obj or add 1 to existing key/value pair
  } else {
    
    //check if the character at 0 index is in the object
    if (!obj[str[0]]) {
      //if it is not in the object, create it with the value of 1
      obj[str[0]] = 1;
      //return recursive function to parent scope to keep building the object
      //slice off 0 index, pass it with defined and populated obj thru
      return letterTally(str.slice(1), obj);
    }
    
    //if it is in the object, add 1 to the value
    obj[str[0]] += 1;
    //return recursive function to parent scope to keep building the object
    return letterTally(str.slice(1), obj);
  }
  
  
};




// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  
  //RECURSIVE CASES
  //check if list has length greater than 1
  if (list.length > 1) {
    
    //if so, check if value at 0 index is strictly equal to value at 1 index
    if (list[0] === list[1]) {
      //if so, return recursive function call, slicing off duplcate value at 0 index 
      return compress(list.slice(1));
    }
    //if values are not equal, put value at 0 index into array literal 
    //and concatenate that with recursive function call, slicing off 0 index
    return [list[0]].concat(compress(list.slice(1)));
  }
  
  //BASE CASE
  //if list length is 1 or less, return the list
  return list;

   
};




// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};




// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  
  //use same logic as #31
  
  //RECURSIVE CASES
  //check if array has length greater than 1
  if (array.length > 1) {
    
    //if so, check if value at 0 index is strictly equal to value at 1 index
    if (array[0] === array[1]) {
      //if so, return recursive function call, slicing off duplcate value at 0 index 
      return minimizeZeroes(array.slice(1));
    }
    //if values are not equal, put value at 0 index into array literal 
    //and concatenate that with recursive function call, slicing off 0 index
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
  
  //BASE CASE
  //if array length is 1 or less, return the array
  return array;
  
};




// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  
  //check that array has values in it
  if (array.length) {
    
    //RECURSIVE CASES
    //if 0 and 1 index are properly signed, 0 pos and 1 neg
    if (array[0] > 0 && array[1] < 0) {
      //concat them both into array literal
      //along with recursive call of array, slicing off first two indexes
      return [array[0]].concat(array[1], alternateSign(array.slice(2)));
      
      //check if both 0 and index are opposite signs, 0 being neg and 1 being pos
    } else if (array[0] < 0 && array[1] > 0) {
      //concat them both into array literal, multiply value by -1 to reverse sign
      //also concat recursive function call, slicing off first two indexes
      return [array[0] * -1].concat(array[1] * -1, alternateSign(array.slice(2)));
    
      //check if only 0 index is negative (index 1 will be neg, otherwise line 788 would catch it)
    } else if (array[0] < 0) {
      //if so, do same concatenation, only reversing the sign of 0 index
      return [array[0] * -1].concat(array[1], alternateSign(array.slice(2)));
    
      //if all previous tests fail, then only index 1 is positive
    } else {
      //do same concatenation, reversing the sign of the value at index 1 only
      return [array[0]].concat(array[1] * -1, alternateSign(array.slice(2)));
    }
    
  }
  
  //BASE CASE
  //if array has no more values, return it
  return array;
  
};


// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  
  //create array of number words with the numbers matching the index
  var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  //BASE CASE
  //stop recursion when str is empty
  if (!str.length) {
    //when done, end by returning and empty string
    return "";
  }
  
  //RECURSIVE CASE 1 - NUMBER CHARACTER
  //check if first character in string is a number using .match() and RegEx
  //match() returns a boolean if the patten is present or not
  //[0-9] looks for any number between 0 and 9
  if (str[0].match(/[0-9]/)) {
    //if the character at 0 index is a number, create a container to hold it
    //use parseInt() to convert to an integer
    let digit = parseInt(str[0], 10);
    //return the number word using the number stored in digit 
    //to access the word at the correct index in numbers array
    //concatenate this with recursive call of str with 0 index sliced off
    return numbers[digit] + numToText(str.slice(1));
  }
  
  //RECURSIVE CASE 2 - NaN CHARACTER
  //if the character is not a number, return the character
  //and send the rest of the string through the function again
  return str[0] + numToText(str.slice(1));
  
};




// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};




// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};




// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
