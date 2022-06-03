// #todo

'use strict';

console.log('-- begin --');

let x = 3;
console.assert(x === 3, 'Test 1: x');
{
  x = 10;
  const y = 5;

  console.assert(x === 10, 'Test 2: x');
  console.assert(y === 5, 'Test 3: y');
}
console.assert(x === 10, 'Test 4: x');

console.log('-- end --');
