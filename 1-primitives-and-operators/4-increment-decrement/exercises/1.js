// #todo

'use strict';

console.log('-- begin --');

let x = 0;

let y = ++x;
console.assert(x === 1, 'Test 1 x');
console.assert(y === 1, 'Test 1 y');

x = y--;
console.assert(x === 1, 'Test 2 x');
console.assert(y === 0, 'Test 2 y');

let z = x++;

console.assert(x === 2, 'Test 3 x');
console.assert(y === 0, 'Test 3 y');
console.assert(z === 1, 'Test 3 z');

y = --x;
console.log(x)
console.assert(x === 1, 'Test 4 x');
console.assert(y === 1, 'Test 4 y');
console.assert(z === 1, 'Test 4 z');

console.log('-- end --');
