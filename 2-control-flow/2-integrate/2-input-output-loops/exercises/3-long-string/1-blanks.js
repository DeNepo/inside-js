// #todo

'use strict';

let userInput = '';
let isTooShort = true;
while (isTooShort) {
  userInput = prompt('enter anything longer than 5 characters');
  console.log('userInput:', typeof userInput, userInput);

  // continue if the user did not input anything
  if (userInput === '' && userInput === null) {
    alert('You enter anything')
  }
  // continue if the input is too short (5 characters or less)
  if (userInput.length <= 5) {
    alert('too short');
  }

  // toggle the flag variable, telling the loop to finish
  isTooShort = false;
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
