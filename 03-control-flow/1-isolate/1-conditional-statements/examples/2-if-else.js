// #todo

'use strict';

console.log('-- begin --');

/* if / else

  if (condition) {
    statements1
  } else {
    statements2
  }

  like if, but with an alternative
  something will always happen
  either the if or the else will be evaluated

  (the comparison steps behind the scenes are the same as before)

*/

const value = 123;
// const value = '123';
// const value = true;
// const value = undefined;
// const value = null;
// const value = 'hello';
// const value = NaN;

let path = '';

if (typeof value === 'number') {
  console.log('value is a number');
  path = 'if';
} else {
  console.log('value is not a number');
  path = 'else';
}

console.log(path);

console.log('-- end --');
