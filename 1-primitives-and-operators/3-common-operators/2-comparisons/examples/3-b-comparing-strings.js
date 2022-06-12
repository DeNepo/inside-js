// #todo

'use strict';

console.log('-- begin --');

/* Comparing Strings

  when comparing strings JavaScript will do these steps behind the scenes:
  1. convert the first character of each string to their unicode number
  2. compare the unicode numbers
    a. if one number is greater than the other, then that string is greater. done!
    b. else, take the second characters in each string and go back to step 2

  https://javascript.info/comparison#string-comparison


*/

// this is equivalent to writing:  97 > 65
const _1_implicit = 'a' > 'A';
const _1_explicit = 'a'.charCodeAt() > 'A'.charCodeAt();
console.log(typeof _1_implicit, _1_implicit);
console.log(typeof _1_explicit, _1_explicit);

// this is equivalent to writing:  46 < 33
const _2_implicit = '.' < '!';
const _2_explicit = '.'.charCodeAt() < '!'.charCodeAt();
console.log(typeof _2_implicit, _2_implicit);
console.log(typeof _2_explicit, _2_explicit);

// this is equivalent to writing:  55356 >= 55358
const _3_implicit = '🎃' >= '🧂';
const _3_explicit = '🎃'.charCodeAt() >= '🧂'.charCodeAt();
console.log(typeof _3_implicit, _3_implicit);
console.log(typeof _3_explicit, _3_explicit);

// this is equivalent to writing:  34 <= 96
const _4_implicit = '"' <= '`';
const _4_explicit = '"'.charCodeAt() <= '`'.charCodeAt();
console.log(typeof _4_implicit, _4_implicit);
console.log(typeof _4_explicit, _4_explicit);

// how are these strings compared?
const _5_manyCharacters = 'aaaa' > 'aaba';
console.log(typeof _5_manyCharacters, _5_manyCharacters);

// what happens if two strings are the same until one is longer?
const _6_differentLengths = 'abc' < 'abcd';
console.log(typeof _6_differentLengths, _6_differentLengths);

console.log('-- end --');
