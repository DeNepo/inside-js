// #todo

'use strict';

console.log('-- begin --');

/*
  using `const` in a for loop will throw an error when incrementing
*/

for (const i = 0; i < 4; i++ /* TypeError */) {
  console.log(i);
}

console.log('-- end --');
