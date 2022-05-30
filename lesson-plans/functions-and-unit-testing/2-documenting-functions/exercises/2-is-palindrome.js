'use strict';

console.log('-- begin --');

/**
 * Program check if the string is the same when its reversed
 *
 * @param {string} toCheck - string being reversed and checked
 * @return {boolean}  if reversed text = toCheck returns true else false
 */
const isPalindrome = (toCheck) => {
  let reversed = '';
  for (const character of toCheck) {
    reversed = character + reversed;
  }
  return toCheck === reversed;
};

const _1_expect = false;
const _1_actual = isPalindrome('Racecar');
console.assert(_1_actual === _1_expect, 'Test 1');
console.log(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = isPalindrome('apple');
console.assert(_2_actual === _2_expect, 'Test 2');
console.log(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = isPalindrome('racecar');
console.assert(_3_actual === _3_expect, 'Test 3');
console.log(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = isPalindrome('hannah');
console.assert(_4_actual === _4_expect, 'Test 4');
console.log(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');
