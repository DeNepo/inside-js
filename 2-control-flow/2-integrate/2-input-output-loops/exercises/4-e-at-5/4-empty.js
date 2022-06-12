// #todo

'use strict';

let isValid = false;
 let validInput;
while (!isValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  if (userInput === null || userInput === '') {
    alert('that is nothing');
  } else if (userInput.length < 5) {
    alert('too short');
  } else if (userInput.lastIndexOf('e') === 4  || userInput.lastIndexOf('E') === 4) {
   validInput = userInput;
  } else {
    alert('input has no "e" or "E" as the 5th character');
  }
  isValid = true;
}

alert('done: "' + validInput + '"');
