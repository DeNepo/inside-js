// #todo

'use strict';

/* comparing NaN

  these exercises use `Object.is` instead of `===`

  why? so you can compare to NaN

*/

console.log('-- begin --');

const _1_number = Number(undefined);
console.assert(Object.is(_1_number, __), 'Test 1');

const _2_number = Number(null);
console.assert(Object.is(_2_number, __), 'Test 2');

const _3_number = Number('four');
console.assert(Object.is(_3_number, __), 'Test 3');

const _4_number = Number(true);
console.assert(Object.is(_4_number, __), 'Test 4');

const _5_number = Number(false);
console.assert(Object.is(_5_number, __), 'Test 5');

const _6_number = Number('-1');
console.assert(Object.is(_6_number, __), 'Test 6');

const _7_number = Number('0');
console.assert(Object.is(_7_number, __), 'Test 7');

const _8_number = Number('');
console.assert(Object.is(_8_number, __), 'Test 8');

const _9_number = Number(NaN);
console.assert(Object.is(_9_number, __), 'Test 9');

console.log('-- end --');
