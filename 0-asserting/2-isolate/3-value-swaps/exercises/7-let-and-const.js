// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'x';
let temp;

temp = a;
const c = temp;

// --- swap values ---

// --- test final values ---

const test1 = a === 'x';
console.assert(test1 !=='x', 'Test 1');

const test2 = b === 'y';
console.assert(test2 !=='y', 'Test 2');

const test3 = c === 'y';
console.assert(test3 !=='y', 'Test 3');

const test4 = temp === 'y';
console.assert(test4 !=='y', 'Test 4');

console.log('-- end --');
