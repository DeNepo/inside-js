// #todo

'use strict';

console.log('-- begin --');

/* Comparing Numbers

  comparing numbers is the simplest, so let's start here

  the result of comparing numbers will always be a boolean value
  comparing numbers works (almost always) like you'd expect
  you can (almost always) think of it like comparing numbers in real life

  there are some edge cases where number comparisons don't behave as you'd expect
  but you can worry about those when you face them in your code
  - https://dev.to/alldanielscott/how-to-compare-numbers-correctly-in-javascript-1l4i

*/

const fiveIsGreaterThanFour = 5 > 4;
console.log(typeof fiveIsGreaterThanFour, fiveIsGreaterThanFour);

const oneIsGreaterThanOrEqualToPointFive = 1 >= 0.5;
console.log(
  typeof oneIsGreaterThanOrEqualToPointFive,
  oneIsGreaterThanOrEqualToPointFive,
);

const nineIsLessThanNegativeNine = 9 < -9;
console.log(typeof nineIsLessThanNegativeNine, nineIsLessThanNegativeNine);

const zeroIsLessThanOrEqualToNegativeOne = 0 <= -1;
console.log(
  typeof zeroIsLessThanOrEqualToNegativeOne,
  zeroIsLessThanOrEqualToNegativeOne,
);

console.log('-- end --');
