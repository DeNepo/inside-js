'use strict';

/* refactoring for-of

  `for-of` loops can always be refactored to a `for` loop
  and `for` loops can always be refactored to a `while` loop

*/

const name = 'alice';

console.log('-- for-of --');

for (const letter of name) {
  console.log(letter);
}

console.log('-- for --');

for (let i = 0; i < name.length; i++) {
  const letter = name[i];
  console.log(letter);
}

console.log('-- while --');

let i = 0;
while (i < name.length) {
  const letter = name[i];
  console.log(letter);
  i++;
}
