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
console.log(temp === 'y', 'Step 1.1');
console.assert(a === 'y', 'Step 1.2');
console.log(a === 'y', 'Step 1.2');

a = c;
console.assert(a === 'x', 'Step 2.1');
console.log(a === 'x', 'Step 2.1');
console.assert(c === 'x', 'Step 2.2');
console.log(c === 'x', 'Step 2.2');

c = temp;
console.assert(c === 'y', 'Step 3.1');
console.log(c === 'y', 'Step 3.1');
console.assert(temp === 'y', 'Step 3.2');
console.log(temp === 'y', 'Step 3.2');

temp = c;
console.assert(temp === 'y', 'Step 4.1');
console.log(temp === 'y', 'Step 4.1');
console.assert(c === 'y', 'Step 4.2');
console.log(c === 'y', 'Step 4.2');

c = b;
console.assert(c === 'z', 'Step 5.1');
console.log(c === 'z', 'Step 5.1');
console.assert(b === 'z', 'Step 5.2');
console.log(b === 'z', 'Step 5.2');

b = temp;
console.assert(b === 'y', 'Step 6.1');
console.log(b === 'y', 'Step 6.1');
console.assert(temp === 'y', 'Step 6.2');
console.log(temp === 'y', 'Step 6.2');

// --- test final values ---

console.assert(a === 'x', 'Test 1');

console.assert(b === 'y', 'Test 2');

console.assert(c === 'z', 'Test 3');

console.assert(temp === 'y', 'Test 4');

console.log('-- end --');
