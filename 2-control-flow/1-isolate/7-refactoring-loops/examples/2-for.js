'use strict';

/* refactoring `for` loops

  `for` loops can always be refactored to `while` loops
    the `while` loop may just be harder to read
    and the stepper variable will not be block scoped

  but not always to a `for-of` loop!
    `for-of` loops only step through a sequence of values in order
    `for` loops can do all sorts of crazy things

*/

const max = 10;

console.log('-- for --');

for (let i = max; i >= 0; i -= 2) {
  console.log(i);
}

console.log('-- while --');

let j = max;
while (j >= 0) {
  console.log(j);
  j -= 2;
}
