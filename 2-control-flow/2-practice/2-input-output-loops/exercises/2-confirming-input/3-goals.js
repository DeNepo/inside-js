// #todo

'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {
  userInput = prompt('enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === '' && userInput === null) {
    alert('nothing is not a name');
    continue;
  }
  let confirmMessage = 'is this correct?\n"' + userInput +'"';
  const userConfirmed = confirm(confirmMessage);
  console.log('user confirmed', typeof userConfirmed, userConfirmed);

  if (userConfirmed) {
    break;
  }
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
