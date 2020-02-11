// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    
    //make contact object that uses makeContact parameters as the key names 
    //and populates those keys with the arguments passed through the parameters
    //by using them as local variables for the values
    var contact = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
    
    //return the contact object
    return contact;

} 


function makeContactList() {
    
    //make array to hold the individual contacts
    //which will be objects made by the makeContact object above
    var contacts = [];
    
    //return an object with key/value pairs as each API
    return {
        
        //length API returns the length of the contacts array
        length: function() {
            return contacts.length;
        },
        
        //make addContact API key/value pair with contact as function parameter
        addContact: function(contact){
            //push the arguments passed through contact variable into the contacts array
            contacts.push(contact);
        },
        
        //make findContact API key/value pair with fullName as function parameter
        findContact: function(fullName){
            
            //create names array with the value of the fullName string split into array items
            //split first and last name by the " " space between them
            var names = fullName.split(" ");
            
            //create for loop to cycle through both names array and contacts array to find a match
            //start: at index 0
            //stop: at the last index, contacts.length - 1
            //iterate: +1
            for (let i = 0; i <= contacts.length - 1; i++) {
                
                //use if statement to filter for matches
                //use toUpperCase() so test is case insensitive
                //there is a match when both first name AND && last name match
                if((names[0].toUpperCase() === contacts[i].nameFirst.toUpperCase()) && 
                (names[1].toUpperCase() === contacts[i].nameLast.toUpperCase())){
                    
                    //return the contact object stored in the contacts array if  a match is found
                    return contacts[i];
                } else {
                    
                    //return undefined if no match is found
                    return undefined;
                }
            }
            
        },
        
        //make removeContact API key/value pair with contact as the function parameter
        removeContact: function(contact){
            
            //create for loop to cycle through the contacts to find a match
            //there is a match when both first name AND && last name match
            for (let i = 0; i <= contacts.length - 1; i++) {
                if((contact.nameFirst.toUpperCase() === contacts[i].nameFirst.toUpperCase()) && 
                (contact.nameLast.toUpperCase() === contacts[i].nameLast.toUpperCase())){
                    
                    //use .splice(method) to remove contact
                    //create local variable to hold removed contact
                    //start splice at i, the match, remove just 1 item from the array
                    let removed = contacts.splice(i, 1);
                }
            }
        },
        
        //set printAllContactNames as key, and anonymous function() as value
        printAllContactNames: function() {
            
            //create array literal to hold names for future string
            var futureStrings = [];
            
            //for loop to loop through the contacts array and push the name strings into futureStrings array
            for (let i = 0; i <= contacts.length - 1; i++) {
                futureStrings.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
                }
            
            console.log(futureStrings);
            
            //join futureStrings into a new string variable, separated by line break "\n"
            var namesString = futureStrings.join("\n");
            
            console.log(namesString);
            
            //return nameString
            return namesString;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
