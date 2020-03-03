// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-masonkristopher");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {

    //i: an array
    //o: number
    //c: use _.filter

    //get access to each customer object
    //filter out the males
    return _.filter(array, function(customerObj) {
        //check to see if my customerObj is male using "gender" key
        return customerObj.gender === "male";
    }).length; //chain on .length to get number of male customers

};

var femaleCount = function(array) {

    //i: an array
    //o: number
    //c: use _.reduce

    //test for gender key === "female"
    return _.reduce(array, function(seed, customerObj, i) {
        
        //if gender === female, add 1 to seed value
        if (array[i].gender === "female") {
            seed += 1;
        }
        
        //return the seed, which will have total # of female customers
        return seed;
        
    }, 0); //start seed at 0 to keep track of count
        
};



var oldestCustomer = function(array) {
    
    //i: an array
    //o: string, name of oldest customer
    
    //create variable to hold the age
    let age = 0;
    //create variable to hold the name
    let name;

    //use each method to loop through each element    
    _.each(array, function(customerObj, i, customersArray) {
        
        //use if to check if the age in the age variable is less than the age at <i>
        if (array[i].age > age) {
            //if it is, replace the age at <i> to the age variable
            age = array[i].age;
            //and replace the name with the corresponding name
            name = array[i].name;
        }
    });
    
    //return just the name variable, which will be a string
    return name;
    
};



var youngestCustomer = function(array) {
    
    //i: an array
    //o: string, name of youngest customer
    
    //create variable to hold the age
    let age = 100;
    //create variable to hold the name
    let name;
    
    //use each method to loop through each element
    _.each(array, function(customerObj, i, customersArray) {
        
        //use if to check if the age in the age variable is more than the age at <i>
        if (array[i].age < age) {
            //if it is, replace the age at <i> to the age variable
            age = array[i].age;
            //and replace the name with the corresponding name
            name = array[i].name;
        }
    });
    
    //return just the name variable, which will be a string
    return name;
    
};


var averageBalance = function(array) {
    
    //i: array
    //o: number
    
    //use pluck method to pull out all the balances from the array of objects
    //save these balanaces to an array
    let balances = _.pluck(array, "balance");

    //use reduce method to tally up the sum of all balances
    //save this result into a totalBalance variable
    let totalBalance = _.reduce(array, function(seed, customerObg, i) {
        //on each pass, add the balance to the sum of all previous balances
        //use Number() method and replace() method to convert balance string into number
        seed += Number(array[i].balance.replace(/\$|,/g, ''));
        
        //return the sum held in seed variable
        return seed;
    }, 0); //start seed off at 0 for the count and to establish the variable as a number
    
    //calculate the average and save it to a variable
    //divide the sum of all balances by the length of the balance array 
    //length of array is the the number of customers with a balance
    let avgBalance = totalBalance / balances.length;
    
    //return the average blanace variable
    return avgBalance;
    
};


var firstLetterCount = function(array, letter) {
    
    //i: array, letter
    //o: number
    
    //return the result of filter
    //filter for every customer name that starts with the same given letter
    //use toLowerCase() method to strip case sensitivity
    //will create an array of customer objects with name match
    return _.filter(array, function(customerObj, i, customersArray) {
         return array[i].name[0].toLowerCase() === letter.toLowerCase();
    }).length; //add .length to return the number of customers with letter match
   
};


var friendFirstLetterCount = function(array, customer, letter) {
    
    //i: array, customer, letter
    //o: number
    
    //save result of filter to an array variable
    //will create an array of 1 customer object with a name match to the given customer name
    let ourCustomer = _.filter(array, function(customerObg, i, customersArray) {
        return customersArray[i].name === customer;
    });
    
    
    //return the result of filter
    //run filter on this extracted customer object
    //will create an array of friends names that start with a letter match to given letter
    return _.filter(ourCustomer[0].friends, function(e, i, a) {
        //use toLowerCase() to remove case sensitivity
        return ourCustomer[0].friends[i].name[0].toLowerCase() === letter[0].toLowerCase();
    }).length; //return the length of this array to get the number of friends with letter match
    
};
 

var friendsCount = function(array, name) {
    
    //i: array, name
    //o: array
    
    //create an empty array to hold the customers that have a given name as friend
    let nameMatch = [];
    
    //loop through the array of customer objects
    for (let i = 0; i < array.length; i++) {
        
        //loop through each friends list
        for (let x = 0; x < array[i].friends.length; x++) {
           
           //check for matches at each index of the friends list
           if (array[i].friends[x].name === name) {
               
               //if there's a match, push the name to empty array
               nameMatch.push(array[i].name);
           }
       }
    }
    
    //return the array of customers with friend match
    return nameMatch;
};

var topThreeTags = function(array) {
    
    //find the three most common tags among all customers' associated tags
    
    //create array to hold all the tags
    let allTags = [];
    
    //loop through each customer object's tags and push them into empty array
    for (let i = 0; i < array.length; i++) {
        for (let x = 0; x < array[i].tags.length; x++) {
        allTags.push(array[i].tags[x]);
        }
    }
    
    //use reduce to create a new object of key/value pairs
    //the key name will be the tag string
    //the value of that key will be the number of occurences
    let tagsObj = _.reduce(allTags, function(accObj, tag){

    //loop through the array of customer objects 
    for (let i = 0; i < allTags.length; i++) {
    
            //check to see if number has already occured
            //if the number is already a key in our object, accObj[tag] will be truthy
            if (accObj[tag]) {
            
              //if it already exists as a key, add 1 to the value of that key
              accObj[tag] += 1;
              return accObj;
              
            } else {
                
              //if it is not a property in the object, create the key value pair
              //with value of 1
              accObj[tag] = 1;
              return accObj;
              
            } //close if statement
    } //close i loop

  }, {}); //pass an object literal as the seed to fill with key/value pairs
  
    //convert tagsObj to an array of key/value pairs
    //use Object.entries method to create an array of key/value arrays
    //ie: [[key1, value1], [key2, value2], ...]
    let tagsArray = Object.entries(tagsObj);
    
    //sort tagsArray with highest value (# of occurences) at 0 index
    //sort needs an annonymous function to properly sort
    //b - a will give biggest to smallest on the sort
    tagsArray.sort(function (a, b) {
        //compare the value at index 1 (the occurences) using bracket notation
        return b[1] - a[1];
    });
    
    
    //create array literal to hold all the tags in order from most to least
    let tagsOnlyArray = [];
    //extract the tags from the tagsArray in order using for loop
    for (let i = 0; i < tagsArray.length; i++) {
        tagsOnlyArray.push(tagsArray[i][0]);
    }
    
    //use push method to push the top 3 tags into an array
    let top3TagsArr = [];
    top3TagsArr.push(tagsOnlyArray[0]);
    top3TagsArr.push(tagsOnlyArray[1]);
    top3TagsArr.push(tagsOnlyArray[2]);
    
    //return the top 3 tags array
    return top3TagsArr;
    
};


var genderCount = function(array) {
    
    //create array to hold all the genders
    let allGenders = [];
    
    //loop through each customer object's gender and push them into empty array
    for (let i = 0; i < array.length; i++) {
        allGenders.push(array[i].gender);
    }
    
    //use reduce to create a new object of key/value pairs
    //the key name will be the gender string
    //the value of that key will be the number of occurences
    //return the result of the reduce method
    return _.reduce(allGenders, function(accObj, gender){

    //loop through the array of customer objects 
    for (let i = 0; i < allGenders.length; i++) {
    
        //check to see if number has already occured
        //if the number is already a key in our object, accObj[gender] will be truthy
        if (accObj[gender]) {
        
          //if it already exists as a key, add 1 to the value of that key
          accObj[gender] += 1;
          return accObj;
          
        } else {
            
          //if it is not a property in the object, create the key value pair
          //with value of 1
          accObj[gender] = 1;
          return accObj;
          
        } //close if statement
    } //close i loop

  }, {}); //pass an object literal as the seed to fill with key/value pairs
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
