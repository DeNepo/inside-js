// #todo

'use strict';

console.log('-- begin --');

const a = 3;
let b = 3;
{
  const a = 5;
  b = a;
}
console.assert(_ === 5, 'Test 1');

console.log('-- end --');
