// #todo

'use strict';

console.log('-- begin --');

const a = 3;
console.assert(a === 3, 'Test 1');
{
  const a = 5;
  console.assert(a === 5, 'Test 2');
}
console.assert(a === 3, 'Test 3');

console.log('-- end --');
