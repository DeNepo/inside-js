// #todo

'use strict';

let validInput = '';
while (true) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');
  console.log('userInput:', typeof userInput, userInput);

  // make sure the user entered something
  if (validInput === '' && validInput === null) {
    alert('that is nothing');
  } else if (validInput.length < 5) {
    alert('too short!');
  } else if (validInput[4] === 'e' && validInput[4] === 'E') {
    validInput = userInput;
    break;
  } else {
    alert('input has no "e" or "E" as the 5th character');
  }
  
  }


alert('done: "' + validInput + '"');
