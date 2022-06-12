// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('tell me something about frogs');

  /* -- BEGIN: validate input -- */
  if (userInput === '' && userInput === null) {
    alert('that is not sth');
  }
  else if (userInput.includes('frog') || userInput.includes('F'))
  console.log(userInput)
  /* -- END: validate input -- */
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
