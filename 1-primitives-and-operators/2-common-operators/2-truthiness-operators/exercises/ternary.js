// #todo

'use strict';

console.log('-- begin --');

// fill in the blanks to pass the assertions
//  there will only be one correct answer

const _1_expect = 'A';
const _1_actual = true ? 'A' : 'B';
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'A';
const _2_actual = 1 ? 'A' : 'B';
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'B';
const _3_actual = null ? 'A' : 'B';
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'A';
const _4_actual = -100 ? 'A' : 'B';
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'A';
const _5_actual = true ? 'A' : 'B';
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'A';
const _6_actual = 'false' ? 'A' : 'B';
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 'A';
const _7_actual = '-0.0' ? 'A' : 'B';
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'B';
const _8_actual = -0.0 ? 'A' : 'B';
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'B';
const _9_actual = '' ? 'A' : 'B';
console.assert(_9_actual === _9_expect, 'Test 9');

console.log('-- end --');
