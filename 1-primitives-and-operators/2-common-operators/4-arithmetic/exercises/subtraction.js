// #todo

'use strict';

console.log('-- begin --');

// a - b
// cast both values to Number then do subtraction

const _1_expect = 0; // __
const _1_native = '1' - 1;
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_expect = 0; // __
const _2_native = '' - null;
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_expect = 0; // __
const _3_native = false - null;
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_expect = 12; // 12 - 0
const _4_native = '12' - false;
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_expect = -1; // __
const _5_native = false - true;
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_expect = -Infinity; // __
const _6_native = '13' - Infinity;
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_expect = NaN; // __
const _7_native = '18' - 'aa';
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_expect = NaN; // __
const _8_native = 'hello' - 'goodbye';
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_expect = NaN; // NaN - ''
const _9_native = undefined - '';
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

console.log('-- end --');
