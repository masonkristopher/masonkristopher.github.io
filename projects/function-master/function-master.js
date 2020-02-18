//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //returns an array of object's property values
    return Object.values(object); 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    
    //use Object.keys method to turn keys in object into arry
    //assign Object.keys result to variable, keyArray
    var keyArray = Object.keys(object);
    
    //return string from array with join method, each key separated by " "
    return keyArray.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
    //declare values array to store strings in
    var valuesArray = [];
    
    //for-in loop to cycle through values in the object
    for (var key in object) {
        
        //use if statement to filter out strings
        //use typeof to find values that are strings
        if (typeof object[key] === 'string') {
            
            //if values are strings, push them into our valuesArray
            valuesArray.push(object[key]);
        }
    }
    
    //use join method to concatenate values in array with " "
    //return the joined array
    return valuesArray.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//should take one argument and return 'array' if its an array 
//and 'object' if its an object

function arrayOrObject(collection) {
    
    //create if statement to filter for arrays and objects
    //typeof will return object for both arrays and objects, so we need something else
    
    //first check is for array
    //use Array.isArray method, will return true if it is an array
    
    if (Array.isArray(collection) === true) {
        return 'array';
        
    //second check is for object
    //use Object.prototype.toString.call() method to check for object
    //will return "[Object object]" is object
    
    } else if (Object.prototype.toString.call(collection) === "[object Object]") {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    //use toUpperCase() method and substring() method
    //converts first letter to uppercase
    //
    return string[0].toUpperCase() + string.substring(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a string of words and return a string with all the words capitalized

function capitalizeAllWords(string) {
    
    //return a string with a bunch of methods and a function run on it
    return string
        //toLowerCase() to start from everything lowercased
        .toLowerCase()
        //separate each word using split function, which splits by space ' '
        .split(' ')
        //map method turns the split into an array, each word as item in array
        //map parenthesis () call a function on every element
        //function in map() capitalizes the first word and then adds the rest to it using splice again
        .map(word => word[0].toUpperCase() + word.slice(1))
        //finally, join the array back together into a single string, with ' ' btwn each word
        .join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function welcomeMessage(object) {
    
    //create string to hold welcome message
    //concatenate text in message with capitalizeWord function
    //pass object name value thru function as argument
    //capitalizeWord function converts name to title case
    let string = "Welcome " + capitalizeWord(object.name) + "!"; 
    
    return string; //returns string with name value turned to title case

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    //create string variable to hold profile info string
    //call capitalizeWord function twice to pull name and species vlues from object
    let ourString = capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
    

    return ourString; //returns string with name and species value in title case

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    
    //conditioaln statement to check if object has noises array
    //and check that the array has values
    if (Array.isArray(object.noises) === true && object.noises.length > 0) {
    
    //if array exists, return noise array as string separated by spaces 
    //use join method to concatenate array values with " 
    return object.noises.join(" ");
    }
    //if no noises array, return string "there are no noises"
    else {
        return "there are no noises";
    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
    //conditional statement will determine if arugment <word> is at an index within the string
    //if the indexOf the word is greater than or equal to zero, it exists in the string
    if (string.indexOf(word) >= 0) { 
        return true; //if it exists, return true
    } else {
        return false; //else return false
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
    //push method name into friends array in the object
    object.friends.push(name);
    
    //return the object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
    //create if statement to check that object has a friends property
    if (object.friends !== undefined) {
        
        //if object has friends property, check if name exists in friends array
        //use indexOf method to return index of name, if it exists
        //checking that indexOf result is equal to or greater than 0 
        //this will return true if friend exists, false if not
        return object.friends.indexOf(name) >= 0;
    
    //if there is no friends property in object, return false
    } else {
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//STUDY THIS ONE!!!

function nonFriends(name, array) {
    
    //create notFriends array to hold the list of non-friends
    let notFriends = [];
    
    //loop through given array
    for (let i = 0; i < array.length; i++) {
        
        //define test with value of isFriend, will hold boolean value
        //false if not friends with <name>
        let test = isFriend(name, array[i]);
        
        //check that test is false and ensure that name of that object is not the same as the <name> parameter
        if (test === false && name !== array[i].name) {
            
            //if passes, then push the non-friend into the notFriends array
            notFriends.push(array[i].name);
        }
    }
    
    //return the array of non-friends
    return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
    //assigning a value to object will both create it, if it doesn't exist
    //or update it, if the key already exists
    //bracket notation is needed to pass the key parameter through
    
    object[key] = value;
    
    //return the updated object
    return object;
    

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    
    //function takes an object and an array of strings
    //remove any properties on <object> that are listed in <array>
    
    //turn array into a string to use in hasWord() function
    let string = array.join(" ");
   
    //use for-in loop to loop through object keys
    for (var key in object) {
        
        //use hasWord() function to check for word match
        //hasWord() will return boolean
        //assign result to variable to use in if statement
        let wordMatchTest = hasWord(string, key);
        
        //if wordMatch() returns true, delete the key
        if (wordMatchTest === true) {
            
            //use delete operator to remove properties
            delete object[key];
        }//close if statement
    }//close loop
}//close function

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
    //take an array and return an array with all the duplicates removed
    
    //create array to hold only the unique values
    let uniqueArray = [];
    
    //use filter() method to create a new array with only elements that pass a test
    //filter() run a loop on the array and with each pass, run the test
    //test will be a function with <word> and <index> parameters
    //<index> parameter is required for the filter() method
    uniqueArray = array.filter(function(word, index) {
        
        //<word> and <index> parameters are used in indexOf() method on the array
        //indexOf() will check the index of <word> aginst the index of the test word
        //if the index is greater than or equal to the word's index, it passes and gets kept
        //if the index is smaller, that means it exists in the array, and is a duplicate
        return array.indexOf(word) >= index;
    });
    
    //return the unique array
    return uniqueArray;
    
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}