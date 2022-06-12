// #todo

'use strict';

console.log('-- begin --');

console.assert(Boolean(undefined) === false, 'Test 1');
console.log(Boolean(undefined) === false, 'Test 1');

console.assert(Boolean(null) === false, 'Test 2');
console.log(Boolean(null) === false, 'Test 2');

console.assert(Boolean(-1) === true, 'Test 3');
console.log(Boolean(-1) === true, 'Test 3');

console.assert(Boolean(0) === false, 'Test 4');
console.log(Boolean(0) === false, 'Test 4');

console.assert(Boolean(1) === true, 'Test 5');
console.log(Boolean(1) === true, 'Test 5');

console.assert(Boolean('-1') === true, 'Test 6');
console.log(Boolean('-1') === true, 'Test 6');

console.assert(Boolean('0') === true, 'Test 7');
console.log(Boolean('0') === true, 'Test 7');

console.assert(Boolean('') === false, 'Test 8');
console.log(Boolean('') === false, 'Test 8');

console.assert(Boolean(NaN) === false, 'Test 9');
console.log(Boolean(NaN) === false, 'Test 9');

console.log('-- end --');
