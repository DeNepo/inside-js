// #todo

'use strict';

console.log('-- begin --');

console.assert(String(undefined) === 'undefined', 'Test 1');
console.log(String(undefined) === 'undefined', 'Test 1');

console.assert(String(null) === 'null', 'Test 2');
console.log(String(null) === 'null', 'Test 2')

console.assert(String(100) === '100', 'Test 3');
console.log(String(100) === '100', 'Test 3');

console.assert(String(true) === 'true', 'Test 4');
console.log(String(true) === 'true', 'Test 4')

console.assert(String(false) === 'false', 'Test 5');
console.log(String(false) === 'false', 'Test 5');

console.assert(String(-1) === '-1', 'Test 6');
console.log(String(-1) === '-1', 'Test 6');

console.assert(String(0) === '0', 'Test 7');
console.log(String(0) === '0', 'Test 7');

console.assert(String(Infinity) === 'Infinity', 'Test 8');
console.log(String(Infinity) === 'Infinity', 'Test 8');

console.assert(String(NaN) === 'NaN', 'Test 9');
console.log(String(NaN) === 'NaN', 'Test 9');

console.log('-- end --');
