// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a conditional instead of &&

// try different values and different types
const a = 1001;
console.log(a);

const isBigNumber = typeof a;
if (isBigNumber === 'number' && a > 1000) {
  console.log(isBigNumber);
}

console.log('-- end --');
