'use strict';
console.log('-- begin --');

// fill in the blanks to pass the assertions
// add default parameters of the correct type
// fill in the documentation to describe the functions

const scramble = (param1, param2, param3) => {
  const result = param1 + param2 + param3;
  return result;
};

const returned1 = scramble('c', 'a', 'b');
console.assert(returned1 === 'cab', 'Test 1');
console.log(returned1 === 'cab', 'Test 1')

const returned2 = scramble('a', 'b', 'c');
console.assert(returned2 === 'abc', 'Test 2');
console.log(returned2 === 'abc', 'Test 2');

const returned3 = scramble('a', 'c', 'b');
console.assert(returned3 === 'acb', 'Test 3');
console.log(returned3 === 'acb', 'Test 3');

const returned4 = scramble('c', 'b', 'a');
console.assert(returned4 === 'cba', 'Test 4');
console.log(returned4 === 'cba', 'Test 4');


const returned5 = scramble('c', 'a', 'b');
console.assert(returned5 === 'cab', 'Test 5');
console.log(returned5 === 'cab', 'Test 5');

const returned6 = scramble('b', 'a', 'c');
console.assert(returned6 === 'bac', 'Test 6');
console.log(returned6 === 'bac', 'Test 6');

console.log('-- end --');
