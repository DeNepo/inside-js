// #todo

'use strict';

/* Prompting for Strings

  you can ask users for more specific input

  but then you have to check to make sure they did it!

*/

const userInput = prompt('please enter something with an "a" in it');
console.log(typeof userInput, userInput);

if (userInput === null || userInput === '') {
  alert('nothing!  why !!! ??? !!!');
} else {
  // search will return the index of your search value in the string
  //  if the search value does not exist, it returns -1
  // here we are checking to make sure 'a' is in the user input
  if (userInput.includes('a')) {
    alert(`"${userInput}" is perfect!`);
  } else {
    alert(`"${userInput}" has no "a" in it`);
  }
}
