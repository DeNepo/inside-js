// #todo

'use strict';

console.log('-- begin --');

console.assert(isNaN(undefined), 'Test 1');
console.log(isNaN(undefined), 'Test 1');

console.assert(Number(null) === 0, 'Test 2');
console.log(Number(null) === 0, 'Test 2');

console.assert(isNaN('four'), 'Test 3');
console.log(isNaN('four'), 'Test 3');

console.assert(Number(true) === 1, 'Test 4');
console.log(Number(true) === 1, 'Test 4');

console.assert(Number(false) === 0, 'Test 5');
console.log(Number(false) === 0, 'Test 5');

console.assert(Number('-1') === -1, 'Test 6');
console.log(Number('-1') === -1, 'Test 6');

console.assert(Number('0') === 0, 'Test 7');
console.log(Number('0') === 0, 'Test 7');

console.assert(Number('') === 0, 'Test 8');
console.log(Number('') === 0, 'Test 8');

console.assert(isNaN(NaN), 'Test 9');
console.log(isNaN(NaN), 'Test 9');


console.log('-- end --');
