// #todo

'use strict';

/* Prompt: Something or Nothing

  the most basic validation you will need to make:

    did the user input something?

  you can do this by checking for empty strings and null

*/

const userInput = prompt('please input something');
console.log(typeof userInput, userInput);

if (userInput === null || userInput === '') {
  alert('nothing!  why !!! ??? !!!');
} else {
  alert('you inputted: ' + userInput);
}
