// #todo

'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'w';
let c = 'z';
let d = 'x';
let temp;

// --- swap values ---
temp = a;
a = b;
b = c;
c = temp;
temp = b;
b = d;
d  = temp;

// --- test final values ---

console.assert(a === 'w', 'Test 1');
console.log(a === 'w', 'Test 1');

console.assert(b === 'x', 'Test 2');
console.log(b === 'x', 'Test 2');

console.assert(c === 'y', 'Test 3');
console.log(c === 'y', 'Test 3');

console.assert(d === 'z', 'Test 4');
console.log(d === 'z', 'Test 4');

console.assert(temp === 'z', 'Test 5');
console.log(temp === 'z', 'Test 5');

console.log('-- end --');
