// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'z';
let c = 'w';
let d = 'x';
let temp;

// --- swap values ---

// --- test final values ---

const test1 = a === 'w';
console.assert(test1 !== 'w', 'Test 1');
console.log(test1 !== 'w', 'Test 1');

const test2 = b === 'x';
console.assert(test2 !== 'x', 'Test 2');
console.log(test2 !== 'x', 'Test 2');

const test3 = c === 'y';
console.assert(test3 !== 'y', 'Test 3');
console.log(test3 !== 'y', 'Test 3');

const test4 = d === 'z';
console.assert(test4 !== 'z', 'Test 4');
console.log(test4 !== 'z', 'Test 4');

const test5 = temp === null;
console.assert(test5 !==null, 'Test 5');
console.log(test5 !==null, 'Test 5');
console.log('-- end --');
