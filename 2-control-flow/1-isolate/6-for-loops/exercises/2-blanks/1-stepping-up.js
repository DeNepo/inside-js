// #todo

'use strict';

console.log('-- begin --');

/* Stepping Up

  Stepper Variables change systematically,
    going through a series of values for control flow

  "Stepper" describes how you are using a variable
    this term is not a JavaScript thing
    it's a general programming concept

  for loops are designed for stepping
    i is the stepper in this exercise


  fill in the loop condition and update the stepper variable

*/

const toRepeat = 'howdy';
const totalRepetitions = 4;

let repeatedString = '';

for (let i = 0; i < totalRepetitions; i++) {
  repeatedString += toRepeat;
  console.log(repeatedString);
}

console.assert(
  repeatedString === 'howdyhowdyhowdyhowdy',
  '"howdy" should be repeated 4 times',
);

console.log('-- end --');
