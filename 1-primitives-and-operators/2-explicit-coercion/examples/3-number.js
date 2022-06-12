// #todo

'use strict';

console.log('-- begin --');

// casting to number is the most complicated coercion
//  but it's understandable!  you'll just need to learn a few rules

const _1_toCast = undefined;
const _1_number = Number(_1_toCast);
console.log(typeof _1_toCast, _1_toCast, '->', _1_number);

const _2_toCast = null;
const _2_number = Number(_2_toCast);
console.log(typeof _2_toCast, _2_toCast, '->', _2_number);

const _3_toCast = true;
const _3_number = Number(_3_toCast);
console.log(typeof _3_toCast, _3_toCast, '->', _3_number);

const _4_toCast = false;
const _4_number = Number(_4_toCast);
console.log(typeof _4_toCast, _4_toCast, '->', _4_number);

const _5_toCast = '';
const _5_number = Number(_5_toCast);
console.log(typeof _5_toCast, _5_toCast, '->', _5_number);

const _6_toCast = '   ';
const _6_number = Number(_6_toCast);
console.log(typeof _6_toCast, _6_toCast, '->', _6_number);

const _7_toCast = '12.3';
const _7_number = Number(_7_toCast);
console.log(typeof _7_toCast, _7_toCast, '->', _7_number);

const _8_toCast = '-0.0';
const _8_number = Number(_8_toCast);
console.log(typeof _8_toCast, _8_toCast, '->', _8_number);

const _9_toCast = 'four';
const _9_number = Number(_9_toCast);
console.log(typeof _9_toCast, _9_toCast, '->', _9_number);

console.log('-- end --');
