// #todo

'use strict';

console.log('-- begin --');

const a = 3;
console.assert(a === _, 'Test 1');
{
  const a = 5;
  console.assert(a === _, 'Test 2');
}
console.assert(a === _, 'Test 3');

console.log('-- end --');
