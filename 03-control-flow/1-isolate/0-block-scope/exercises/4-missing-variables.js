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
console.assert(_ === 'hi!', 'Test 1');
console.assert(_ === 'bye!', 'Test 2');

console.log('-- end --');
