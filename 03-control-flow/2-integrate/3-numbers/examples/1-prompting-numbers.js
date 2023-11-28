'use strict';

/* Prompting Numbers

  prompt only returns a string or null
  so if you want a number from a user
  you will need to cast the string to a number

*/

// initialize to NaN so the while loop will begin
let userNumber = NaN;

// check if the user inputted a valid number
while (Number.isNaN(userNumber)) {
  // ask the user for a number
  //  this will be a string or null!
  const input = prompt('enter a number');
  // if the user canceled, don't try casting the input
  if (input !== null) {
    // cast the input string to a number
    //  the `while` check will handle the rest
    userNumber = Number(input);
  }
}

alert(`your number is ${userNumber}`);
