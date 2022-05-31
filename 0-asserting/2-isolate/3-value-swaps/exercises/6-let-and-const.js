// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'z';
let c = 'x';
let temp;

// --- swap values ---

temp = a;
console.assert(temp === 'y', 'Step 1.1');
console.assert(a === 'y', 'Step 1.2');

a = b;
console.assert(a === 'z', 'Step 2.1');
console.assert(b === 'z', 'Step 2.2');

const d = a;
console.assert(d === 'z', 'Step 3.1');
console.assert(a === 'z', 'Step 3.2');

// --- test final values ---

console.assert(a === 'z', 'Test 1');

console.assert(b === 'z', 'Test 2');

console.assert(c === 'x', 'Test 3');

console.assert(d === 'z', 'Test 4');

console.assert(temp === 'y', 'Test 5');

console.log('-- end --');
