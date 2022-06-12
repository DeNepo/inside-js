// #todo

'use strict';

let userInput = '';
while (userInput === '') {
  userInput = prompt('Please enter word greater than 5');

  if (userInput === '' && userInput ===null) {
    alert('that is nothing!')
  } else if (userInput.length <= 5) {
    alert('too short');
    continue;
  }
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
