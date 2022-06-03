// #todo

'use strict';

console.log('-- begin --');

let m = 0;
{
  let l = 10;
  const m = 1;
  l = 0;
}
console.assert(m === 0, 'Test 1');

console.log('-- end --');
