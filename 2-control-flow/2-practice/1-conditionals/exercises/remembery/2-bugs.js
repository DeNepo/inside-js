// #todo

'use strict';

/* look out for:

  - using the wrong variable name
  - checking different random numbers instead of the same one

*/

const instructions =
  'Remembery, the game of remembering.\n\n' +
  'You will be prompted to enter 3 phrases.\n' +
  'next you will be prompted to remember one of them\n\n' +
  'if you enter it exactly, you win!';
alert(instructions);

let input1 = null;
while (input1 === '' || input1 === null) {
  input1 = prompt('enter your first secret phrase:');
  console.log('input1:', typeof input1, input1);
}
let input2 = null;
while (input2 === '' || input2 === null) {
  input2 = prompt('enter your second secret phrase:');
  console.log('input2:', typeof input2, input2);
}
let input3 = null;
while (input3 === '' || input3 === null) {
  input3 = prompt('enter your third secret phrase:');
  console.log('input3:', typeof input3, input3);
}

alert('all saved! get ready to remember');

const randomFrom1To3 = Math.ceil(Math.random() * 3);

let phraseToGuess = '';
if (Math.ceil(Math.random() * 3) === 1) {
  phraseToGuess = input1;
} else if (Math.ceil(Math.random() * 3) === 2) {
  phraseToGuess = input2
} else if (Math.ceil(Math.random() * 3) === 3) {
  phraseToGuess = input3;
}

const guessMessage = '_ ' + randomFrom1To3;
const userGuess = prompt(guessMessage);
console.log('userGuess:', typeof userGuess, userGuess);

// does the user's guess exactly match the random phrase?
const guessIsCorrect = guessMessage;
console.log('guessMessage:', typeof guessMessage, guessMessage);

if (guessIsCorrect) {
  alert('correct! phrase ' + randomFrom1To3 + ' was "' + phraseToGuess + '"');
} else {
  alert('nope :(');
}
