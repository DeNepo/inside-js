// #todo

'use strict';

console.log('-- begin --');

// fill in the blanks to pass the assertions
//  there may be more than one correct answer

const _1_expect = _;
const _1_actual = 0 || 0;
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = _;
const _2_actual = 1 || 0;
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = _;
const _3_actual = 0 || 1;
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = _;
const _4_actual = 1 || 1;
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'asdf';
const _5_actual = '' || _;
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = _;
const _6_actual = 'asdf' || '';
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = true;
const _7_actual = _ || false;
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = _;
const _8_actual = NaN || undefined;
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = _;
const _9_actual = Infinity || 'asdf';
console.assert(_9_actual === _9_expect, 'Test 9');

console.log('-- end --');
