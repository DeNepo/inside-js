// #todo

'use strict';

console.log('-- begin --');

/* if / else

  if (condition) {
    statements1
  } else if (condition2) {
    statements2
  } ...
    ...
  } else if (conditionN) {
    statementN
  }

  like if, but with multiple options
  it's possible that nothing will happen

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
} else if (typeof value === 'boolean') {
  console.log('value is a boolean');
  path = 'else if';
}

console.log(path);

console.log('-- end --');
