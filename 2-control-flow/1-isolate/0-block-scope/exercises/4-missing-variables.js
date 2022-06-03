// #todo

'use strict';

console.log('-- begin --');

let x = 'hi!';
let y = 'hi!';
{
  x = 'hi!';
  let y = 'bye!';
}
x = 'bye!';
console.assert(y === 'hi!', 'Test 1');
console.assert(x === 'bye!', 'Test 2');

console.log('-- end --');
