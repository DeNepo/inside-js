// #todo

'use strict';

console.log('-- begin --');

/* fill in the blanks to pass the assertions

  pay close attention to how each variable is used!
  - is a variable assigned a value when it is declared?
  - is a variable reassigned later in the script?

  your challenge is to decide whether to use let or to use const
  - use let if
    the variable is declared without an assignment
    or the variable is ever reassigned later in the script
  - use const if
    the variable is declared with a value and never reassigned

*/

const x = 'a';
console.assert(x === 'a', 'Test 1');
console.log(x === 'a', 'Test 1');

let y = 'b';
console.assert(y === 'b', 'Test 2');
console.log(y === 'b', 'Test 2');

console.assert(x === 'a', 'Test 3');
console.log(x === 'a', 'Test 3');

let z = '';
console.assert(z === '', 'Test 4');
console.log(z === '', 'Test 4');

console.assert(y === 'b', 'Test 5');
console.log(y === 'b', 'Test 5');

z = 'c';
console.assert(z === 'c', 'Test 6');
console.log(z === 'c', 'Test 6');

y = y + 'd';
console.assert(y === 'bd', 'Test 7');
console.log(y === 'bd', 'Test 7');

console.assert(x === 'a', 'Test 8');
console.log(x === 'a', 'Test 8');

console.log('-- end --');
