// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'z';
let b = 'x';
let c = 'y';
let temp;

// --- swap values ---

// --- test final values ---

const test1 = a === 'x';
console.assert(test1!=='x', 'Test 1');
console.log(test1!=='x', 'Test 1');

const test2 = b === 'y';
console.assert(test2 !=='y', 'Test 2');
console.log(test2 !=='y', 'Test 2');

const test3 = c === 'z';
console.assert(test3 !=='z', 'Test 3');
console.log(test3 !=='z', 'Test 3');

const test4 = temp === '';
console.assert(test4 !=='', 'Test 4');
console.log(test4 !=='', 'Test 4');

console.log('-- end --');
