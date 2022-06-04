// #todo

'use strict';

console.log('-- begin --');

/* Stepping Down

  Stepper Variables change systematically,
    going through a series of values for control flow

  "Stepper" describes how you are using a variable
    this term is not a JavaScript thing
    it's a general programming concept


  fill in the loop condition and update the stepper variable

*/

const holiday = 'winter solstice';
const message = ' days remaining until ' + holiday;

/* declare and assign the stepper variable
  this stepper is used to count down the days to a holiday
*/
let daysRemaining = 14;
while (daysRemaining) {
  const tweet = daysRemaining + message;
  console.log(tweet);

  daysRemaining -=1;
}

const finalTweet = 'today is ' + holiday + '!';
console.log(finalTweet);

console.assert(daysRemaining === 0, 'there are 0 days remaining');

console.log('-- end --');
