// #todo

'use strict';

console.log('-- begin --');

/* Iterating Strings

  for loops are especially helpful for iterating over a series of values

  strings are a series of characters

  a great use-case for for loops is iterating through the characters in a string

*/

const aString = 'wxyz';
// const aString = 'x';
// const aString = '    !';
// const aString = 'Hello';
// const aString = '';
console.log('aString:', aString);
console.log('aString.length:', aString.length);

/* accessing individual characters

  you can get a single character from a string using brackets

  careful, the "first" character is actually 0!
  and the last is one fewer less than the length ;)

*/
console.log('aString[-1]:', aString[-1]);
console.log('aString[0]:', aString[0]);
console.log('aString[1]:', aString[1]);
console.log('aString[2]:', aString[2]);
console.log('aString[3]:', aString[3]);
console.log('aString[4]:', aString[4]);

console.log('-- iterating forwards');

for (let index = 0; index < aString.length; index++) {
  const nextCharacter = aString[index];
  console.log(index, nextCharacter);
}

console.log('-- iterating backwards');

for (let index = aString.length - 1; index >= 0; index--) {
  const nextCharacter = aString[index];
  console.log(index, nextCharacter);
}

console.log('-- end --');
